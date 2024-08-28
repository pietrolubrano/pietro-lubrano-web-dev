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

    const keys: [(keyof Drink), (keyof Drink)][] = [
        ['strMeasure1', 'strIngredient1'],
        ['strMeasure2', 'strIngredient2'],
        ['strMeasure3', 'strIngredient3'],
        ['strMeasure4', 'strIngredient4'],
        ['strMeasure5', 'strIngredient5'],
        ['strMeasure6', 'strIngredient6'],
        ['strMeasure7', 'strIngredient7'],
        ['strMeasure8', 'strIngredient8'],
        ['strMeasure9', 'strIngredient9'],
        ['strMeasure10', 'strIngredient10'],
        ['strMeasure11', 'strIngredient11'],
        ['strMeasure12', 'strIngredient12'],
        ['strMeasure13', 'strIngredient13'],
        ['strMeasure14', 'strIngredient14'],
        ['strMeasure15', 'strIngredient15']
    ]

    const drink = await cocktailById(params.id)

    return (
        <div className="container mx-auto bg-black">
            <Image className="md:float-right w-full sm:w-fit" priority width={400} height={400} src={drink.strDrinkThumb as string} alt={drink.strDrink} />
            <h2 className="text-2xl uppercase font-mono p-4">
                {drink.strDrink}
            </h2>
            
            <table className="w-full sm:w-fit p-4">
                <tbody className="">
                {
                    keys.map(key => drink[key[0]] && <tr key={key[0]}>
                            <td className="text-right px-2">{drink[key[0]]}</td>
                            <td className="px-2">{drink[key[1]]}</td>
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

