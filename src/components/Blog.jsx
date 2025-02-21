const Blog = () => {
    return (
        <div className="min-h-screen flex flex-col items-center bg-[#010A20] px-20 pt-20 gap-10">
          {/* Title section */}
          <div className="text-white flex flex-col items-center space-y-4">
            <h2 className="text-3xl font-bold font-orbitron">Latest News</h2>
            <p className="text-white/80 font-orbitron">Sign up to receive our latest updates</p>
          </div>

          {/* Video container with floating input */}
          <div className="w-2/3 relative overflow-hidden border border-white h-[450px] flex items-center justify-center">
            <video 
              src="/volcan.mp4" 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="absolute w-full h-full object-cover"
            ></video>
            
            {/* Floating input container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-6 py-3 w-[30em] font-orbitron outline-none bg-white/20 backdrop-blur-sm border border-white/40 text-white placeholder-white/70"
                />
                <button 
                  type="submit" 
                  className="px-6 py-3 font-orbitron bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/40 text-white transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
    );
};
export default Blog;

