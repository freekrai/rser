import {
  ChevronRightIcon
} from '@heroicons/react/24/outline'

export default function Button({
  url='#',
  label='Website',
  icon='',
}){
  return (
    <div className="py-4 text-center space-y-4">
      <a 
        href={url} 
        target="_blank" 
        rel="noreferrer"
        className="text-gray-800 hover:text-gray-100 flex items-start rounded-lg border border-gray-400 bg-white hover:bg-blue-600 px-5 py-4 text-lg leading-6 font-medium shadow-md hover:shadow-xl transition ease-in-out duration-150" 
      >
        <p className="mr-3 h-6 w-6">{icon}</p>
        {label}
        <div className="ml-auto mt-0.5 pl-4">
          <ChevronRightIcon className="h-5 w-5 " />
        </div>
      </a>
    </div>
  )
}
