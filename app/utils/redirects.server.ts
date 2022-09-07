import {getVercelFile} from '~/utils/fs.server'
import type {Key} from 'path-to-regexp'
import {pathToRegexp, compile as compileRedirectPath} from 'path-to-regexp'

function typedBoolean<T>( value: T ): value is Exclude<T, '' | 0 | false | null | undefined> {
    return Boolean(value)
}

const possibleMethods = ['HEAD', 'GET', 'POST', 'PUT', 'DELETE', 'PATCH', '*']

export const parseRedirects = (redirectsString: string) => {
    return redirectsString.split('\n').map((line, lineNumber) => {
      if (!line.trim() || line.startsWith('#')) return null

      let methods, from, to
      const [one, two, three] = line
        .split(' ')
        .map(l => l.trim())
        .filter(Boolean)
      if (!one) return null

      const splitOne = one.split(',')
      if (possibleMethods.some(m => splitOne.includes(m))) {
        methods = splitOne
        from = two
        to = three
      } else {
        methods = ['*']
        from = one
        to = two
      }

      if (!from || !to) {
        console.error(`Invalid redirect on line ${lineNumber + 1}: "${line}"`)
        return null
      }
      const keys: Array<Key> = []

      const toUrl = to.includes('//')
        ? new URL(to)
        : new URL(`https://same_host${to}`)
      try {
        return {
          methods,
          from: pathToRegexp(from, keys),
          keys,
          toPathname: compileRedirectPath(toUrl.pathname, {
            encode: encodeURIComponent,
          }),
          toUrl,
        }
      } catch (error: unknown) {
        // if parsing the redirect fails, we'll warn, but we won't crash
        console.error(
          `Failed to parse redirect on line ${lineNumber}: "${line}"`,
        )
        return null
      }
    })
    .filter(typedBoolean)
}

export const getRedirects = async (path: string, request: Request) => {
    const redirectsString = await getVercelFile('_redirects');
    const redirects = parseRedirects(redirectsString);

    for (const rec of redirects) {
        try {
            if ( !rec.methods.includes('*') && !rec.methods.includes(request.method) ) continue
            const match = path?.match(rec.from)
            if (!match) continue

            const params: Record<string, string> = {}
            const paramValues = match.slice(1)

            for (
                let paramIndex = 0;
                paramIndex < paramValues.length;
                paramIndex++
            ) {
                const paramValue = paramValues[paramIndex]
                const key = rec.keys[paramIndex]
                if (key && paramValue) {
                    params[key.name] = paramValue
                }
            }
            const toUrl = new URL(rec.toUrl)

            toUrl.protocol = 'https';
            //if (toUrl.host === 'same_host') toUrl.host = reqUrl.host
            return toUrl.toString();
        } catch (error: unknown) {
            // an error in the redirect shouldn't stop the request from going through
            console.error(`Error processing redirects:`, {
                error,
                rec,
                'req.url': path,
            })
            return '';
        }
    }
}