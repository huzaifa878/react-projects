import SelectForm from "./SelectForm"

const Add = () => {
  return (
    <>
      <div className='rounded-full p-[8px] cursor-pointer bg-blue-300 hover:bg-blue-500 border-none transition duration-300'>
        <img src="Add.svg" className='' />
      </div>
      <SelectForm />
    </>
  )
}

export default Add
