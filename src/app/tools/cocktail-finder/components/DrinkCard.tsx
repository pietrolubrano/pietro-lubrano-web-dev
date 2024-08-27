import { Drink } from "../drink-type";
import Image from "next/image";

export default function DrinkCard({ drink } : { drink: Drink }) {

    const { strDrink: name, strDrinkThumb } = drink
    return (
        <div className="">
            <Image width={400} height={400} src={strDrinkThumb as string} alt={name} />
            <h3 className="uppercase font-mono">{name}</h3>
            details...
        </div>
    )
}
