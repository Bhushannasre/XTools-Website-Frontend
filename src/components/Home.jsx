import './home.css';
import { xData } from "../utils/Data";
import { cardsData } from "../utils/cardData";
import { ButtonFeature } from './buttonfeature';
import SubscriptionNewletter from './SubscriptionNewletter';
import Brands from './Brands';  

function Home() {
    

  
    const CreateCard = ({ card }) => (
        <div className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0 bg-[#202829]">
            <div className="flex gap-2">
                <img className="size-11 rounded-full" src={card.image} alt="User Image" />
                <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                        <p>{card.name}</p>
                        <svg className="mt-0.5" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" fill="#2196F3" />
                        </svg>
                    </div>
                    <span className="text-xs text-slate-500 text-white">{card.handle}</span>
                </div>
            </div>
            <p className="text-sm py-4 text-gray-800 text-white">Radiant made undercutting all of our competitors an absolute
                breeze.</p>
            <div className="flex items-center justify-between text-slate-500 text-xs">
                <div className="flex items-center gap-1">
                    <span>Posted on</span>
                    <a href="https://x.com" target="_blank" className="hover:text-sky-500">
                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="m.027 0 4.247 5.516L0 10h.962l3.742-3.926L7.727 10H11L6.514 4.174 10.492 0H9.53L6.084 3.616 3.3 0zM1.44.688h1.504l6.64 8.624H8.082z" fill="currentColor" />
                        </svg>
                    </a>
                </div>
                <p>{card.date}</p>
            </div>
        </div>
    );

    return (
     
       <div className="relative overflow-hidden bg-black ">
  {/* SVG BACKGROUND */}
  <svg
    className="absolute inset-0 z-0"
    viewBox="0 0 1440 720"
    fill="none"
  >
    <path stroke="#28834c" strokeOpacity=".7" d="M-15.227 702.342H1439.7" />
    <circle cx="711.819" cy="372.562" r="308.334" stroke=" #00c2cb" strokeOpacity=".7" />
     <circle cx="1372.48" cy="618.205" r="308.334" stroke="#FF5722" strokeOpacity=".7" />
    <circle cx="16.942" cy="20.834" r="308.334" stroke="#bcef14ed" strokeOpacity=".7" />

  </svg>

  {/* CONTENT */}
     <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none mb-10 size-140  rounded-full blur-[200px]'></div>
  <section className="relative z-10 flex flex-col md:flex-row pb-20 items-center justify-between mt-30 px-4 md:px-16 lg:px-24 xl:px-32 text-white box">
    <div className="max-w-xl text-center md:text-left">
      <h1 className="text-5xl md:text-6xl font-medium from-white to-[#00c2cb] bg-clip-text text-transparent bg-linear-to-r">
        Plug and Play with X2LS.
      </h1>
       <div className="flex items-center divide-x divide-gray-300 mt-6">
            <div className="flex -space-x-3 pr-3">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="image" className="w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition z-1 hover:z-10" />
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="image" className="w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition z-2 hover:z-10" />
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop" alt="image" className="w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition z-3 hover:z-10" />
                <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="image" className="w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition z-4 hover:z-10" />
            </div>
            <div className="pl-3">
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#FACC15" stroke="#FACC15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#FACC15" stroke="#FACC15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#FACC15" stroke="#FACC15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#FACC15" stroke="#FACC15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#FACC15" stroke="#FACC15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>
                    </svg>
                    <p className="text-gray-600 font-medium ml-2">5.0</p>
                </div>
                <p className="text-sm text-gray-500">Trusted by <span className="font-medium text-green-300">100,000+</span> users</p>
            </div>
        </div>
      <p className="text-sm text-slate-200 mt-4">
        Unlock smarter Music AI Integrated Music Plugins to make your music creation process more efficient and enjoyable.
      </p>

      <div className="flex gap-4 mt-8 justify-center md:justify-start">
        <button className="bg-white text-black px-7 h-11 rounded-md cursor-pointer">
          Get started
        </button>
        <button className="border border-slate-600 px-6 h-11 rounded-md cursor-pointer">
          Watch demo
        </button>
      </div>
     <Brands />
    </div>

    <img
      src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/hero-section-showcase-3.png"
      alt="hero"
      className="max-w-xs sm:max-w-sm lg:max-w-md mt-10 md:mt-0"
    />

{/* Testionials on X */}
      </section>
        <div className="flex flex-col gap-8 pb-20">         
                  <h1 className="text-3xl font-semibold text-center mx-auto text-white heading animate">Testimonials on X</h1>
            <p className="text-sm text-slate-400 text-center mt-2 max-w-lg mx-auto">Hear what our satisfied users have to say about their experiences with our products and services.
               </p>
            
                <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative ">
                    <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent"></div>
                    <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5  text-[#00c2cb]">
                        {[...cardsData, ...cardsData].map((card, index) => (
                            <CreateCard key={index} card={card} />
                        ))}
                    </div>
                    <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent"></div>
                </div>

                <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
                    <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent"></div>
                    <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-10 pb-5  text-[#00c2cb]">
                        {[...cardsData, ...cardsData].map((card, index) => (
                            <CreateCard key={index} card={card} />
                        ))}
                    </div>
                    <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent"></div>
                </div>
            </div>
            < div className="bg-black py-20">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

            {/* About Product */}
            <h1 className="text-3xl font-semibold text-center mx-auto text-white heading animate">Our Latest Creations</h1>
            <p className="text-sm text-slate-400 text-center mt-2 max-w-lg mx-auto ">A visual collection of our most recent works -
                each piece crafted with intention, emotion, and style.</p>
            
            <div className="flex items-center gap-6 h-[400px] w-full max-w-5xl mt-10 mx-auto">
    
                <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-right"
                        src={xData[0].image}
                        alt="image" />
                        
                    <div
                        className="absolute inset-0 flex flex-col justify-center p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">{xData[0].title}</h1>
                        <p className="text-sm">{xData[0].description}</p>
                       <div className="mt-3" >
                        <ButtonFeature productId={xData[0].id} />
                         </div>
                       
                    </div>
                </div>
                <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src={xData[1].image}
                        alt="image" />
                    <div
                        className="absolute inset-0 flex flex-col justify-center p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">{xData[1].title}</h1>
                        <p className="text-sm">{xData[1].description}</p>
                        <div className="mt-3">
                          <ButtonFeature productId={xData[1].id} />
                         </div>
            
                    </div>
                </div>
            </div>
            <SubscriptionNewletter />
        </div>
            </div>
            
            
            
        

    )
}
    export default Home;