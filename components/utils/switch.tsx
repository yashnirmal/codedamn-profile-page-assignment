import { useState } from "react"

export default function Switch(){

	const [checked,setChecked] = useState(false)

	return (
		<div className={`relative w-14 h-8 rounded-full flex items-center py-2 px-1 cursor-pointer justify-start  ${checked?"justify-end bg-blue-600":"bg-gray-400"}`} onClick={()=>setChecked(!checked)} >
			<div className="h-6 aspect-square bg-white rounded-full transition"></div>
		</div>
	)
}