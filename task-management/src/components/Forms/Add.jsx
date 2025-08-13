import { useState } from "react"
import SelectForm from "./SelectForm"

const Add = () => {

  const [showSelection, setShowSelection] = useState(false)

  return (
    <>
      <button 
      className='rounded-full p-[8px] cursor-pointer bg-blue-300 hover:bg-blue-500 border-none transition duration-300'
      onClick={() => setShowSelection(true)}
      >
        <img src="/Add.svg" className='' />
      </button>
      <SelectForm showSelection={showSelection} setShowSelection={setShowSelection}/>
    </>
  )
}

export default Add
