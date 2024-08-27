import React from "react"
import { Drink } from "../drink-type"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlasses, faGlassMartini, faGlassMartiniAlt, faGlassWhiskey } from "@fortawesome/free-solid-svg-icons"

const cocktailById = async (id: string) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    const { drinks }: { drinks: Drink[]} = await response.json()
    return drinks[0]
}

export default async function Page({
    params
} : {
    params: { id: string }
}) {

    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    const drink = await cocktailById(params.id)

    console.log(drink)
    return (
        <div className="container mx-auto bg-black">
            <Image className="float-right w-full sm:w-fit" priority width={300} height={300} src={drink.strDrinkThumb as string} alt={drink.strDrink} />
            <h2 className="text-2xl uppercase font-mono p-4">
                {drink.strDrink}
            </h2>
            
            <table className="w-full sm:w-fit p-4 ms-2">
                <tbody className="">
                {
                    numbers.map(number => drink[`strMeasure${number}`] && <tr key={number}>
                        <td className="text-right px-2">{drink[`strMeasure${number}`]}</td>
                        <td className="px-2">{drink[`strIngredient${number}`]}</td>
                        </tr>)
                }
                </tbody>
            </table>
            {/* {drink.strCategory} */}
            <p className="p-4">
                {drink.strInstructionsIT}
            </p>
            <p className="p-4">
                Tipo Bicchiere: {drink.strGlass}
            </p>
        </div>
    )
}

