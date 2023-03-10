import React, { useState, useEffect } from "react"
import getData from "../firebase"

const Cards = () => {
	const [data, setData] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			const result = await getData("/") // <-- modify this line to your path
			setData(result)
			console.log(result)
		}
		fetchData()
	}, [])

	return (
		<>
			<div className="container my-12 mx-auto w-full max-w-[720px] px-6 pb-40 font-serif  text-gray-600 lg:max-w-[1236px]">
				<section className="mb-32 text-center text-gray-800">
					<div className="mt-40 grid gap-x-6 md:grid-cols-3 lg:gap-x-12 lg:gap-y-24">
						{data.map((item) => (
							<div key={item.name} className="mb-24 md:mb-0">
								<div className="block h-full rounded-lg bg-white shadow-lg">
									<div className="flex justify-center">
										<div className="mt-[-75px] flex justify-center">
											<img
												src={item.picture}
												className="mx-auto w-[150px] rounded-full shadow-lg"
												alt="Researcher"
											/>
										</div>
									</div>
									<div className="flex flex-col gap-4 p-6">
										<h5 className=" text-lg font-bold">
											{item.name}
										</h5>
										<p className="">{item.title}</p>
										<p>School of Computer Science</p>
									</div>
								</div>
							</div>
						))}

						{/* <div class="mb-24 md:mb-0">
							<div class="block h-full rounded-lg bg-white shadow-lg">
								<div class="flex justify-center">
									<div class="mt-[-75px] flex justify-center">
										<img
											src={pic}
											class="mx-auto w-[150px] rounded-full shadow-lg"
											alt="Researcher"
										/>
									</div>
								</div>
								<div class="flex flex-col gap-4 p-6">
									<h5 class=" text-lg font-bold">Name</h5>
									<p class="">Full-time Professor</p>
									<p>Department</p>
								</div>
							</div>
						</div>
						<div class="mb-24 md:mb-0">
							<div class="block h-full rounded-lg bg-white shadow-lg">
								<div class="flex justify-center">
									<div class="mt-[-75px] flex justify-center">
										<img
											src={pic}
											class="mx-auto w-[150px] rounded-full shadow-lg"
											alt="Researcher"
										/>
									</div>
								</div>
								<div class="flex flex-col gap-4 p-6">
									<h5 class=" text-lg font-bold">Name</h5>
									<p class="">Full-time Professor</p>
									<p>Department</p>
								</div>
							</div>
						</div> */}
					</div>
				</section>
			</div>
		</>
	)
}

export default Cards
