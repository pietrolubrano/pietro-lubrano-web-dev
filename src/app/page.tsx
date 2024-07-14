import { Orbitron } from "next/font/google";
import { ArrowDownCircleIcon, ArrowDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const orbitron = Orbitron({ subsets: ["latin"]})

export default function Home() {  
  
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

      <div id="technologies" className="h-[calc(100dvh)] p-4 grid gap-4 md:grid-cols-4">

          {[
            {name: 'CSS', bgColor: 'bg-orange-500'},
            {name: 'Javascript', bgColor: 'bg-yellow-500'},
            {name: 'Typescript', bgColor: 'bg-blue-800'},
            {name: 'React', bgColor: 'bg-cyan-500'},
            {name: 'Next.js', bgColor: 'bg-black'},
            {name: 'node.js', bgColor: 'bg-green-600'},
            {name: 'Postgress SQL', bgColor: 'bg-gray-400'}
          ].map(technology => <button key={technology.name}
            className={`text-2xl rounded-xl uppercase font-bold ${orbitron.className} ${technology.bgColor}`}
            >
            {technology.name}
          </button>)}
          <button 
            className={`flex items-center justify-center  text-2xl rounded-2xl uppercase font-bold ${orbitron.className}`}
            >
            <ArrowDownIcon className="h-8 w-8 md:h-16 md:w-16 animate-bounce hover:text-lime-500" />
          </button>
      </div>
    </main>
  );
}
