import react from "react";

function Blurb() {
        
    return (
        <div className="pt-12 pl-4 lg:pl-12 pr-4 lg:pr-12 w-5/5 justify-center bg-gradient-to-br from-gray-900 via-black-800 to-black-900 align-baseline">
        
        <div className="bg-white flex flex-col lg:flex-row p-4 bg-gray-900 rounded-xl"> 
        <div className="w-5/5 lg:w-1/5 flex-shrink rounded-xl">
        <img src="img/hmnikellyslogo.jpg" className="shadow-inner shadow-2xl rounded-tl-xl rounded-tr-xl lg:border-2 lg:rounded-xl object-fit"></img>
        </div>
        
        <div className="w-5/5 lg:w-4/5 lg:ml-12 lg:rounded-md-tr lg:rounded-tl lg:mt-0 flex-4 .shadow-2xl shadow-inner rounded-xl">  
        <h2 className="p-8 text-white text-2xl sm:text-3xl pb-6 uppercase"> Liggers Ball 2020
        </h2>
        
        <hr className="pb-8"></hr>
            <section className="rounded-xl lg:p-8 bg-gray-900 text-white sm:text-xl xl:text-xl">
            <p className="text-white">
                This year you can’t come to the Liggers Ball, so we are bringing it to you, from Kellys, right into the comfort of your own home. This Boxing Day at 6pm GMT, Kellys Live will be streaming a 14 act bill and encouraging you to all have a safe Liggers Ball from the comfort of your own home.
            </p>
            <p className="pt-4">
                As always, this event will benefit Help Musicians (NI), a fantastic charity who have went above and beyond in 2020, and invested millions into artists futures, most of which have been badly affected by the COVID pandemic. The streamed event will be professionally produced and streamed in high definition, ensuring a glitch free night of the cream of local music.
            </p>
            <p className="pt-4">
                With this being a virtual fundraiser, we could have tried to charge for viewing, but we don’t want anyone to miss out. So because this year we are not able to charge for tickets, or shake a bucket in your face, we have come up with a few other avenues to gather our donations. <a className="text-blue-400 hover:text-blue-600" href="https://www.justgiving.com/crowdfunding/theliggersball">Please give generously where you can </a>, and enjoy a night of NI music of the highest calibre. 
            </p>
            </section>
            </div> 
        </div>
        </div>
    )
}

export default Blurb 