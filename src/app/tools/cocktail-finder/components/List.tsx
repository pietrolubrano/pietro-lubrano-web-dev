"use client"

import { useEffect, useState } from "react";
import DrinkCard from "./DrinkCard";
import { Drink } from "../drink-type";

export default function List() {

    const [inputValue, setInputValue] = useState('')
    const [data, setData] = useState<Drink[] | null>(null)

    useEffect(() => {
        if(inputValue.length === 1){
            getCocktailsByFirstLetter()
        } else {
            searchCocktailByName()
        }
    },[inputValue])

    const getCocktailsByFirstLetter = async () => {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${inputValue}`)
        const jsonResponse = await response.json();
        setData(jsonResponse.drinks)
    }

    const searchCocktailByName = async () => {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`)
        const jsonResponse = await response.json();
        setData(jsonResponse.drinks)
    }

    const handleInputChange = (value: string) => {
        setInputValue(value)
    }

    console.log(data)
    return (<>
        <div className="mb-4">
            <label htmlFor="search" className={`block text-sm font-medium leading-6 text-white"`}>
                Cerca qui il tuo drink
            </label>
            <input
                id="search"
                type="text"
                value={inputValue}
                onChange={(e) => handleInputChange(e.target.value)}
                className="block border-0 border-b-2 border-white bg-black py-1.5 text-white shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:border-lime-300 sm:text-sm sm:leading-6"
            />
        </div>
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data?.map((drink, index) => <DrinkCard key={index} drink={drink} />)}
        </div>
        </>)
}
