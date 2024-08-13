import { Orbitron } from "next/font/google";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import ContactForm from "./components/ContactForm";

const orbitron = Orbitron({ subsets: ["latin"]})

export default async function Home() {

  return (
    <main className="min-h-full w-full">
      
      <div className="flex flex-col items-center justify-center h-[calc(100svh-4rem)] pb-16 text-center">

        {/* <div className="flex flex-col text-center items-center justify-center bg-red-400 min-h-full"> */}
          <h1 className={`${orbitron.className} font-extrabold uppercase text-3xl`}>Pietro Lubrano</h1>
          <h2 className={`${orbitron.className} text-xl font-bold uppercase mx-auto text-lime-300`}>WEB DEVELOPER</h2>
        {/* </div> */}
        <Link href={"#technologies"} className="absolute bottom-8 animate-bounce hover:text-lime-400">
            <ArrowDownIcon className="h-8 w-8" />
        </Link>

      </div>

      <div id="technologies" className="grid md:grid-cols-2 items-center">
        <h3 className={`text-2xl uppercase p-4 text-center font-bold ${orbitron.className}`}>Technology I 💚</h3>
        <ul className="font-semibold">
          {[
            {name: 'Html', color: 'pink-600'},
            {name: 'CSS', color: 'orange-500'},
            {name: 'Javascript', color: 'yellow-500'},
            {name: 'Typescript', color: 'blue-800'},
            {name: 'React', color: 'cyan-500'},
            {name: 'Next.js', color: 'black'},
            {name: 'node.js', color: 'green-600'},
            {name: 'Postgress SQL', color: 'gray-400'}
          ].map(technology => <li key={technology.name}
            className={`text-xl ps-5 uppercase ${orbitron.className} p-2 bg-gradient-to-r from-${technology.color} to-black`}
            >
            {technology.name}
          </li>)}
          {/* <li 
            className={`flex items-center justify-center  text-2xl rounded-2xl uppercase font-bold ${orbitron.className}`}
            >
            <ArrowDownIcon className="h-8 w-8 md:h-16 md:w-16 animate-bounce hover:text-lime-500" />
          </li> */}

          </ul>
      </div>

      <div className="container mx-auto p-4 bg-black">
        <p className="text-2xl uppercase py-4">
          Contact me
        </p>
        <ContactForm />
      </div>
      

    </main>
  );
}
