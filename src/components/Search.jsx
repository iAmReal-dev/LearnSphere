
const Search = () => {
    return (
        <div className=" mt-10 flex items-center w-[90vw] md:w-auto bg-[#F0F0F0] rounded-full p-3 shadow-lg">
            <img src="/public/assets/search.svg" alt="" />
            <input
                type="text"
                placeholder="What do you want to learn today?"
                className="placeholder:font-poppins placeholder:text-[#777584] placeholder:text-[16px] bg-transparent text-white placeholder-gray-300 outline-none px-4 py-2 w-full"
            />

            <button className="cursor-pointer font-poppins bg-gradient-to-r from-[#57029C] to-[#F700AC] text-white rounded-full px-4 py-2 flex items-center space-x-2 hover:opacity-90 transition duration-300">
                <span className="w-40">Search</span>
            </button>

        </div>
    );
};

export default Search;