import { FaTwitter, FaGithub, FaMastodon } from 'react-icons/fa'

export const getProfile = () => {
    return {
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
          {
            url: 'https://rogerstringer.com/r/sponsor',
            icon: '☕',
            label: 'Sponsor Me'
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
    };
}
