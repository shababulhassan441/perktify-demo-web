import React from 'react'

const Hero = () => {
  return (
    <main className="position-relative d-flex min-vh-100 flex-column bg-cover bg-center" style={{ backgroundImage: "url('/bg.webp')" }}>
    {/* Background Overlay */}
    <div className="position-absolute top-0 start-0 w-100 h-100 rounded-bottom-5" style={{ background: "linear-gradient(to bottom, #ae6af5, #2c45f4)", opacity: 0.75 }}></div>
  
    {/* Content Section */}
    <div className="position-relative d-flex flex-column justify-content-center align-items-center text-center flex-grow-1 px-3 py-5 py-md-4 py-lg-5">
      <div className="container">
        <h1 className="text-white fw-bold display-4 display-md-5 display-lg-3">
          Welcome to Storekwil Reward <br className="d-none d-md-block" /> Web
        </h1>
        <p className="text-white fs-5 w-75 mx-auto">
          Be among the first to explore our platform by signing up for our exclusive waitlist. Get early access, stay updated, and be part of something exciting!
        </p>
      </div>
    </div>
  </main>
  
  )
}

export default Hero