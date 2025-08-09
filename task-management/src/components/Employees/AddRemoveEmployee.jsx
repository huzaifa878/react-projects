import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const AddRemoveEmployee = ({ Function, setFunction }) => {

    const { dispatch } = useContext(AuthContext)

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        position: "",
        phoneNumber: "",
        email: "",
        password: ""
    })

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onAddClick = (e) => {
        e.preventDefault()

        dispatch({
            type: "ADD_EMPLOYEE",
            payload: {
                userName: `${formData.firstName} ${formData.lastName}`,
                role: "employee",
                email: formData.email,
                phoneNumber: formData.phoneNumber,
                password: formData.password,
                position: formData.position

            }
        })

        setFormData({
            firstName: "",
            lastName: "",
            position: "",
            phoneNumber: "",
            email: "",
            password: ""
        })

        setFunction("")
    }

    const onRemoveClick = (e) => {
        e.preventDefault()

        dispatch({
            type: "REMOVE_EMPLOYEE",
            payload: {
                userName: `${formData.firstName} ${formData.lastName}`,
                position: formData.position
            }
        })

        setFunction("")
    }

    const handleChange = (value) => {
        setFunction(value)
    }
    return (
        <div className=''>
            <div className='fixed z-1 bg-black/50 top-0 left-0 w-full h-full flex items-center justify-center gap-10'>
                <div className="h-[90vh] w-[35%] max-w-2xl bg-[#05131f] rounded-lg shadow-lg p-6">
                    <div className='flex gap-5 items-center mb-4'>
                        <button onClick={() => handleChange("Add")} className={`${Function === "Add" && "bg-blue-300 text-[#05131f] font-bold"} ${Function === "Remove" && "bg-[#223040] text-blue-300"} text-center px-5 py-1 rounded-lg cursor-pointer`}
                        >Add Employee</button>
                        <button onClick={() => handleChange("Remove")} className={`${Function === "Remove" && "bg-blue-300 text-[#05131f] font-bold"} ${Function === "Add" && "bg-[#223040] text-blue-300"} text-center px-5 py-1 rounded-lg cursor-pointer`}>Remove Employee</button>
                    </div>

                    <div className='w-[100%] h-[1px] bg-blue-300/30 mx-auto mt-8 mb-5'></div>

                    <form onSubmit={onAddClick} className={`${Function === "Remove" && "hidden"} h-[87vh] overflow-y-auto placeholder:text-blue-300`}>
                        <div className='flex gap-7'>
                            <div className='w-[47%]'>
                                <h2 className='text-blue-300'>First Name</h2>
                                <input
                                    type="text"
                                    className='text-yellow-500 w-full focus:outline-none focus:ring-0 border-b border-b-1 border-b-blue-300 mb-5'
                                    onChange={(e) => handleFormChange(e)}
                                    value={formData.firstName}
                                    name="firstName"
                                />
                            </div>
                            <div className='w-[47%]'>
                                <h2 className='text-blue-300'>Last Name</h2>
                                <input
                                    type="text"
                                    className='text-yellow-500 w-full focus:outline-none focus:ring-0 border-b border-b-1 border-b-blue-300 mb-5'
                                    onChange={(e) => handleFormChange(e)}
                                    value={formData.lastName}
                                    name="lastName"
                                />
                            </div>
                        </div>
                        <h2 className='text-blue-300'>Position</h2>
                        <input type="text"
                            className='text-yellow-500 w-full focus:outline-none focus:ring-0 border-b border-b-1 border-b-blue-300 mb-3 pb-1 mb-5'
                            onChange={(e) => handleFormChange(e)}
                            value={formData.position}
                            name="position"
                        />

                        <h2 className='text-blue-300'>Phone Number</h2>
                        <input type="text"
                            className='text-yellow-500 w-full focus:outline-none focus:ring-0 border-b border-b-1 border-b-blue-300 mb-3 pb-1 mb-5'
                            onChange={(e) => handleFormChange(e)}
                            value={formData.phoneNumber}
                            name="phoneNumber"
                        />

                        <h2 className='text-blue-300'>Email</h2>
                        <input type="email"
                            className='text-yellow-500 w-full focus:outline-none focus:ring-0 border-b border-b-1 border-b-blue-300 mb-3 pb-1 mb-5'
                            onChange={(e) => handleFormChange(e)}
                            value={formData.email}
                            name="email"
                        />

                        <h2 className='text-blue-300'>Password</h2>
                        <input type="password"
                            className='text-yellow-500 w-full focus:outline-none focus:ring-0 border-b border-b-1 border-b-blue-300 mb-3 pb-1 mb-5'
                            onChange={(e) => handleFormChange(e)}
                            value={formData.password}
                            name="password"
                        />

                        <button type="submit" className='w-full bg-yellow-500 cursor-pointer text-[#05131f] rounded-lg py-2'>Add</button>
                    </form>

                    <form onSubmit={onRemoveClick} className={`${Function === "Add" && "hidden"} h-[87vh] overflow-y-auto placeholder:text-blue-300`}>
                        <div className='flex gap-7'>
                            <div className='w-[47%]'>
                                <h2 className='text-blue-300'>First Name</h2>
                                <input
                                    type="text"
                                    className='text-yellow-500 w-full focus:outline-none focus:ring-0 border-b border-b-1 border-b-blue-300 mb-5'
                                    onChange={(e) => handleFormChange(e)}
                                    value={formData.firstName}
                                    name="firstName"
                                />
                            </div>
                            <div className='w-[47%]'>
                                <h2 className='text-blue-300'>Last Name</h2>
                                <input
                                    type="text"
                                    className='text-yellow-500 w-full focus:outline-none focus:ring-0 border-b border-b-1 border-b-blue-300 mb-5'
                                    onChange={(e) => handleFormChange(e)}
                                    value={formData.lastName}
                                    name="lastName"
                                />
                            </div>
                        </div>
                        <h2 className='text-blue-300'>Position</h2>
                        <input
                            type="text"
                            className='text-yellow-500 w-full focus:outline-none focus:ring-0 border-b border-b-1 border-b-blue-300 pb-1 mb-5'
                            onChange={(e) => handleFormChange(e)}
                            value={formData.position}
                            name="position"
                        />

                        <h2 className='text-blue-300'>Reason</h2>
                        <textarea className='resize-none border border-1 border-blue-300 text-yellow-500 w-full focus:outline-none focus-ring-0 h-[27vh] mt-2 rounded-lg p-2 mb-5 overflow-y-auto'></textarea>
                        <button type="submit" className='w-full bg-blue-300 cursor-pointer text-[#05131f] rounded-lg py-2'>Remove</button>
                    </form>
                </div>

                <div className={`${Function === "Remove" && "hidden"} bg-[#05131f] w-[20vw] rounded-xl border-blue-300 border-1`}>
                    <div className="w-[75px] h-[75px] bg-blue-300 rounded-full mx-auto">
                        <img src="/Person.svg" alt="" width="70px" className="mx-auto mt-7" />
                    </div>
                    <h1 className="font-bold text-center text-blue-300 mt-2">{formData.firstName} {formData.lastName}</h1>
                    <h3 className="text-center text-blue-300/70 text-sm">{formData.position}</h3>
                    <div className="mx-auto h-[1px] bg-blue-300/30 w-[90%] mt-3"></div>
                    <div className="ml-3 flex items-center gap-2 mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-[20px] text-blue-300/70 fill-current"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg>
                        <p className="text-blue-300 text-sm">{formData.email}</p>
                    </div>
                    <div className="ml-3 flex items-center gap-2 mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-[20px] text-blue-300/70 fill-current"><path d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z" /></svg>
                        <p className="text-blue-300 text-sm">+{formData.phoneNumber}</p>
                    </div>
                    <div className="flex mx-auto gap-4 justify-center">
                        <button className="cursor-pointer block bg-[#223040] text-blue-300 p-1 px-3 mt-5 mb-3 text-center rounded-lg">Message</button>
                        <button className="cursor-pointer block bg-[#223040] text-blue-300 p-1 px-3 mt-5 mb-3 text-center rounded-lg">View Tasks</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddRemoveEmployee
