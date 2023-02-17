import React from "react"

const Hero = () => {
	return (
		<>
			<div className="relative mx-auto flex h-full w-full max-w-[1920px] flex-col items-center justify-center overflow-hidden px-[3.5rem] py-10 font-serif">
				<div className="flex w-full flex-col-reverse gap-8 lg:flex-row lg:gap-0">
					{/* :HERO MAIN */}
					<div className="flex w-full flex-col justify-center pl-10 text-gray-600 lg:w-1/2">
						{/* Container */}
						{/* ::Hero Inner */}
						<div className="flex flex-col items-center justify-center gap-2 text-center lg:items-start lg:text-left">
							{/* Hero Title */}
							<h1 className="text-5xl font-semibold tracking-wide  text-gray-400">
								Carleton AI Research Lab
							</h1>
							<p className="py-10 font-light leading-tight tracking-wide sm:text-5xl">
								Creating the next <br />
								big thing in <br />
								Artificial intelligence
							</p>
							{/* Starting Price */}

							{/* Buttons */}
							<div className="flex flex-col items-center pt-16 sm:flex-row">
								<button className="m-1.5 rounded-md bg-teal-300 py-4 px-8 font-semibold uppercase text-white hover:bg-teal-400">
									Filter
								</button>
								<button className="m-1.5 rounded-md border-2 border-gray-300 py-4 px-8 font-semibold uppercase text-gray-400 hover:border-teal-400 hover:text-teal-400">
									Search
								</button>
							</div>
						</div>
					</div>
					{/* :HERO ILLUSTRATION */}
					<div className="relative flex w-full flex-col items-center justify-center overflow-hidden lg:w-1/2">
						<img
							src="https://plus.unsplash.com/premium_photo-1664475465598-ccbe3f36abef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
							alt=""
							className="w-2/3 lg:w-full"
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Hero
