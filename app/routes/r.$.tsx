import type {LoaderArgs} from '@vercel/remix'
import { json, redirect } from "@vercel/remix";
import ErrorPage from '~/components/ErrorPage'
import { getRedirects } from '~/utils/redirects.server';

export const loader = async ({request, params}: LoaderArgs) => {
    let path = '/' + params["*"];

    // search our _redirects file to see if there's a match
    const url = await getRedirects(path, request);

    // we found a url? great, redirect
    if( url ){
      return redirect(url, 307);
    }
    // no url show 404 page
    return false;
};

export default function Custom404Page() {
  return (
    <ErrorPage 
        code={404}
        title={`404: Not Found`} 
        message={`Oops! Looks like you tried to visit a page that does not exist.}`} 
    />
 );
}