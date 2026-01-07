import React, { useState } from 'react'

const ServiceCard = ({service, index}) => {

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);

    const divRef = React.useRef(null);

    const handleMouseMove = (e) => {
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }

  return (
    <div className='relative overflow-hidden max-w-lg m-2 sm:m-4 hover:p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10 transition-all duration-300 ease-in-out' onMouseEnter={()=> setVisible(true)} onMouseLeave={()=> setVisible(false)} ref={divRef} onMouseMove={handleMouseMove}>
    

        <div className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 w-[300px] h-[300px] absolute z-10 transition-opacity duration-500 mix-blend-lighten ${visible ? 'opacity-70' : 'opacity-0'}`} style={{top: position.y - 150, left: position.x - 150}}></div>

            <div className='flex items-center p-8 gap-10 hover:p-8 hover:rounded-xl overflow-hidden transition-all bg-white dark:bg-gray-900 z-10 relative'>

                <div className='bg-gray-100 dark:bg-gray-700 rounded-full'>
                    <img src={service.icon} alt="" className='max-w-24 bg-white dark:bg-gray-900 rounded-full m-2'/>
                </div>

                <div className='flex-1'>
                    <h3 className='font-bold'>{service.title}</h3>
                    <p className='text-sm mt-2'>{service.description}</p>
                </div>

            </div>
        </div>

  )
}

export default ServiceCard