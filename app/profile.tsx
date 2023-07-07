import { FaMastodon } from 'react-icons/fa'

import {
  TwitterIcon,
  GithubIcon,
  CoffeeIcon,
  AtSignIcon,
} from 'lucide-react'

export const getProfile = () => {
    return {
        name: 'Roger Stringer',
        photo: '/avatar.png',
        summary: "Full-stack developer, devops engineer, author, foodie & dad",
        buttons: [
          {
            url: 'https://rogerstringer.com/',
            label: 'Blog: Roger Stringer'
          },
          {
            url: 'https://codedgeekery.com/',
            label: 'Blog: Coded Geekery'
          },
          {
            url: 'https://chefbrainy.com/',
            label: 'Site: AI Recipe generator'
          },
          {
            url: 'https://rogerstringer.com/r/sponsor',
            label: '☕ Sponsor Me'
          },
        ],
        socials: [
          {
            url: 'https://twitter.com/freekrai',
            icon: <TwitterIcon className="h-5 w-5" />,
            label: 'Twitter',
          },
          {
            url: 'https://github.com/freekrai',
            icon: <GithubIcon className="h-5 w-5" />,
            label: 'Github',
          },
          {
            url: 'https://mastodon.social/@datamcfly', 
            icon: <FaMastodon className="h-5 w-5" />,
            label: 'Mastodon',
          },
          {
            url: 'https://www.threads.net/@freekrai',
            icon: <AtSignIcon className="h-5 w-5" />,
            label: 'Threads'
          },
          {
            url: 'https://buymeacoffee.com/codedgeekery', 
            icon: <CoffeeIcon className="h-5 w-5" />,
            label: 'Buy Me a Coffee',
          }            
        ],
    };
}
