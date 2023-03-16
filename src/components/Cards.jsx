/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import Search from "./Search"
import getData from "../firebase"

const Cards = () => {
	const [data, setData] = useState(null)
	const [searchString, setSearchString] = useState("")
	const [filteredData, setFilteredData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const result = await getData("/") // <-- modify this line to your path
			setData(result)
			setFilteredData(result)
			console.log(result)
		}
		fetchData()
	}, [])

	const handleSearch = (searchString) => {
		setSearchString(searchString)
		const filtered = data.filter((item) =>
			item.name.toLowerCase().includes(searchString.toLowerCase())
		)
		setFilteredData(filtered)
	}

	return (
		<>
			<Search onSearch={handleSearch} />
			<div className="container my-12 mx-auto w-full max-w-[720px] px-6 pb-40 font-serif  text-gray-600 lg:max-w-[1236px]">
				<section className="mb-32 text-center text-gray-800">
					<div className="mt-40 grid gap-x-6 md:grid-cols-3 md:gap-y-24 lg:gap-x-12">
						{filteredData.map((item) => (
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
					</div>
				</section>
			</div>
		</>
	)
}

export default Cards
