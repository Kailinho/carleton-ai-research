import React from "react"
import hero from "../assets/hero.jpg"

const Hero = () => {
	return (
		<>
			<main className="scroll-smooth">
				<section class="body-font mx-auto w-full max-w-[720px] px-4 text-gray-600 lg:max-w-[1236px] ">
					<div class="container mx-auto flex flex-col-reverse items-center px-5 pt-10 pb-10 lg:flex-row">
						<div class="mb-10 w-full  lg:mb-0 lg:w-1/2 lg:max-w-2xl">
							<img
								class=" rounded-lg object-cover object-center"
								alt="AI Research"
								src={hero}
							/>
						</div>
						<div class="flex flex-col items-center text-center lg:w-1/2 lg:flex-grow lg:items-start lg:pl-24 lg:text-left">
							<h1 class="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
								Carleton University AI Research
							</h1>
							<p class="mb-8 leading-relaxed">
								Creating the next big thing in Artificial
								Intelligence.
							</p>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}

export default Hero
