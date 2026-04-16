import { useState } from 'react';

function SubscriptionNewletter() {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState({
        type: '',
        text: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            setMessage({ type: 'error', text: 'Email is required' });
            return;
        }

        try {
            setIsSubmitting(true);

            const response = await fetch('http://localhost:5000/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (!response.ok) {
                setMessage({
                    type: 'error',
                    text: data.message || 'Subscription failed',
                });
                return;
            }

            setMessage({
                type: 'success',
                text: data.message || 'Subscribed successfully!',
            });

            setEmail(''); // ✅ reset input

        } catch (err) {
            setMessage({
                type: 'error',
                text: 'Something went wrong',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="flex flex-col items-center text-white mt-10">
            <div className="flex flex-col items-center">
                <h2 className="text-center text-4xl font-semibold max-w-2xl">
                    Subscribe <span className="bg-gradient-to-t from-red-600 to-black p-1 inline-block">newsletter</span>
                </h2>
                <p className="text-center text-slate-400 max-w-lg mt-3">
                    Stay updated with our latest news and releases.
                </p>
            </div>

            {/* ✅ FORM START */}
            <form
                onSubmit={handleSubmit}
                className="flex items-center justify-center mt-10 border border-[#202829] focus-within:outline focus-within:outline-indigo-600 text-sm rounded-full h-14 max-w-xl w-full"
            >
                <input
                    type="email"
                    required
                    className="bg-transparent outline-none rounded-full px-4 h-full flex-1 placeholder:text-slate-400"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button
                    type="submit"
                    className="bg-[#00c2cb] text-black rounded-full h-11 mr-1 px-10 flex items-center justify-center hover:bg-gray-300 active:scale-95 transition"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
            </form>
            {/* ✅ FORM END */}

            {message.text && (
                <p className={`mt-4 text-center ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {message.text}
                </p>
            )}
        </section>
    );
}

export default SubscriptionNewletter;