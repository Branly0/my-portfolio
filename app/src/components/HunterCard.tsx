import "../assets/xx_logo.png"
import "../assets/ChatGPT Image May 9, 2026, 10_55_58 PM.png"
export default function HunterCard() {

    const space = "w-full flex border-2 border-black rounded-sm bg-white items-center pl-1"

  return (
    <div className="flex flex-col bg-white items-center justify-center rounded-lg border-2 border-black outline outline-2 outline-black outline-offset-2 aspect-[3/5.4] max-w-full w-86 min-w-64">
        <div className="flex flex-col items-center bg-black w-full h-3/5">
            <img
                src="https://i.pinimg.com/736x/6b/fe/40/6bfe40f3f0eaac2f3d141168f2dcd383.jpg"
                alt="Hunter Avatar"
                className="w-full h-3/4 mr-4"
            />
            <img
                src="https://via.placeholder.com/150"
                alt="Hunter Avatar"
                className="w-full h-16 mr-4"
            />
        </div>
        <div className="flex flex-col pt-6 items-center bg-[#a5d4fe] w-full h-2/5 p-2 gap-2">
            <h2 className="w-19/20 h-2/8 flex items-center justify-center mb-3 border-2 border-black rounded-sm bg-white">Hunter Name</h2>
            <p className={space}>Role: Assassin</p>
            <p className={space}>Level: 10</p>
            <p className={space}>Health: 100</p>
            <p className={space}>Mana: 50</p>
        </div>
    </div>
  )
}