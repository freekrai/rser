import { FaTwitter, FaGithub, FaMastodon } from 'react-icons/fa'

import Button from '~/components/Button';

import { cacheHeader } from 'pretty-cache-header';

export function headers() {
  return {
    "Cache-Control": cacheHeader({
      sMaxage: '30days',
      staleWhileRevalidate: '1day',
      staleIfError: '7days'
    })
  };
}

// profile info, edit this and it will change the info below.
const profile = {
  name: 'Roger Stringer',
  photo: '/avatar.png',
  summary: "Full-stack developer, devops engineer, author, foodie & dad",
  buttons: [
    {
      url: 'https://rogerstringer.com/',
      icon: '👨‍💻',
      label: 'Blog: Roger Stringer'
    },
    {
      url: 'https://codedgeekery.com/',
      icon: '👨‍💻',
      label: 'Blog: Coded Geekery'
    },
  ],
  socials: [
    {
      url: 'https://twitter.com/freekrai',
      icon: <FaTwitter className="h-5 w-5" />,
      label: 'Twitter',
    },
    {
      url: 'https://github.com/freekrai',
      icon: <FaGithub className="h-5 w-5" />,
      label: 'Github',
    },
    {
      url: 'https://mastodon.social/@datamcfly', 
      icon: <FaMastodon className="h-5 w-5" />,
      label: 'Mastodon',
    }
  ],
}

export const config = { runtime: 'edge' };

export default function Index() {
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
            icon={button.icon}
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
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
