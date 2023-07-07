import {
  ChevronRightIcon,
} from 'lucide-react'

/*
text-mirage-500 
hover:border-r-yellow-500 
border-r-4
*/

export default function Button({
  url='#',
  label='Website',
}){
  return (
    <div className="py-4 text-center space-y-4">
      <a 
        href={url} 
        target="_blank" 
        rel="noreferrer"
        className="text-mirage-500 hover:text-gray-100 flex items-start rounded-full border-4 border-mirage-50 bg-white hover:bg-slate-600 hover:border-mirage-200 px-5 py-4 text-lg leading-6 font-medium shadow-md shadow-mirage-500/50 hover:shadow-inner transition ease-in-out duration-150" 
      >
        {label}
        <div className="ml-auto mt-0.5 pl-4">
          <ChevronRightIcon className="h-5 w-5 " />
        </div>
      </a>
    </div>
  )
}
