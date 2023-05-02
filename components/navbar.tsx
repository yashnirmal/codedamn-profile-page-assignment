import { SlBell } from 'react-icons/sl';
import {MdOutlineElectricBolt} from 'react-icons/md'
import {TfiSearch} from 'react-icons/tfi'
import { IconContext } from 'react-icons';
import Image from 'next/image';
import { useState } from 'react';


export default function Navbar(){

	const [navSearchFocus,setNavSearchFocus] = useState(false)

	return (
		<div className="w-full p-8 flex justify-between">
			<h1 className="font-bold text-2xl">codedamn</h1>

			<div className="flex gap-6 items-center">

				{/*Search bar*/}
				<div className={`flex items-center input-style p-0 px-2 ${navSearchFocus?'border-blue-600':'border-gray-100'} `} onClick={()=>setNavSearchFocus(true)} onBlur={()=>setNavSearchFocus(false)}>
					<IconContext.Provider value={{color:"gray",size:"1.3rem"}}>
						<div>
							<TfiSearch />
						</div>
					</IconContext.Provider>
					
					<input className='border-none p-2 m-0 outline-0 ' type="text" placeholder="Search" />

					<div className='bg-gray-200 text-sm py-1 px-2 rounded-lg text-gray-600'>
						Courses
					</div>
				</div>

				{/*XPs*/}
				<div className='font-bold text-blue-700 flex items-center gap-1'>
					<IconContext.Provider value={{color:"blue",size:"1.3rem"}}>
						<MdOutlineElectricBolt />
					</IconContext.Provider>
					<p>2</p>
				</div>

				{/*Notifications*/}
				<div className="relative">
					<IconContext.Provider value={{size:"1.3rem"}}>
						<SlBell />
					</IconContext.Provider>
					<div className='w-4 text-xs aspect-square absolute -top-2 -right-1 rounded-full flex items-center justify-center bg-red-400'>
						1
					</div>
				</div>

				{/*User profile*/}
				<div className='relative w-10 aspect-square rounded-full overflow-hidden bg-gray-200'>
					<Image src="/assests/user.jpg" fill />
				</div>
			</div>
		</div>
	)
}