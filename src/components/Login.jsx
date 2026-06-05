import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const BASE_URL = import.meta.env.VITE_API_URL || "";
console.log("BASE_URL:", BASE_URL);

function Toast({ message, onClose }) {
    return (
        <div className="fixed top-6 right-6 z-50 flex items-center gap-3 bg-green-500/20 border border-green-500/40 text-green-400 text-sm px-5 py-3 rounded-xl shadow-lg backdrop-blur animate-fade-in">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
            </svg>
            {message}
            <button onClick={onClose} className="ml-2 text-green-300 hover:text-white transition">✕</button>
        </div>
    );
}

const Login = () => {
    const navigate = useNavigate();
    const [state, setState] = useState("login");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState(null);

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const showToast = (message) => {
        setToast(message);
        setTimeout(() => setToast(null), 3000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const endpoint =
            state === "login"
                ? `${BASE_URL}/api/login`
                : `${BASE_URL}/api/register`;

        const payload =
            state === "login"
                ? { email: formData.email, password: formData.password }
                : {
                      username: formData.username,
                      email: formData.email,
                      password: formData.password,
                  };

        try {
            const res = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || "Something went wrong");
            } else if (state === "register") {
                // Save username, switch to login form with success toast
                localStorage.setItem("username", formData.username);
                showToast("Account created! Please log in.");
                setFormData({ username: "", email: "", password: "" });
                setState("login");
            } else {
                // Login success — save token + username, toast, redirect
              localStorage.setItem("token", data.token);
                if (data.data?.username) {
                    localStorage.setItem("username", data.data.username);
                }
                // Notify Navbar in the same tab immediately
                window.dispatchEvent(new Event("authChange"));
                showToast("Welcome back!");
                setTimeout(() => navigate("/"), 1200);
            }
        } catch {
            setError("Unable to connect to server");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const switchState = () => {
        setState((prev) => (prev === "login" ? "register" : "login"));
        setError(null);
        setFormData({ username: "", email: "", password: "" });
    };

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center">

            {/* Toast notification */}
            {toast && <Toast message={toast} onClose={() => setToast(null)} />}

            {/* Background SVG */}
            <svg
                className="absolute inset-0 z-0 w-full h-full"
                viewBox="0 0 1440 720"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                <line x1="-15" y1="702" x2="1440" y2="702" stroke="#28834c" strokeOpacity=".7" />
                <circle cx="711.819" cy="372.562" r="308.334" stroke="#00c2cb" strokeOpacity=".7" />
                <circle cx="1372.48" cy="618.205" r="308.334" stroke="#FF5722" strokeOpacity=".7" />
                <circle cx="16.942" cy="20.834" r="308.334" stroke="#bcef14" strokeOpacity=".7" />
            </svg>

            {/* Form */}
            <form
                onSubmit={handleSubmit}
                className="relative z-10 sm:w-[350px] w-full text-center bg-gray-900 border border-gray-800 rounded-2xl px-8 flex flex-col items-center pt-8 mx-4 mt-24 mb-12"
            >
                <h1 className="text-white text-3xl mt-10 font-medium">
                    {state === "login" ? "Login" : "Sign up"}
                </h1>

                <p className="text-gray-400 text-sm mt-2">
                    Please sign in to continue
                </p>

                {/* Error message */}
                {error && (
                    <div className="mt-4 w-full bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-lg px-4 py-2">
                        {error}
                    </div>
                )}

                {/* Username — register only */}
                {state !== "login" && (
                    <div className="flex items-center mt-6 w-full bg-gray-800 border border-gray-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" className="text-gray-400"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="8" r="5" />
                            <path d="M20 21a8 8 0 0 0-16 0" />
                        </svg>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            autoComplete="username"
                            className="w-full bg-transparent text-white placeholder-gray-400 border-none outline-none"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                )}

                {/* Email */}
                <div className="flex items-center w-full mt-4 bg-gray-800 border border-gray-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" className="text-gray-400"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                    </svg>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email id"
                        autoComplete="email"
                        className="w-full bg-transparent text-white placeholder-gray-400 border-none outline-none"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Password */}
                <div className="flex items-center mt-4 w-full bg-gray-800 border border-gray-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" className="text-gray-400"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        autoComplete={state === "login" ? "current-password" : "new-password"}
                        className="w-full bg-transparent text-white placeholder-gray-400 border-none outline-none"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Forgot password */}
                {state === "login" && (
                    <div className="mt-4 w-full text-left">
                        <button type="button" className="text-sm text-indigo-400 hover:underline">
                            Forgot password?
                        </button>
                    </div>
                )}

                {/* Submit */}
                <button
                    type="submit"
                    disabled={loading}
                    className="mt-4 w-full h-11 rounded-full text-white bg-indigo-600 hover:bg-indigo-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading
                        ? state === "login" ? "Logging in..." : "Signing up..."
                        : state === "login" ? "Login" : "Sign up"}
                </button>

                {/* Switch state */}
                <p className="text-gray-400 text-sm mt-3 mb-11">
                    {state === "login" ? "Don't have an account?" : "Already have an account?"}
                    <button
                        type="button"
                        onClick={switchState}
                        className="text-indigo-400 hover:underline ml-1"
                    >
                        click here
                    </button>
                </p>
            </form>
        </div>
    );
};

export default Login;