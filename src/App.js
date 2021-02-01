import './assets/tailwind.css';
import './assets/main.css';
import Timer from './components/Timer.js'
import Banner from './components/Banner.js';
import Blurb from './components/Blurb.js'
import BandCard from './components/BandCard.js'; 
import bands from './bands.js'; 

function createCard(band) {
  <BandCard 
    key={band.id}
    bandName={band.bandName}
    img = {band.img}
    /> 
}

function App() {
  return (    
    <div className="bg-black w-6/6 place-self-center mx-auto">
      <container className="App-header">
      <Banner />
      <Timer /> 
      <Blurb />
    </container>

    <div className="bg-gradient-to-tr from-gray-900 via-black-800 to-black-900 mx-auto">
    <h2 className="text-white text-4xl uppercase mx-auto text-center py-24">Get involved</h2>


    <section className ="flex lg:space-x-8 ml-4 mr-4 lg:ml-12 lg:mr-12 flex-col lg:flex-row lg:bg-gray-900 lg:p-12 rounded-xl">
    
        <div className="relative w-full lg:w-1/4 bg-gray-900 mb-12 lg:mb-0 shadow-2xl flex-1 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-800 border-2 rounded-xl border-gray-600">
          <header className="shadow-inner h-72 w-full border-gray-400"> 
          <img className="object-cover h-full w-full rounded-tl-xl rounded-tr-xl" src="img/liggerpromo.jpg"></img>
          </header> 
          <h2 className="text-white rounded-bl-3xl rounded-br-3xl inner-shadow bg-gradient-to-b from-gray-700 via-gray-800 to-gray-800 border-b-2 border-t-2 border-gray-700 text-center sm:text-2md md:text-xl lg:text-2xl p-4 uppercase font-semibold">Support Musicians</h2>
          <p className="text-white p-4">Weʼre raising £2,000 to As always this event will benefit Help Musicians (NI), a fantastic charity who have went above and beyond in 2020, investing millions in NI</p>
          <div className="pb-12 pt-12"> </div>
          <a href="https://www.justgiving.com/crowdfunding/theliggersball"><button className="absolute bottom-0 rounded-bl-xl rounded-br-xl bg-gradient-to-b from-red-700 via-red-500 to-red-900 hover:bg-gradient-to-b hover:from-black-800 hover:via-red-800 hover:to-red-900 w-full bottom-0 p-4 text-xl uppercase font-semibold text-white"> Donate </button>      
            </a>
        </div>

        <div className="relative w-full lg:w-1/4 bg-gray-900 mb-12 lg:mb-0 shadow-2xl flex-1 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-800 border-2 rounded-xl border-gray-600">
          <header className="shadow-inner h-72 w-full border-gray-400"> 
          <img className="object-cover h-full w-full rounded-tl-xl rounded-tr-xl" src="img/bigcartel.png"></img>
          </header> 
          <h2 className="text-white rounded-bl-3xl rounded-br-3xl inner-shadow bg-gradient-to-b from-gray-700 via-gray-800 to-gray-800 border-b-2 border-t-2 border-gray-700 text-center sm:text-2md md:text-xl lg:text-2xl p-4 uppercase font-semibold">Liggersball Merch</h2>
          <p className="text-white p-4">Get the official merchandise for the event</p>
          <div className="pb-12 pt-12"> </div>
          <a href="https://kellysportrush.bigcartel.com/"><button className="absolute bottom-0 rounded-bl-xl rounded-br-xl bg-gradient-to-b from-red-700 via-red-500 to-red-900 hover:bg-gradient-to-b hover:from-black-800 hover:via-red-800 hover:to-red-900 w-full bottom-0 p-4 text-xl uppercase font-semibold text-white"> Buy Now </button>      
            </a>
        </div> 
        
        <div className="relative w-full lg:w-1/4 bg-gray-900 mb-12 lg:mb-0 shadow-2xl flex-1 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-800 border-2 rounded-xl border-gray-600">
          <section className="shadow-inner h-72 w-full border-gray-400"> 
          <img className="object-cover h-full w-full rounded-tl-xl rounded-tr-xl" src="img/prizes.jpg"></img>
          </section> 
          <h2 className="text-white rounded-bl-3xl rounded-br-3xl inner-shadow bg-gradient-to-b from-gray-700 via-gray-800 to-gray-800 text-center border-b-2 border-t-2 border-gray-700 sm:text-2md md:text-xl lg:text-2xl p-4 uppercase font-semibold">Prize Draw Details </h2>
          <p className="text-white p-4">Details coming soon to FB page, make sure to 'like' us and turn on notifications for details</p>
          <div className="pb-12 pt-12"> </div>
          <a href="https://www.facebook.com/events/433286294736673"><button className="absolute bottom-0 bg-gradient-to-b from-red-700 via-red-500 to-red-900 rounded-bl-xl rounded-br-xl hover:bg-gradient-to-b hover:from-black-800 hover:via-red-800 hover:to-red-900 w-full bottom-0 p-4 sm:text-2md md:text-xl lg:text-xl uppercase font-semibold text-white"> Learn More </button>      
            </a>
        </div>

    </section> 

    <h2 className="text-white text-4xl uppercase mx-auto text-center py-24">Bands Participating</h2>
    <section className="grid grid-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 lg:p-12 pt-0"> 
    {bands.map((band) => (
    <BandCard 
      key={band.id}
      name={band.bandName}
      img={band.img}
      />
    ))}
    
    </section>
    </div>


    <div className="pt-12 pl-4 pr-4 lg:pl-12 lg:pr-12 w-5/5 justify-center bg-gradient-to-br from-gray-900 via-black-800 to-black-900 align-baseline pb-20">
        
            <section className="mx-auto bg-gray-900 text-white sm:text-xl xl:text-xl p-4 lg:w-3/4 rounded-xl">
            <p className="text-white">
            As you can see from the above list, the line-up is strong and the stream will be delivered on Boxing night via our Facebook and YouTube pages. This will be a professionally produced live stream concert, so we encourage you all to get it on your big TV, get it through your speakers and enjoy from the comfort of your own home. 
            </p>
            <p className="pt-4">
            Starting off at 6pm with 8 acoustic performances from the finest talent we have, a mixture of originals and covers from all genres. Then we move on to the full band sets with some of the finest bands on the NI circuit and a few surprises in there as well. The whole evening will be hosted by no other than Alan Simpson who is no stranger to a Liggers Ball and an asset to the North Coast, and music will run constant to 11pm that night. 
                </p>           
            </section>
        </div>

    <footer className="text-white text-center py-4 bg-gray-900 border-t-2 border-gray-800">
    <p className="text-md md:text-lg	 uppercase"> Developed by <a href="https://creative-wavelength.com"><strong className="text-blue-300"> Creative Wavelength </strong> </a></p> 
    <p>Powered by <strong className="text-green-400"><i class="fab fa-react"></i> React </strong> & TailwindCSS</p>
    </footer>
    
    
    </div>

    
  );
}


export default App;