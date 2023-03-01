import React from "react"

const Search = () => {
	return (
		<>
			<div class="flex items-center justify-center gap-8 ">
				<div class="flex items-center justify-center gap-x-6 lg:mt-6">
					<div className=" cursor-pointer  rounded-xl bg-red-200 px-10 py-4">
						<div class="text-sm font-semibold leading-6 text-red-600">
							<span
								aria-hidden="true"
								className="flex items-center justify-between gap-2"
							>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="h-6 w-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M19.5 8.25l-7.5 7.5-7.5-7.5"
										/>
									</svg>
								</div>
								<div>
									<p>Filter</p>
								</div>
							</span>
						</div>
					</div>
					<div className="cursor-pointer  ">
						<div class="relative bg-transparent text-lg text-gray-800">
							<div class="flex items-center border-b-2 border-red-500 py-2">
								<input
									class="mr-3 border-none bg-transparent px-2 leading-tight focus:outline-none"
									type="text"
									placeholder="Search"
								/>
								<button
									type="submit"
									class="absolute right-0 top-0 mt-3 mr-4"
								>
									<svg
										class="h-4 w-4 fill-current"
										xmlns="http://www.w3.org/2000/svg"
										version="1.1"
										id="Capa_1"
										x="0px"
										y="0px"
										viewBox="0 0 56.966 56.966"
										width="512px"
										height="512px"
									>
										<path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Search