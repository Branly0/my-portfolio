export default function HunterCard() {
  return (
    <div className="flex flex-col bg-white rounded-lg border-2 border-black outline outline-2 outline-black outline-offset-2 aspect-[3/5] max-w-full w-86 min-w-64">
        <div className="flex flex-col items-center bg-black w-full h-3/5">
            <img
                src="https://via.placeholder.com/150"
                alt="Hunter Avatar"
                className="w-full h-3/4 mr-4"
            />
            <img
                src="https://via.placeholder.com/150"
                alt="Hunter Avatar"
                className="w-full h-16 mr-4"
            />
        </div>
        <div className="flex flex-col bg-[#a5d4fe] w-full h-2/5 p-4">
            <h2 className="text-xl font-bold text-black mb-2">Hunter Name</h2>
            <p className="text-black">Role: Assassin</p>
            <p className="text-black">Level: 10</p>
            <p className="text-black">Health: 100</p>
            <p className="text-black">Mana: 50</p>
        </div>
    </div>
  )
}