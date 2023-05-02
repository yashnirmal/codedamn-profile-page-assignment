import {AiOutlineChrome} from 'react-icons/ai'
import {useState} from 'react'

const tabsData = [
	'Profile',
	'Socials',
	'Portfolio',
	'Resume'
]

export default function Tabs(){

	const [selectedTab,setSelectedTab] = useState(0)

	return (
		<div className="bg-gray-100 max-w-[300px] w-full h-fit py-4 text-lg rounded-2xl">
			{
				tabsData.map((el,idx)=>(
					<div className={(idx==selectedTab)?'selected--tab':'tab'} >
						<div className='text-2xl'>
							<AiOutlineChrome />
						</div>
						
						<p>{el}</p>
					</div>
				))
			}
		</div>
	)
}