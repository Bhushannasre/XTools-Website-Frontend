import React, { useState } from 'react';

const BASE_URL = import.meta.env.VITE_API_URL || "";

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'success' | 'error' | 'loading'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Check if user is logged in
    const token = localStorage.getItem("token");
    if (!token) {
      setStatus({ type: 'error', message: '🔒 Please sign in to submit this form.' });
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch(`${BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus({ type: 'error', message: data.error || 'Something went wrong' });
      } else {
        setStatus({ type: 'success', message: 'Message sent successfully! 🎉' });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch  {
      setStatus({ type: 'error', message: 'Server unreachable. Please try again later.' });
    }
  };

  return (
    <>
     

      <section className='relative bg-black flex flex-col md:flex-row justify-center px-4 py-20 gap-20'>
        {/* SVG BACKGROUND */}
        <svg className="absolute inset-0 z-0" viewBox="0 0 1440 720" fill="none">
          <circle cx="1372.48" cy="618.205" r="308.334" stroke="#FF5722" strokeOpacity=".7" />
          <circle cx="711.819" cy="372.562" r="308.334" stroke="#24229b" strokeOpacity=".7" />
          <circle cx="16.942" cy="20.834" r="308.334" stroke="#299253" strokeOpacity=".7" />
        </svg>

        <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none mb-10 size-140 rounded-full blur-[200px]'></div>

        <div className='text-center md:text-left mt-12'>
          <div className="flex items-center p-1.5 rounded-full border border-green-900 text-xs w-fit mx-auto md:mx-0">
            <div className="flex items-center">
              <img className="size-7 rounded-full border border-green-900" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50" alt="userImage1" />
              <img className="size-7 rounded-full border border-green-900 -translate-x-2" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50" alt="userImage2" />
              <img className="size-7 rounded-full border border-green-900 -translate-x-4" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop" alt="userImage3" />
            </div>
            <p className="-translate-x-2 text-xs text-slate-200">Join community of 1m+ founders</p>
          </div>

          <h1 className='font-medium text-3xl md:text-5xl/15 bg-linear-to-r max-md:mx-auto from-white to-[#00c2cb] bg-clip-text text-transparent max-w-[470px] mt-4'>
            Ready to Transform Your Digital Experience?
          </h1>
          <p className='text-sm/6 text-white max-w-[345px] mt-4 mx-auto md:mx-0'>
            Let our design team craft a website that elevates your brand. Book a free session today.
          </p>
        </div>

        <div className='w-full max-w-lg max-md:mx-auto backdrop-blur-sm border border-white/10 rounded-xl p-8'>
          <form className='space-y-6 text-white' onSubmit={handleSubmit}>
            <div>
              <label className='block text-white text-sm mb-2'>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Eden Johnson"
                className='w-full bg-[#00A63E]/5 border border-white/20 rounded-lg px-4 py-3 text-white/90 placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-[#00c2cb] transition'
              />
            </div>

            <div>
              <label className='block text-white text-sm mb-2'>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Eden@example.com"
                className='w-full bg-[#00A63E]/5 border border-white/20 rounded-lg px-4 py-3 text-white/90 placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-[#00c2cb] transition'
              />
            </div>

            <div>
              <label className='block text-white text-sm mb-2'>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="4"
                required
                className='w-full bg-[#00A63E]/5 border border-white/20 rounded-lg px-4 py-3 text-white/90 placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-[#00c2cb] transition resize-none'
              ></textarea>
            </div>

            {/* Status Message */}
            {status && status.type === 'success' && (
              <p className='text-green-400 text-sm'>{status.message}</p>
            )}
            {status && status.type === 'error' && (
              <p className='text-red-400 text-sm'>{status.message}</p>
            )}

            <div className='flex items-center justify-between'>
              <p className='text-xs md:text-sm text-white/60 max-w-3xs'>
                By submitting, you agree to our{' '}
                <span className='text-white'>Terms</span> and{' '}
                <span className='text-white'>Privacy Policy</span>.
              </p>
              <button
                type="submit"
                disabled={status === 'loading'}
                className='bg-linear-to-r from-blue-950 to-green-600 hover:from-green-600 hover:to-[#00c2cb] text-white text-sm px-8 md:px-16 py-3 rounded-full transition duration-300 cursor-pointer disabled:opacity-50'
              >
                {status === 'loading' ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;