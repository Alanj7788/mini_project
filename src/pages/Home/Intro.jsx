import React from 'react'

function Intro() {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text-white">Hi I am</h1>
      <h1 className="text-7xl sm:text-3xl text-secondary font-semibold">
        Alan Jose
      </h1>
      <h1 className="text-7xl sm:text-3xl text-white font-semibold">I am Pro</h1>
      <p className="text-white w-2/3 sm:w-full">
   The city lights began to flicker, casting a warm glow on bustling streets. Laughter echoed from a nearby cafe, mingling with the rhythmic hum of city life. Stars emerged, creating a celestial tapestry above.
      </p>

   <button className="border-2 border-tertiary text-white px-10 py-3 rounded">Get Started</button>
    </div>
  )
}

export default Intro
