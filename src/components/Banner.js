import react from "react";
import { red } from "tailwindcss/colors";

function Banner() {

    return (

<div className="flex overflow-hidden mx-auto">
        <div className="flex items-center w-full bg-center bg-black">
            <div className="flex flex-col relative items-center justify-center w-full text-center h-screen left-0 sm:top-0">
                <img src="img/liggersbw.jpg" className="md:absolute sm:transform flex-initial object-fill border-light-white-900"></img>
                
                <div className="shadow-xl bg-black w-full sm:w-60 md:3/5 absolute p-2 top-0 sm:top-72 md:top-50 sm:left-0 sm:rounded-br-3xl sm:rounded-tr-3xl"> 

                    <div className="">
                        <img src="img/lightlogo.png" className="w-12 sm:w-24 mx-auto"></img>
                        <h1 class=" text-xl md:text-2xl text-shadow font-semibold text-white text-center uppercase">Liggers Ball 2020 </h1>
                    </div>

                    <div className="">
                        <h2 className="text-shadow text-md sm:text-2xl text-blue-100 text-center block pb-2">Live in your living room</h2>
                    </div>
                                
                </div>

                    <div className="flex flex-wrap text-center bg-black bottom-0 absolute w-full"> 
                        <a className="flex-grow inline-flex" href="https://www.facebook.com/events/433286294736673">
                        <span className="flex-grow inline-flex">
                        <button
                        className="text-xl flex-grow block pt-3 pb-3 pl-8 pr-6 bg-blue-600 hover:bg-blue-900 text-white text-md uppercase font-bold">
                        <i className="fab fa-facebook-f pr-2"></i> Event Page</button>
                        </span> </a>
                
                <a class="flex-grow inline-flex" href="https://www.youtube.com/watch?v=gl_A75bg-WQ&feature=youtu.be"><span className="flex-grow inline-flex">
                <button 
                className="text-xl flex-grow pt-3 pb-3 pl-6 pr-6 block bg-red-600 hover:bg-red-900 text-white text-md uppercase font-bold">
                <i className="fab fa-youtube pr-2"></i> Livestream</button> 
                </span> </a>
                </div> 

            </div>
        </div>
    </div>  

    )} 

export default Banner