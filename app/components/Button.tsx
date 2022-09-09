import {
  ChevronRightIcon
} from '@heroicons/react/24/outline'

export default function Button({
  url='#',
  label='Website',
  icon='',
}){
    return (
	<div key={url} className="pt-6 text-center space-y-4">
            <a 
              href={url} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-start rounded-lg border border-gray-400 bg-white px-5 py-4 text-lg leading-6 font-medium shadow-md hover:shadow-xl transition ease-in-out duration-150" 
            >
              <p className="mr-3 h-6 w-6">{icon}</p>
              {label}
              <div className="ml-auto mt-0.5 pl-4">
                <ChevronRightIcon className="h-5 w-5 text-gray-400" />
              </div>
            </a>
          </div>
    )
}
