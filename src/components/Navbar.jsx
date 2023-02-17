/* eslint-disable react/jsx-no-target-blank */
import React from "react"

const Navbar = () => {
	return (
		<>
			<div className="mx-auto flex h-36 w-full max-w-[1920px] content-center items-center justify-between px-40 font-serif ">
				{/* bg-logo bg-no-repeat bg-contain  */}
				<div className="min-h-full min-w-[10rem] max-w-[18rem] flex-grow  bg-logo bg-contain bg-left bg-no-repeat hover:cursor-pointer"></div>

				<div className="flex-none">
					<ul className="menu menu-horizontal text-xl font-semibold text-[#293241]">
						<li>
							<a
								href="https://carleton.ca/campus/"
								target={"_blank"}
							>
								Campus
							</a>
						</li>
						<li>
							<a
								href="https://research.carleton.ca"
								target={"_blank"}
							>
								Research
							</a>
						</li>
						<li>
							<a
								href="https://carleton.ca/prospective"
								target={"_blank"}
							>
								Admissions
							</a>
						</li>
						<li>
							<a
								href="https://carleton.ca/about/"
								target={"_blank"}
							>
								About
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default Navbar
