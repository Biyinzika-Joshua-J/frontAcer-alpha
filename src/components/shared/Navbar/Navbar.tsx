import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className="mx-auto w-[80%]">
            <div className="flex justify-between py-4 items-center">
                <div className="">
                    <span className="text-3xl ">
                        front<span className="font-extrabold text-primary">Acer</span>
                    </span>
                </div>
                <div className="">
                    buttons
                </div>
            </div>
        </div>
        <hr className='h-[1px] w-full bg-black'/>
    </nav>
  )
}

export default Navbar