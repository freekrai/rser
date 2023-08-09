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
        ],
        socials: [
          {
            url: 'https://twitter.com/freekrai',
            icon: 'twitter',
            label: 'Twitter',
          },
          {
            url: 'https://github.com/freekrai',
            icon: 'github',
            label: 'Github',
          },
          {
            url: 'https://mastodon.social/@datamcfly', 
            icon: 'mastodon',
            label: 'Mastodon',
          },
          {
            url: 'https://www.threads.net/@freekrai',
            icon: 'at',
            label: 'Threads'
          },
          {
            url: 'https://buymeacoffee.com/codedgeekery', 
            icon: 'coffee',
            label: 'Buy Me a Coffee',
          }            
        ],
    };
}
