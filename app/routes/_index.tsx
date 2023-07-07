import type { LoaderArgs } from '@vercel/remix';
import { useLoaderData } from '@remix-run/react';
import Button from '~/components/Button';
import { cacheHeader } from 'pretty-cache-header';

import { getProfile } from '~/profile';

import { FaMastodon } from 'react-icons/fa'

import {
  TwitterIcon,
  GithubIcon,
  CoffeeIcon,
  AtSignIcon,
} from 'lucide-react'


export async function loader({ request }: LoaderArgs) {
  return {
    profile: getProfile(),
    date: new Date().toISOString(),
  };
}

export function headers() {
  return {
    "Cache-Control": cacheHeader({
      sMaxage: '30days',
      staleWhileRevalidate: '1day',
      staleIfError: '7days'
    })
  };
}

//export const config = { runtime: 'edge' };

const getIcon = (key: string) => {
   let str = key.toLowerCase();

   if( str === 'mastodon') {
    return <FaMastodon className="h-5 w-5" />
   } 
   if( str === 'twitter') {
    return <TwitterIcon className="h-5 w-5" />
   } 
   if( str === 'github') {
    return <GithubIcon className="h-5 w-5" />
   } 
   if( str === 'at') {
    return <AtSignIcon className="h-5 w-5" />
   } 
   if( str === 'coffee') {
    return <CoffeeIcon className="h-5 w-5" />
   } 
   
   return str;
}

export default function Index() {
  const { profile } = useLoaderData<typeof loader>();

  return (
    <>
      <div className="max-w-7xl mx-auto text-gray-200">
        <div>
          <figure className="p-6">
            <img 
              className="w-32 h-32 rounded-full mx-auto border-4 border-mirage-100 bg-slate-100" 
              src={profile.photo}
              alt={profile.name}
              width="400" 
              height="400" 
            />
            <div className="pt-6 text-center space-y-4">
              <figcaption className="font-medium">
                <div className="text-gray-200 text-2xl">
                  {profile.name}
                </div>
              </figcaption>
              <p className="text-lg font-medium">
                {profile.summary}
              </p>
            </div>
          </figure>
        </div>
      </div>
      <div className="max-w-xs mx-auto">
        {profile.buttons.map( button => (
          <Button
            key={button.url}
            url={button.url}
            label={button.label} 
          />
        ))}
        <div className="pt-6 text-center flex justify-center space-x-5">
          {profile.socials.map( social => (
            <a 
              key={social.url} 
              href={social.url} 
              target="_blank" 
              rel="noreferrer"
              className="text-gray-200 hover:text-gray-600 rounded-full p-2 border-white border-2 hover:border-blue-600 transition ease-in-out duration-150 hover:bg-gray-50 shadow-lg hover:shadow-inner"
            >
              <span className="sr-only">{social.label}</span>
              <span>{getIcon(social.icon)}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
