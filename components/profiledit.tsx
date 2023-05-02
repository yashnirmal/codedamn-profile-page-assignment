import { useState } from 'react'
import Image from 'next/image'
import Switch from './utils/switch'

export default function ProfileEdit(){

	const [profileImg,setProfileImg] = useState("")

	async function handleNewProfileImgUpload(e){
		const img = e.target.files[0]
		const base64 = await convertToBase64(img)
		setProfileImg(base64)
	}

	function convertToBase64(img){
		return new Promise((resolve,reject)=>{
			const fileReader = new FileReader()
			fileReader.readAsDataURL(img)
			fileReader.onload=()=>{
				resolve(fileReader.result)
			}
			fileReader.onerror=(err)=>{
				reject(err)
			}
		})
	}


	return (
		<div className="flex-grow flex flex-col gap-8">

			{/*Image*/}
			<div className='flex items-center gap-6'>
				<div className="relative w-28 aspect-square rounded-full overflow-hidden">
					<Image className="object-cover" src={(profileImg?.length==0)?"/assests/user.jpg":profileImg} fill />
				</div>

				<div className='relative w-fit h-fit'>
					<button className='purple-btn' >Upload new picture</button>
					<input onChange={handleNewProfileImgUpload} className='absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer' type="file" accept='.jpeg,.png,.jpg' />
				</div>
				<button>Delete</button>
			</div>

			{/*Name*/}
			<div className="flex flex-col gap-1">
				<p className="text-zinc-800 font-bold">Display Name</p>
				<input type="text" placeholder="Name" />
			</div>

			{/*About*/}
			<div className="flex flex-col gap-1">
				<p className="text-zinc-800 font-bold">About</p>
				<textarea type="text" placeholder="Tell about yourself" />
			</div>

			{/*Profession*/}
			<div className="flex flex-col gap-1">
				<p className="text-zinc-800 font-bold">Profession</p>
				<input type="text" placeholder="Your profession" />
			</div>

			{/*Date of Birth*/}
			<div className="flex flex-col gap-1">
				<p className="text-zinc-800 font-bold">Date of Birth</p>
				<input type="date" placeholder="DD/MM/YYYY" />
			</div>

			{/*Gender*/}
			<div className="flex flex-col gap-1">
				<p className="text-zinc-800 font-bold">Gender</p>
				<select name="gender" id="gender">
					<option value="none">None</option>
					<option value="male">Male</option>
					<option value="female">Female</option>
					<option value="other">Other</option>
				</select>
			</div>

			{/* User Visibility Options*/}
			<div className='text-black/90 mb-2'>
				<h2 className='text-3xl font-bold mt-6'>Select Visibility</h2>
				<p className='text-gray-500 mb-8'>Select which sections and content should show on your profile page.</p>

				<div className='bg-gray-100 p-8 rounded-xl text-lg flex flex-col gap-6'>
				    {/*Followers*/}
					<div className='flex justify-between'>
						<div>
							<h3 className='font-bold'>Followers and followings</h3>
							<p className='text-gray-500'>Shows your followers and users you follow on codedamn</p>
						</div>
						<Switch />
					</div>

					{/*XP*/}
					<div className='flex justify-between'>
						<div>
							<h3 className='font-bold'>XP</h3>
							<p className='text-gray-500'>Shows the XP you have earned</p>
						</div>	
						<Switch />
					</div>

					{/*Followers*/}
					<div className='flex justify-between'>
						<div>
							<h3 className='font-bold'>Achievement badges</h3>
							<p className='text-gray-500'>Shows your relative percentile and proficiency</p>
						</div>	
						<Switch />
					</div>
				</div>

			</div>

			{/* Save and Cancel Button*/}
			<div className="w-full flex justify-end gap-10 mb-20">
				<button>Cancel</button>
				<button className="purple-btn" >Save Changes</button>
			</div>
		</div>
	)
}
