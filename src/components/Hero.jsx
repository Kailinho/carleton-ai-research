import React from "react"
import hero from "../assets/hero.jpg"

const Hero = () => {
	return (
		<>
			<main className="scroll-smooth">
				<section className="mx-auto w-full max-w-[720px] px-4 font-serif text-gray-600 lg:max-w-[1236px] ">
					<div className="container mx-auto flex flex-col-reverse items-center px-5 pt-10 pb-10 lg:flex-row">
						<div className="mb-10 w-full  lg:mb-0 lg:w-1/2 lg:max-w-2xl">
							<img
								className=" rounded-lg object-cover object-center"
								alt="AI Research"
								src={hero}
							/>
						</div>
						<div className="flex flex-col items-center text-center lg:w-1/2 lg:flex-grow lg:items-start lg:pl-24 lg:text-left">
							<h1 className="mb-4 text-xl font-semibold  text-gray-900 sm:text-4xl">
								Carleton Interdisciplinary Ethical AI Research
							</h1>
							<p className="mb-8 text-xl leading-relaxed">
								The Carleton Interdisciplinary Ethical AI
								Research (CIE-AIR) aims to connect AI
								researchers at Carleton with problem owners for
								sustainable development of Ethical AI.
							</p>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}

export default Hero
