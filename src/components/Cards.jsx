/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import Search from "./Search"
import getData from "../firebase"
import profile from "../assets/profile.jpg"

function createBigrams(words) {
	const bigrams = [];
	for (let i = 0; i < words.length - 1; i++) {
	  const bigram = `${words[i]} ${words[i + 1]}`;
	  bigrams.push(bigram);
	}
	return bigrams;
  }
  
  // Function to create trigrams from a list of words
  function createTrigrams(words) {
	const trigrams = [];
	for (let i = 0; i < words.length - 2; i++) {
	  const trigram = `${words[i]} ${words[i + 1]} ${words[i + 2]}`;
	  trigrams.push(trigram);
	}
	return trigrams;
  }

let searchResults = []
const fetchSearchResults = async (searchValue) => {
	try {
		const result = await fetch(`https://semanticsearch-api.onrender.com/search/${searchValue}`, {
									   mode: 'cors',
									   headers: {'Content-Type': 'application/json'},})
		const jsonResult = await result.json()
		searchResults = jsonResult
		return jsonResult
		
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
		
		
		setSearchString(searchString);
		

		//tokenizes the search query and removes stop words 
		const stopWords = ["a", "an", "and", "the", "of", "for", "in", "on", "with"];
		const searchTokens = searchString
			.toLowerCase()
			.split(/\s+/)
			.filter(token => !stopWords.includes(token));
		
		
		fetchSearchResults(searchString)
		

		const filteredList = [];
		const fullQueryMatches = [];
		const bigramMatches = [];
		const trigramMatches = [];

		//for each item in our data, we perform our exact match, bi gram and trigram searches.
		data.forEach((item) => {
			const researchData = item.research_data ? item.research_data.toLowerCase() : '';
		  
			if (researchData.includes(searchString)) {
			  fullQueryMatches.push(item);
			} else {
			  const bigrams = createBigrams(searchTokens);
			  if (bigrams.some(bigram => researchData.includes(bigram))) {
				bigramMatches.push(item);
			  } else {
				const trigrams = createTrigrams(searchTokens);
				if (trigrams.some(trigram => researchData.includes(trigram))) {
				  trigramMatches.push(item);
				}
			  }
			}
		  });
		  
		  // Build the final filtered list in the order of full query, bigram, and trigram matches
		  filteredList.push(...fullQueryMatches);
		  filteredList.push(...bigramMatches.filter(item => !fullQueryMatches.includes(item)));
		  filteredList.push(...trigramMatches.filter(item => !fullQueryMatches.includes(item) && !bigramMatches.includes(item)));
		  
		  console.log(filteredList);

		let tempList = []
		for(let i = 0; i < searchResults.length; i++){
			tempList.push((data.filter((item) =>{
				return item.name && item.name.includes(searchResults[i].name)
			})))
		}

		for(let i = 0; i <tempList.length; i++){
			filteredList.push(tempList[i][0])
		}
		
		
		// This last step here cleans up our filtered list and removes duplicate entries
		const uniqueNames = new Map();
		const uniqueMap = [];

		for (const item of filteredList) {
			const name = item.name;
			if (!uniqueNames.has(name)) {
				uniqueNames.set(name,true);
				uniqueMap.push(item);
			}
		}
		
		console.log(filteredList);
		console.log(uniqueMap);
		setFilteredData(uniqueMap)


			
			
		
		
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
