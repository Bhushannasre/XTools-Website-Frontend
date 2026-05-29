import { useEffect, useRef } from 'react';
import './home.css';
import { xData } from "../utils/Data";
import { cardsData } from "../utils/cardData";
import { ButtonFeature } from './ButtonFeature';
import SubscriptionNewletter from './SubscriptionNewletter';
import Brands from './Brands';

// Scroll reveal hook — same as About.jsx
function useScrollReveal() {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('visible');
                    observer.unobserve(el);
                }
            },
            { threshold: 0.15 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);
    return ref;
}

function Home() {
    // Scroll reveal refs — hero section has NO ref (animates on load via .box)
    const testimonialsHeadRef  = useScrollReveal();
    const testimonialsDescRef  = useScrollReveal();
    const marquee1Ref          = useScrollReveal();
    const marquee2Ref          = useScrollReveal();
    const creationsHeadRef     = useScrollReveal();
    const creationsDescRef     = useScrollReveal();
    const productsRef          = useScrollReveal();
    const newsletterRef        = useScrollReveal();

    const scrolltoProducts = () => {
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    };

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
            <p className="text-sm py-4 text-gray-800 text-white">Radiant made undercutting all of our competitors an absolute breeze.</p>
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
        <div className="relative overflow-hidden bg-black">
            {/* SVG BACKGROUND */}
            <svg className="absolute inset-0 z-0" viewBox="0 0 1440 720" fill="none">
                <path stroke="#28834c" strokeOpacity=".7" d="M-15.227 702.342H1439.7" />
                <circle cx="711.819" cy="372.562" r="308.334" stroke="#00c2cb" strokeOpacity=".7" />
                <circle cx="1372.48" cy="618.205" r="308.334" stroke="#FF5722" strokeOpacity=".7" />
                <circle cx="16.942" cy="20.834" r="308.334" stroke="#bcef14ed" strokeOpacity=".7" />
            </svg>

            <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none mb-10 size-140 rounded-full blur-[200px]'></div>

            {/* ── HERO — animates on load via .box class ── */}
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
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#FACC15" stroke="#FACC15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>
                                    </svg>
                                ))}
                                <p className="text-gray-600 font-medium ml-2">5.0</p>
                            </div>
                            <p className="text-sm text-gray-500">Trusted by <span className="font-medium text-green-300">100,000+</span> users</p>
                        </div>
                    </div>
                    <p className="text-sm text-slate-200 mt-4">
                        Unlock smarter Music AI Integrated Music Plugins to make your music creation process more efficient and enjoyable.
                    </p>
                    <div className="flex gap-4 mt-8 justify-center md:justify-start">
                        <button onClick={scrolltoProducts} className="bg-white text-black px-7 h-11 rounded-md cursor-pointer">
                            Get started
                        </button>
                    </div>
                    <Brands />
                </div>
                <img src="/musictools.jpg" alt="hero" className="max-w-xs sm:max-w-sm lg:max-w-md mt-10 md:mt-0" />
            </section>

            {/* ── TESTIMONIALS — scroll triggered ── */}
            <div className="flex flex-col gap-8 pb-20 mt-20 px-4 md:px-16 lg:px-24 xl:px-32">
                <h1 ref={testimonialsHeadRef} className="reveal text-3xl font-semibold text-center mx-auto text-white">
                    Testimonials on X
                </h1>
                <p ref={testimonialsDescRef} className="reveal text-sm text-slate-400 text-center mt-2 max-w-lg mx-auto">
                    Hear what our satisfied users have to say about their experiences with our products and services.
                </p>

                <div ref={marquee1Ref} className="reveal marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
                    <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent"></div>
                    <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5 text-[#00c2cb]">
                        {[...cardsData, ...cardsData].map((card, index) => (
                            <CreateCard key={index} card={card} />
                        ))}
                    </div>
                    <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent"></div>
                </div>

                <div ref={marquee2Ref} className="reveal marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
                    <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent"></div>
                    <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-10 pb-5 text-[#00c2cb]">
                        {[...cardsData, ...cardsData].map((card, index) => (
                            <CreateCard key={index} card={card} />
                        ))}
                    </div>
                    <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent"></div>
                </div>
            </div>

            {/* ── LATEST CREATIONS — scroll triggered ── */}
            <div className="bg-black  ">
                <div className="bg-black pt-14 sm:pt-20 px-4 sm:px-8">
                    <h1 ref={creationsHeadRef} className="reveal text-2xl sm:text-3xl font-semibold text-center mx-auto text-white">
                        Our Latest Creations
                    </h1>
                    <p ref={creationsDescRef} className="reveal text-sm text-slate-400 text-center mt-2 max-w-lg mx-auto">
                        A visual collection of our most recent works – each piece crafted with intention, emotion, and style.
                    </p>

                    <div ref={productsRef} id="products" className="reveal flex flex-col md:flex-row gap-3 md:gap-0 mt-8 sm:mt-10 w-full max-w-5xl mx-auto md:h-[400px]">
                        {[xData[0], xData[1]].map((item, i) => (
                            <div
                                key={i}
                                className="relative group overflow-hidden w-full rounded-xl md:rounded-none h-52 sm:h-64 md:h-full md:w-56 md:flex-grow md:transition-all md:duration-500 md:hover:flex-grow-[3]"
                            >
                                <img
                                    className="h-full w-full m-5 object-cover transition-transform duration-500 group-hover:scale-105"
                                    style={{ objectPosition: i === 0 ? 'right' : 'center' }}
                                    src={item.image}
                                    alt={item.title}
                                />
                                <div className="md:hidden absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex flex-col justify-end p-4">
                                    <div className="relative h-12 w-44">
                                        <ButtonFeature productId={item.id} />
                                    </div>
                                </div>
                                <div className="hidden md:flex absolute inset-0 flex-col justify-center p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <h2 className="text-3xl font-medium">{item.title}</h2>
                                    <p className="text-sm mt-2 line-clamp-4">{item.description}</p>
                                    <div className="mt-4 relative h-12 w-44">
                                        <ButtonFeature productId={item.id} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── NEWSLETTER — scroll triggered ── */}
                <div ref={newsletterRef} className="reveal mt-20 px-4 sm:px-8 py-14 rounded-lg max-w-2xl mx-auto">
                    <SubscriptionNewletter />
                </div>
            </div>
        </div>
    );
}

export default Home;