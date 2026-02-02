import { useState } from "react";

const Search  = () => {
    const [filteredItems, setFiteredItems] = useState([]);
    return (
    <div>
        <input type="text" className="serch-box"/>
        <button onClick={() => {
            
        }}>Search</button>
    </div>
    )
}

export default Search;