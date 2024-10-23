import React from "react";

function Item({name, quantity, category}) {
    return(
        <div className="bg-slate-900 m-4 max-w-sm p-2">
            <h1 className="text-xl font-bold">{name}</h1>
            <p className="text-sm">Buy {quantity} in {category}</p>
            
        </div>
    )
}

export default Item;
