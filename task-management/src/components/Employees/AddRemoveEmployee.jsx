import { useState, useContext, useRef, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'

const AddRemoveEmployee = ({ Function, setFunction }) => {
    const { dispatch } = useContext(AuthContext)
    const containerRef = useRef(null)

    const [addFormData, setAddFormData] = useState({
        firstName: "",
        lastName: "",
        position: "",
        phoneNumber: "",
        email: "",
        password: ""
    })

    const [removeFormData, setRemoveFormData] = useState({
        firstName: "",
        lastName: "",
        position: "",
        reason: ""
    })

    const handleAddFormChange = (e) => {
        setAddFormData({
            ...addFormData,
            [e.target.name]: e.target.value
        })
    }

    const handleRemoveFormChange = (e) => {
        setRemoveFormData({
            ...removeFormData,
            [e.target.name]: e.target.value
        })
    }

    const isAddFormValid = addFormData.firstName && addFormData.position && addFormData.phoneNumber && addFormData.email && addFormData.password
    const isRemoveFormValid = removeFormData.firstName && removeFormData.position && removeFormData.reason

    const onAddClick = (e) => {
        e.preventDefault()

        const fullName = addFormData.lastName
            ? `${addFormData.firstName} ${addFormData.lastName}`
            : addFormData.firstName

        dispatch({
            type: "ADD_EMPLOYEE",
            payload: {
                userName: fullName,
                role: "employee",
                email: addFormData.email,
                phoneNumber: addFormData.phoneNumber,
                password: addFormData.password,
                position: addFormData.position
            }
        })

        setAddFormData({
            firstName: "",
            lastName: "",
            position: "",
            phoneNumber: "",
            email: "",
            password: ""
        })

        setFunction(null)
    }

    const onRemoveClick = (e) => {
        e.preventDefault()

        dispatch({
            type: "REMOVE_EMPLOYEE",
            payload: {
                userName: `${removeFormData.firstName} ${removeFormData.lastName}`,
                position: removeFormData.position,
                reason: removeFormData.reason
            }
        })

        setRemoveFormData({
            firstName: "",
            lastName: "",
            position: "",
            reason: ""
        })

        setFunction(null)
    }

    const handleChange = (value) => {
        setFunction(value)
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setFunction(null)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [setFunction])

    return (
        <div className='fixed z-1 bg-black/50 top-0 left-0 w-full h-full flex items-center justify-center gap-10'>
            <div
                ref={containerRef}
                className="h-[90vh] w-[35%] max-w-2xl bg-[#05131f] rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.4)] p-6"
            >
                <div className='flex gap-5 items-center mb-4'>
                    <button
                        onClick={() => handleChange("Add")}
                        className={`${Function === "Add" ? "bg-blue-300 text-[#05131f] font-bold" : "bg-[#223040] text-blue-300"} text-center px-5 py-1 rounded-lg cursor-pointer`}>
                        Add Employee
                    </button>
                    <button
                        onClick={() => handleChange("Remove")}
                        className={`${Function === "Remove" ? "bg-blue-300 text-[#05131f] font-bold" : "bg-[#223040] text-blue-300"} text-center px-5 py-1 rounded-lg cursor-pointer`}>
                        Remove Employee
                    </button>
                </div>

                <div className='w-full h-[1px] bg-blue-300/30 mx-auto mt-8 mb-5'></div>

                {Function === "Add" && (
                    <form onSubmit={onAddClick} className='h-[87vh] overflow-y-auto placeholder:text-blue-300'>
                        <div className='flex gap-7'>
                            <div className='w-[47%]'>
                                <h2 className='text-blue-300'>First Name</h2>
                                <input
                                    type="text"
                                    className='text-yellow-500 w-full focus:outline-none border-b border-b-blue-300 mb-5'
                                    onChange={handleAddFormChange}
                                    value={addFormData.firstName}
                                    name="firstName"
                                    required
                                />
                            </div>
                            <div className='w-[47%]'>
                                <h2 className='text-blue-300'>Last Name</h2>
                                <input
                                    type="text"
                                    className='text-yellow-500 w-full focus:outline-none border-b border-b-blue-300 mb-5'
                                    onChange={handleAddFormChange}
                                    value={addFormData.lastName}
                                    name="lastName"
                                />
                            </div>
                        </div>
                        <h2 className='text-blue-300'>Position</h2>
                        <input
                            type="text"
                            className='text-yellow-500 w-full focus:outline-none border-b border-b-blue-300 mb-5'
                            onChange={handleAddFormChange}
                            value={addFormData.position}
                            name="position"
                            required
                        />

                        <h2 className='text-blue-300'>Phone Number</h2>
                        <input
                            type="text"
                            className='text-yellow-500 w-full focus:outline-none border-b border-b-blue-300 mb-5'
                            onChange={handleAddFormChange}
                            value={addFormData.phoneNumber}
                            name="phoneNumber"
                            required
                        />

                        <h2 className='text-blue-300'>Email</h2>
                        <input
                            type="email"
                            className='text-yellow-500 w-full focus:outline-none border-b border-b-blue-300 mb-5'
                            onChange={handleAddFormChange}
                            value={addFormData.email}
                            name="email"
                            required
                        />

                        <h2 className='text-blue-300'>Password</h2>
                        <input
                            type="password"
                            className='text-yellow-500 w-full focus:outline-none border-b border-b-blue-300 mb-5'
                            onChange={handleAddFormChange}
                            value={addFormData.password}
                            name="password"
                            required
                        />

                        <button
                            type="submit"
                            disabled={!isAddFormValid}
                            className={`w-full ${isAddFormValid ? "bg-blue-300 hover:bg-blue-400 cursor-pointer" : "bg-gray-500 cursor-not-allowed"} text-[#05131f] rounded-lg py-2`}
                        >
                            Add
                        </button>
                    </form>
                )}

                {Function === "Remove" && (
                    <form onSubmit={onRemoveClick} className='h-[87vh] overflow-y-auto placeholder:text-blue-300'>
                        <div className='flex gap-7'>
                            <div className='w-[47%]'>
                                <h2 className='text-blue-300'>First Name</h2>
                                <input
                                    type="text"
                                    className='text-yellow-500 w-full focus:outline-none border-b border-b-blue-300 mb-5'
                                    onChange={handleRemoveFormChange}
                                    value={removeFormData.firstName}
                                    name="firstName"
                                    required
                                />
                            </div>
                            <div className='w-[47%]'>
                                <h2 className='text-blue-300'>Last Name</h2>
                                <input
                                    type="text"
                                    className='text-yellow-500 w-full focus:outline-none border-b border-b-blue-300 mb-5'
                                    onChange={handleRemoveFormChange}
                                    value={removeFormData.lastName}
                                    name="lastName"
                                />
                            </div>
                        </div>
                        <h2 className='text-blue-300'>Position</h2>
                        <input
                            type="text"
                            className='text-yellow-500 w-full focus:outline-none border-b border-b-blue-300 mb-5'
                            onChange={handleRemoveFormChange}
                            value={removeFormData.position}
                            name="position"
                            required
                        />

                        <h2 className='text-blue-300'>Reason</h2>
                        <textarea
                            className='resize-none border border-blue-300 text-yellow-500 w-full focus:outline-none h-[27vh] mt-2 rounded-lg p-2 mb-5 overflow-y-auto'
                            onChange={handleRemoveFormChange}
                            value={removeFormData.reason}
                            name="reason"
                            required
                        ></textarea>

                        <button
                            type="submit"
                            disabled={!isRemoveFormValid}
                            className={`w-full ${isRemoveFormValid ? "bg-blue-300 hover:bg-blue-400 cursor-pointer" : "bg-gray-500 cursor-not-allowed"} text-[#05131f] rounded-lg py-2`}
                        >
                            Remove
                        </button>
                    </form>
                )}
            </div>

            {Function === "Add" && (
                <div className="bg-[#05131f] w-[20vw] rounded-xl border-blue-300 border shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                    <div className="w-[75px] h-[75px] bg-blue-300 rounded-full mx-auto mt-4 flex items-center justify-center">
                        <img src="/Person.svg" alt="" width="50px" />
                    </div>
                    <h1 className="font-bold text-center text-blue-300 mt-2">{addFormData.firstName} {addFormData.lastName}</h1>
                    <h3 className="text-center text-blue-300/70 text-sm">{addFormData.position}</h3>
                    <div className="mx-auto h-[1px] bg-blue-300/30 w-[90%] mt-3"></div>
                    <div className="ml-3 mt-4">
                        <p className="text-blue-300 text-sm">{addFormData.email}</p>
                    </div>
                    <div className="ml-3 mt-2">
                        <p className="text-blue-300 text-sm">+{addFormData.phoneNumber}</p>
                    </div>
                    <div className="flex mx-auto gap-4 justify-center mb-4">
                        <button className="cursor-pointer bg-[#223040] text-blue-300 p-1 px-3 mt-5 rounded-lg">Message</button>
                        <button className="cursor-pointer bg-[#223040] text-blue-300 p-1 px-3 mt-5 rounded-lg">View Tasks</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AddRemoveEmployee
