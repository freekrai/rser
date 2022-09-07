import {
  ChevronRightIcon
} from '@heroicons/react/24/outline'

import { FaTwitter, FaGithub, FaDiscord } from 'react-icons/fa'

export default function Index() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div>
          <figure className="p-6">
            <img 
              className="w-32 h-32 rounded-full mx-auto border-2 border-blue-500" 
              src="/avatar.png" 
              alt="profile picture" 
              width="400" 
              height="400" 
            />
            <div className="pt-6 text-center space-y-4">
              <figcaption className="font-medium">
                <div className="text-cyan-900 text-xl">
                  Roger Stringer
                </div>
              </figcaption>
              <blockquote>
              <p className="text-md font-medium">
                {`I’m Roger Stringer, a full-stack developer, author, foodie & dad`}
              </p>
              </blockquote>
            </div>
          </figure>
        </div>
      </div>
      <div className="max-w-xs mx-auto">
        <div className="pt-6 text-center space-y-4">
          <a href="https://rogerstringer.com/" target="_blank" className="flex items-start rounded-lg border border-gray-400 bg-white px-5 py-4 text-lg leading-6 font-medium shadow-md hover:shadow-xl transition ease-in-out duration-150">
            <p className="mr-3 h-6 w-6">👨🏽‍💻</p>
            Roger Stringer
            <div className="ml-auto mt-0.5 pl-4">
              <ChevronRightIcon className="h-5 w-5 text-gray-400" />
            </div>
          </a>
        </div>
        <div className="pt-6 text-center space-y-4">
          <a href="https://codedgeekery.com/" target="_blank" className="flex items-start rounded-lg border border-gray-400 bg-white px-5 py-4 text-lg leading-6 font-medium shadow-md hover:shadow-xl transition ease-in-out duration-150">
            <p className="mr-3 h-6 w-6">👨🏽‍💻</p>
            Coded Geekery
            <div className="ml-auto mt-0.5 pl-4">
              <ChevronRightIcon className="h-5 w-5 text-gray-400" />
            </div>
          </a>
        </div>
        <div className="pt-6 text-center flex justify-center space-x-5">
              <a href="https://twitter.com/freekrai" target="_blank" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="https://github.com/freekrai" target="_blank" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">GitHub</span>
                <FaGithub className="h-5 w-5" />
              </a>
        </div>
      </div>
    </>
  );
}
