import 'tailwindcss/tailwind.css'
import {Collapse} from 'react-collapse'
import{ AiOutlineMinus,AiOutlinePlus } from 'react-icons/ai'

const Accordion = ({ open, toggle, title, content }: { title: string; content: string; open: boolean; toggle: any }) => {
    
return (
      <div className='w-4/6 mx-auto'>
        <div
          onClick={toggle}
          className="flex items-center justify-between w-full px-4 py-2 text-lg font-medium text-left text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
        >
          <h3>{title}</h3>
          <div className='text-[22px]'>
            {open ? <AiOutlineMinus/> : <AiOutlinePlus/>}
          </div>
        </div>
        <Collapse isOpened={open}>
        <div className="p-4 mt-4 text-gray-700 bg-gray-100 rounded-lg shadow-md">
            {content}
          </div>
        </Collapse>
         
      </div>
    )
  }
  export default Accordion;
  