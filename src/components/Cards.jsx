/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import Search from "./Search"
import getData from "../firebase"
import profile from "../assets/profile.jpg"

const Cards = () => {
	const [data, setData] = useState(null)
	const [searchString, setSearchString] = useState("")
	const [filteredData, setFilteredData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const result = await getData("/") // <-- modify this line to your path
			setData(result)
			setFilteredData(result)
		}
		fetchData()
	}, [])

	const handleSearch = (searchString) => {
		setSearchString(searchString)
		const filtered = data.filter((item) =>
			((item.research && item.research['Research Interests']) && (item.research['Research Interests'].toLowerCase().includes(searchString.toLowerCase()))) ||
			((item.research && item.research['Specific Research Interests']) && (item.research['Specific Research Interests'].toLowerCase().includes(searchString.toLowerCase())))
		)
		setFilteredData(filtered)
	}

	return (
		<>
			<Search onSearch={handleSearch} />
			<div className="container mx-auto max-w-[720px] px-6 font-serif pb-20 text-[#284B63] lg:max-w-[1236px]">
				<section className="text-center text-[#284B63]">
					<div className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-12">
						{filteredData.map((item) => (
							<div key={item.name} className="max-w-[80vw] mx-auto md:mb-0">
								<div className="lg:block border-b-2 border-transparent hover:border-[#284B63] items-center flex p-6 h-full relative rounded-lg bg-white shadow-lg">
									<div className="flex justify-center">
										<div className="pr-5 sm:p-5 lg:py-5 flex justify-center">
											<img
												src={item.picture || profile}
												className="mx-auto min-w-[80px] w-[150px] shadow-lg"
												alt="Researcher"
											/>
										</div>
									</div>
									<div className="flex text-left flex-col gap-5 lg:gap-[12px] sm:pl-20 lg:p-6">
										<a href={item.url} target="_blank" className="md:text-xl cursor-pointer font-bold hover:opacity-80" rel="noreferrer">{item.name}</a>
										<p className="text-sm">{item.title}</p>
										<p className="text-sm">{item.department}</p>
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
