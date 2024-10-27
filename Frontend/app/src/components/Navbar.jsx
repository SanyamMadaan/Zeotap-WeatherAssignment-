export default function(){
    return(
        <div className="flex justify-between p-2">
            <div>
                <button id="dark_btn" className="p-2 rounded-md">
                    Dark Mode
                </button>
            </div>
            <div className="border-2 border-black rounded-lg">
                <input id="searchbar" className="px-16 h-full w-full" type="text"  placeholder="Search for your preffered city..." />
            </div>
            <div>
                <button className="bg-green-600 text-white p-2 rounded-lg hover:cursor:pointer">
                    Current Location
                </button>
            </div>
        </div>
    )
}