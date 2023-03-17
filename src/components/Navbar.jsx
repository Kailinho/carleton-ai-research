/* eslint-disable react/jsx-no-target-blank */
import React from "react"
import logo from "../assets/logo.png"

const Navbar = () => {
	return (
		<>
			<div className="mx-auto max-w-[1236px] text-[#284B63]">
				<div className="mx-auto flex h-32 w-full items-center justify-between px-16 font-serif ">
					<a
						href="https://carleton.ca"
						target="_blank"
						title="Carleton"
						className="flex h-[60px] w-[240px] hover:cursor-pointer md:h-[80px] md:min-h-[80px] md:w-[320px] md:min-w-[320px]  "
					>
						<img src={logo} className="h-full w-full" alt="" />
					</a>

					<div className="hidden flex-none items-center text-lg font-semibold xl:flex ">
						<ul className="menu menu-horizontal ">
							<li>
								<a className='border-b-2 border-transparent hover:border-[#3C6E71]'
									href="https://carleton.ca/campus/"
									target={"_blank"}
								>
									Faculty
								</a>
							</li>
							<li>
								<a	className='border-b-2 border-transparent hover:border-[#3C6E71]'
									href="https://research.carleton.ca"
									target={"_blank"}
								>
									Research
								</a>
							</li>
							<li>
								<a	className='border-b-2 border-transparent hover:border-[#3C6E71]'
									href="https://carleton.ca/about/"
									target={"_blank"}
								>
									Courses
								</a>
							</li>
							<li>
								<a	className='border-b-2 border-transparent hover:border-[#3C6E71]'
									href="https://carleton.ca/prospective"
									target={"_blank"}
								>
									Projects
								</a>
							</li>
						</ul>
					</div>
					<div className="inline-flex w-16 items-center justify-center xl:hidden">
						<button className=" h-full w-full">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className={"stroke-[#284B63"}
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar
