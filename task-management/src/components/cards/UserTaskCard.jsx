
const UserTaskCard = () => {
    return (
        <div className=''>
            <div className='fixed z-1 bg-black/50 top-0 left-0 w-full h-full flex items-center justify-center gap-10 hidden'>
                <div className=" w-[35%] max-w-2xl bg-[#05131f] rounded-lg shadow-lg p-6">
                    <div className="flex justify-between items-center mb-5">
                        <h1 className="text-blue-300 text-xl font-bold">Create a Website</h1>
                        <h3 className="text-sm text-blue-300/80">5 Aug - 7 Aug</h3>
                    </div>
                    <span className="bg-blue-300 text-[#05131f] px-3 rounded-lg text-sm">Development</span>
                    <p className="text-blue-300 text-sm mt-8 mb-4 leading-loose">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum eius ex perspiciatis maxime nobis rerum sit laboriosam eos. Nobis quod inventore veritatis odit quia perspiciatis sed recusandae delectus at voluptates eveniet illum incidunt ipsum placeat tempore velit totam repudiandae exercitationem, adipisci impedit dolorem obcaecati, sapiente explicabo quas. Voluptatum, tenetur reiciendis?</p>
                    <div className="w-full h-[1px] bg-blue-300/30 mb-4"></div>
                    <div className="flex gap-2 items-center mb-4">
                        <button className="bg-[#223040] rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" className="text-blue-300 fill-current"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg>
                        </button>
                        <span className="text-blue-300 ">Design a layout very user friendly</span>
                    </div>
                    <div className="flex gap-2 items-center mb-4">
                        <button className="bg-[#223040] rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" className="text-blue-300 fill-current"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg>
                        </button>
                        <span className="text-blue-300 ">Write a Logic and make it readable</span>
                    </div>
                    <button className="w-full bg-blue-300 text-[#05131f] text-center py-2 cursor-pointer rounded-lg">Workinng | Complete</button>

                </div>
            </div>
        </div>
    )
}

export default UserTaskCard
