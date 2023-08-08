/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import Search from "./Search"
import getData from "../firebase"
import profile from "../assets/profile.jpg"

let searchResults = []
const fetchSearchResults = async (searchValue) => {
	try {
		const result = await fetch(`https://semanticsearch-api.onrender.com/search/${searchValue}`, {
									   mode: 'cors',
									   headers: {'Content-Type': 'application/json'},})
		const jsonResult = await result.json()
		searchResults = jsonResult
		return jsonResult
		console.log(jsonResult)
	} catch (error) {
		console.error(error)
	}
}


const Cards = () => {
	const [data, setData] = useState(null)
	const [searchData, setSearchData] = useState(null)
	const [searchString, setSearchString] = useState("")
	const [filteredData, setFilteredData] = useState([])
	const [hasSearched, setHasSearched] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await getData("/")
				setData(result)
				setFilteredData(result)
				console.log(result)
			} catch (error) {
				console.error(error)
			}
		}
		
		fetchData()
		fetchSearchResults("machine learning")
	}, [])

	// This function will take the search string and filter the data based on the search string
	const handleSearch = (searchString) => { 
		const findMatch = (ele,name) => {
			data.filter((ele) => {
				return ele.name && ele.name.includes(name)
			});
		}
		// set the search string to the value the user has typed
		setSearchString(searchString);
		let numOfWords = searchString.split(" ").length
		

		// if the number of words is greater than 1 then use the NLP search technique
		if(numOfWords > 1){
			fetchSearchResults(searchString)
			console.log(searchResults)
			const filtered = data.filter((item) => {
				let match = data.filter((item) => {
					return item.name && item.name.includes(searchResults[0].name)
				})
				for(let i = 1; i < searchResults.length; i++){
					match.push((data.filter((item) => {
						return item.name && item.name.includes(searchResults[i].name)
					}))[0])
					console.log(match)
					
				};
				return(match)
				setFilteredData(match);
			});

			console.log(filtered)
			
			
		}
		else{
			const filtered = data.filter((item) => {
			return item.research_data && item.research_data.toLowerCase().includes(searchString);
			});
			console.log(filtered)
			// set the filtered data to the state
			setFilteredData(filtered);
		}
		// set the hasSearched state to true if the search string is not empty
		searchString ? setHasSearched(true) : setHasSearched(false)
	  }
	  
	return (
		<>
			<Search onSearch={handleSearch} />
			<div className="container mx-auto  px-6 font-serif pb-20 text-[#284B63] lg:max-w-[1236px]">
				<section className="text-center text-[#284B63]">
					<div className="mt-12 grid lg:grid-cols-3 lg:gap-12">
						{hasSearched ? ( filteredData.map((item) => (
							<div key={item.name} className="my-2 mx-auto lg:mb-0">
								<div className="lg:block w-[700px] max-w-[80vw] lg:w-[325px] border-b-2 border-transparent hover:border-[#284B63] items-center flex p-6 h-full relative rounded-lg bg-white shadow-lg">
									<div className="flex justify-center">
										<div className="pr-5 sm:p-5 lg:py-5 flex justify-center">
											<img
												src={item.picture || profile}
												className="mx-auto min-w-[100px] w-[150px] rounded-md shadow-lg"
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
							))) : (
									<>
										<div className='h-[300px]'></div>
									</>
							)}
					</div>
				</section>
			</div>
		</>
	)
}

export default Cards
