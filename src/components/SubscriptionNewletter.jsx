import {useState} from 'react';
function SubscriptionNewletter() {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState({
        type:'',
        text:'',
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            setIsSubmitting(true);
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email }),
            });
            const data = await response.json();
            if(!response.ok){
                setMessage({
                    type: 'error',
                    text: data.message || 'Subscription failed. Please try again.',
                });
                return;
            }
            else{
                setMessage({
                    type: 'success',
                    text: data.message || 'Subscribed successfully!',
                })
            }
        }
        catch(err){
            console.error(err);
        }
        finally{
            setIsSubmitting(false);
        }
        
    }
    return (
<>
<section className="flex flex-col items-center text-white mt-10 " onSubmit={handleSubmit}>
            <div className="flex flex-col items-center">
                <h2 className="text-center text-4xl font-semibold max-w-2xl  ">Subscribe <span className="bg-gradient-to-t from-red-600 to-black p-1 bg-left inline-block bg-no-repeat">newsletter</span></h2>
                <p className="text-center text-slate-400 max-w-lg mt-3">Stay updated with our latest news and releases related to x2LS.com.</p>
            </div>
            <div className="flex items-center justify-center mt-10 border border-[#202829] focus-within:outline focus-within:outline-indigo-600 text-sm rounded-full h-14 max-w-xl w-full">
                <input className="bg-transparent outline-none rounded-full px-4 h-full flex-1 placeholder:text-slate-400" placeholder="Enter your email address" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <button className="bg-[#00c2cb] text-black rounded-full h-11 mr-1 px-10 flex items-center justify-center hover:bg-gray-300 active:scale-95 transition" disabled={isSubmitting}>{isSubmitting ? 'Subscribing...' : 'Subscribe'}</button>
            </div>
            {message.text && (
                <p className={`mt-4 text-center ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {message.text}
                </p>
            )}
        </section>
        {
            message.text && (
                  <div className="flex items-center justify-between text-blue-600 max-w-80 w-full bg-blue-600/10 h-10 shadow">
            <div className="h-full w-1.5 bg-blue-600"></div>
            <div className="flex items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon line">
                    <path style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.95" d="M11.95 16.5h.1"/>
                    <path d="M3 12a9 9 0 0 1 9-9h0a9 9 0 0 1 9 9h0a9 9 0 0 1-9 9h0a9 9 0 0 1-9-9m9 0V7" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5"/>
                </svg>
                <p className="text-sm ml-2">Success! Your task is fully completed.</p>
            </div>   
            <button type="button" aria-label="close" className="active:scale-90 transition-all mr-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </div>
            )
        }
</>
    )
}
export default SubscriptionNewletter;