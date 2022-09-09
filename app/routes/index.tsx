import { FaTwitter, FaGithub } from 'react-icons/fa'

import Button from '~/components/Button';

// profile info, edit this and it will change the info below.
const profile = {
  name: 'Roger Stringer',
  photo: '/avatar.png',
  summary: "full-stack developer, devops engineer, author, foodie & dad",
  buttons: [
    {
      url: 'https://rogerstringer.com/',
      icon: '👨🏽‍💻',
      label: 'Blog: Roger Stringer'
    },
    {
      url: 'https://codedgeekery.com/',
      icon: '👨🏽‍💻',
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
  ],
}

export default function Index() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div>
          <figure className="p-6">
            <img 
              className="w-32 h-32 rounded-full mx-auto border-2 border-slate-300 bg-white" 
              src={profile.photo}
              alt={profile.name}
              width="400" 
              height="400" 
            />
            <div className="pt-6 text-center space-y-4">
              <figcaption className="font-medium">
                <div className="text-cyan-900 text-xl">
                  {profile.name}
                </div>
              </figcaption>
              <blockquote>
              <p className="text-md font-medium">
                {profile.summary}
              </p>
              </blockquote>
            </div>
          </figure>
        </div>
      </div>
      <div className="max-w-xs mx-auto">
        {profile.buttons.map( button => (
          <Button
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
              className="text-gray-400 hover:text-gray-500"
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
