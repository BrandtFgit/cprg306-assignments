"use client";

import { useState } from "react"

export default function NewItem(){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    return(
        <div>
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ></input>
        </div>
    )
}