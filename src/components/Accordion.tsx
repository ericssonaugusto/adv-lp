import 'tailwindcss/tailwind.css'
import { useState } from 'react'

const Accordion = ({ title, content }: { title: string; content: string }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className='w-4/6 mx-auto'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full px-4 py-2 text-lg font-medium text-left text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
        >
          <span>{title}</span>
          <svg
            className={`${isOpen ? 'transform rotate-180' : ''} w-5 h-5`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 6.293a1 1 0 0 1 1.414 0L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="p-4 mt-4 text-gray-700 bg-gray-100 rounded-lg shadow-md">
            {content}
          </div>
        )}
      </div>
    );
  }
  export default Accordion;
  