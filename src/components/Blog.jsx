const Blog = () => {
  return (
      <div className="min-h-screen flex flex-col items-center lg:px-20 pt-40 gap-10">
        {/* Title section */}
        <div className="text-white flex flex-col items-center space-y-4">
          <h2 className="text-3xl font-bold font-orbitron">Latest News</h2>
          <p className="text-white/80 font-orbitron">Sign up to receive our latest updates</p>
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
          <div className="absolute inset-0 hidden lg:flex items-center justify-center">
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="lg:px-6 py-3 lg:w-[30em] font-orbitron outline-none bg-white/20 backdrop-blur-sm border border-white/40 text-white placeholder-white/70"
              />
              <button 
                type="submit" 
                className="lg:px-6 py-3 font-orbitron bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/40 text-white transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Inputs en dessous de la vidéo en mobile */}
        <div className="w-full lg:w-2/3 flex flex-col items-center gap-4 mt-1 lg:hidden">
  <input 
    type="email" 
    placeholder="Enter your email" 
    className=" text-center lg:text-start w-full lg:w-[30em] px-4 py-3 mx-4 font-orbitron outline-none bg-white/20 backdrop-blur-sm border border-white/40 text-white placeholder-white/70"
  />
  <button 
    type="submit" 
    className="w-full lg:w-[30em] px-6 py-3 mx-4 font-orbitron bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/40 text-white transition-colors"
  >
    Subscribe
  </button>
</div>


      </div>
  );
};

export default Blog;
