import { useEffect, useRef } from 'react';
import './about.css';

// Hook: triggers 'visible' class when element scrolls into view
function useScrollReveal() {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('visible');
                    observer.unobserve(el); // animate once
                }
            },
            { threshold: 0.15 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);
    return ref;
}

function About() {
    const headingRef     = useScrollReveal();
    const descRef        = useScrollReveal();
    const appsHeadRef    = useScrollReveal();
    const appsDescRef    = useScrollReveal();
    const imageRef       = useScrollReveal();
    const featuresRef    = useScrollReveal();
    const teamHeadRef    = useScrollReveal();
    const teamDescRef    = useScrollReveal();
    const card1Ref       = useScrollReveal();
    const card2Ref       = useScrollReveal();
    const card3Ref       = useScrollReveal();

    return (
        <div className='bg-black text-white px-4'>
            {/* SVG BACKGROUND */}
            <svg className="absolute inset-0 z-0" viewBox="0 0 1440 720" fill="none">
                <circle cx="1372.48" cy="618.205" r="308.334" stroke="#FF5722" strokeOpacity=".7" />
                <circle cx="16.942" cy="20.834" r="308.334" stroke="#299253" strokeOpacity=".7" />
            </svg>

            {/* Hero heading — no scroll trigger, shows on load */}
            <h1 className="text-3xl font-bold text-center mt-16 text-white pt-10">
                About X2Ls.com
            </h1>
            <p className="text-slate-400 text-center max-w-lg mx-auto mt-4">
                X2ls is audio software and online tools company that provides variety of audio plugins
                for the musicians, mixing engineers and audio programmers. With aim to deliver professional
                high quality plugins, we are dedicated to make that thing possible each and every time.
                For development and research purposes, we need your support and donation for running this
                startup project. Your small donation makes a huge difference in our success, so kindly donate us.
            </p>

            {/* About our apps */}
            <h1 ref={headingRef} className="reveal text-3xl font-semibold text-center mx-auto mt-10">
                About our apps
            </h1>
            <p ref={descRef} className="reveal text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
                A visual collection of our most recent works - each piece crafted with intention, emotion and style.
            </p>

            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0 py-10">
                <img
                    ref={imageRef}
                    className="reveal-left max-w-sm w-full rounded-xl h-auto"
                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"
                    alt=""
                />
                <div ref={featuresRef} className="reveal-right">
                    <h1 className="text-3xl font-semibold">Our Latest features</h1>
                    <p className="text-sm text-slate-500 mt-2">
                        Our apps are packed with powerful features designed to enhance your productivity and creativity.
                    </p>
                    <div className="flex flex-col gap-10 mt-6">
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-red-600">Lightning-Fast Performance</h3>
                                <p className="text-sm text-slate-500">Built with speed — minimal load times and optimized.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-blue-600">Beautifully Designed Components</h3>
                                <p className="text-sm text-slate-500">Modern, Less Requirements needed to attach new songs.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-green-600">Plug-and-Play Integration</h3>
                                <p className="text-sm text-slate-500">Simple setup and seamless voice integration.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team section */}
            <h1 ref={teamHeadRef} className="reveal text-3xl font-medium text-slate-200 text-center">
                Meet Our Team
            </h1>
            <p ref={teamDescRef} className="reveal text-slate-500 text-center">
                The people behind the product, passionate about what they do.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
                {/* Card 1 */}
                <div ref={card1Ref} className="reveal-up max-w-80 bg-black text-white rounded-2xl" style={{ transitionDelay: '0ms' }}>
                    <div className="relative -mt-px overflow-hidden rounded-2xl">
                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600" alt=""
                            className="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top" />
                        <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
                    </div>
                    <div className="px-4 pb-6 text-center">
                        <p className="mt-4 text-lg">Bhushan Nasre</p>
                        <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#9938CA] to-[#E0724A] text-transparent bg-clip-text">Web Developer</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div ref={card2Ref} className="reveal-up max-w-80 bg-black text-white rounded-2xl" style={{ transitionDelay: '100ms' }}>
                    <div className="relative -mt-px overflow-hidden rounded-2xl">
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600" alt=""
                            className="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top" />
                        <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
                    </div>
                    <div className="px-4 pb-6 text-center">
                        <p className="mt-4 text-lg">Atul Pusam</p>
                        <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#9938CA] to-[#E0724A] text-transparent bg-clip-text">CEO</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div ref={card3Ref} className="reveal-up max-w-80 bg-black text-white rounded-2xl" style={{ transitionDelay: '200ms' }}>
                    <div className="relative -mt-px overflow-hidden rounded-2xl">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&h=600&auto=format&fit=crop" alt=""
                            className="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top" />
                        <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
                    </div>
                    <div className="px-4 pb-6 text-center">
                        <p className="mt-4 text-lg">John Doe</p>
                        <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#9938CA] to-[#E0724A] text-transparent bg-clip-text">Content Marketing</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;