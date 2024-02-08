import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function About() {
  const skills= [
    "java",
    "javascript",
    "react",
    "nodejs",
    "express",
    "mongodb",
  ]
  return (
    
    <div>
      <SectionTitle title="About" />
        <div className="flex w-full items-center sm:flex-col">
            <div className="h-[70vh] w-1/2 sm:w-full">
            <lottie-player src="https://lottie.host/19168d10-5785-4ca6-b1a5-e438b51a74a2/mlauqMasuS.json" background="##fff" loop="4" speed="1"  autoplay direction="1" mode="normal"></lottie-player >
            </div>

          <div className="flex flex-col gap-5 w-1/2 sm:w-full">
            <p className=" text-white">
            Under the twilight sky, a gentle breeze whispered through the rustling leaves, carrying the scent of blooming flowers. The moon, radiant and full, cast a silvery glow upon the serene landscape.
            </p>
            <p className=" text-white">
            As the city lights shimmered in the distance, a sense of tranquility enveloped the scene. Cherry blossoms, delicate and ethereal, painted the air with their fragrance, creating a moment suspended in time. Lost in the beauty of the night, each sentence unfolded like a chapter in a story
            </p>
          </div>

        </div>

        <div className="py-5">
          <h1 className="text-white text-xl">
            Here ares a few technoligies i ve benn working with recently
          </h1>
          <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index)=> (
            <div className="border border-tertiary py-3 px-9">
              <h1 className="text-white">{skill}</h1>
               </div>
          )
          )}
          </div>
        </div>
    </div>
  );
}

export default About
