import React from "react"

function BandCard(props) {
    return (
        <div className="text-white hover:text-blue-400 shadow-2xl rounded-xl">
        <section className="h-70 bg-blue-900 hover:bg-red-900 rounded-xl">
        <img className="object-cover h-48 w-full border-gray border-t-2 border-l-2 border-r-2 opacity-80 hover:opacity-100 rounded-tr-xl rounded-tl-xl" src={props.img}></img>
            <h2 className="w-5/6 text-md bg-gray-900 p-4 whitespace-nowrap border-gray border-2 border-t-0 rounded-bl-xl border-t-2">{props.name}</h2>
        </section>
        </div> 
    )
}

export default BandCard