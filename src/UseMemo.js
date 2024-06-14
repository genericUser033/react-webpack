import React, {useState} from "react";

function UseMemo() {
    const [name, setName] = useState();
    const [price, setPrice] = useState();

    return (
        <div>
            <input type="text" placeholder="Enter name..."/>
            <input type="text" placeholder="Enter price..."/>
            <button>Add</button>
            <p>Total:</p>
        </div>
    )
}

export default UseMemo;