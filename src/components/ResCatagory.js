import { useState } from "react";
import ItemList from "./ItemList";
const ResCatagory = (data) => {
    const [showItem, setShowItem] = useState(false);
    
    const handleClick = () => {
       console.log("Show items");
       setShowItem(!showItem);
    }

    return(
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer"
                onClick={handleClick}
                >
                    <span className="font-bold text-lg">{data?.data.title} {data?.data?.itemCards.length}</span>
                    <span>⬇️</span>
                </div>
            
                {showItem && <ItemList items={data?.data?.itemCards} />}
            </div>
        </div>
    )
}

export default ResCatagory;