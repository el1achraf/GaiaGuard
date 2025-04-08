import { useState } from "react";

const Blog = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/api/subscribe/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
  
      if (response.status === 201) {
        setMessage("Thank you for subscribing!");
        setEmail("");
      } else if (response.status === 400) {
        const data = await response.json();
        if (data.email) {
          setMessage("This email is already subscribed.");
        } else {
          setMessage("Subscription failed. Please try again.");
        }
      } else {
        setMessage("Server error. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Network error. Please check your connection.");
    }
  };
  

  return (
    <div className="min-h-screen flex flex-col items-center lg:px-20 pt-40 gap-10 ">
      {/* Title section */}
      <div className="text-white flex flex-col items-center space-y-4">
        <h2 className="text-3xl font-bold font-orbitron">Latest News</h2>
        <p className="text-white/80 font-orbitron">
          Sign up to receive our latest updates
        </p>
      </div>

      {/* Video container */}
      <div className="w-full lg:w-2/3 relative overflow-hidden lg:border lg:border-white min-h-[200px] lg:h-[450px] flex items-center justify-center">
        <video
          src="/volcan.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-contain lg:object-cover aspect-video"
        ></video>

        {/* Inputs flottants uniquement en lg */}
        <form
          onSubmit={handleSubscribe}
          className="absolute inset-0 hidden lg:flex items-center justify-center"
        >
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="lg:px-6 py-3 lg:w-[30em] font-orbitron outline-none bg-white/20 backdrop-blur-sm border border-white/40 text-white placeholder-white/70"
            />
            <button
              type="submit"
              className="lg:px-6 py-3 font-orbitron bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/40 text-white transition-colors"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>

      {/* Inputs en dessous de la vidéo en mobile */}
      <div className="w-full lg:w-2/3 flex flex-col items-center gap-4 mt-1 lg:hidden">
        <form onSubmit={handleSubscribe} className="w-full flex flex-col items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-center w-full lg:w-[30em] px-4 py-3 mx-4 font-orbitron outline-none bg-white/20 backdrop-blur-sm border border-white/40 text-white placeholder-white/70"
          />
          <button
            type="submit"
            className="w-full lg:w-[30em] px-6 py-3 mx-4 font-orbitron bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/40 text-white transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>

      {message && <p className="text-white">{message}</p>}

      <footer className="mt-0 lg:mt-0 w-full py-4 text-center text-sm z-30">
        <p>&copy; {new Date().getFullYear()} GaiaGuard. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Blog;
