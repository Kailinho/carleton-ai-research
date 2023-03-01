import React from "react"
import pic from "../assets/profile.jpg"

const Cards = () => {
	return (
		<>
			<div class="container my-24 mx-auto w-full max-w-[720px] px-6 pb-40 font-serif  text-gray-600 lg:max-w-[1236px]">
				<section class="mb-32 text-center text-gray-800">
					<h2 class="mb-32 text-3xl font-bold">
						Meet our
						<span class="text-red-600"> Researchers</span>
					</h2>
					<div class="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
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
						</div>
					</div>
				</section>
			</div>
		</>
	)
}

export default Cards
