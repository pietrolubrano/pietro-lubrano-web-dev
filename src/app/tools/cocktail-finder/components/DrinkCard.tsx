import Link from "next/link";
import { Drink } from "../drink-type";
import Image from "next/image";

export default function DrinkCard({ drink } : { drink: Drink }) {

    const { idDrink, strDrink: name, strDrinkThumb } = drink
    return (
        <div className="">
            <Link href={`/tools/cocktail-finder/${idDrink}`}>
            <div className="overflow-hidden">
                <Image width={400} height={400} className="hover:scale-125 transition ease-in-out" src={strDrinkThumb as string} alt={name} />
            </div>
                <h3 className="uppercase font-mono">{name}</h3>
            </Link>
        </div>
    )
}
