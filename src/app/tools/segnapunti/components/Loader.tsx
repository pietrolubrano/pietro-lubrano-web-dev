import { Dispatch, FormEvent, SetStateAction, useEffect, useRef } from "react"

const Loader = ({
    playersNames,
    setPlayersNames,
    setStart,
} : {
    playersNames: string[],
    setPlayersNames: Dispatch<SetStateAction<string[]>>,
    setStart: Dispatch<SetStateAction<boolean | 'loading'>>,
}) => {

    useEffect(() => {
        setPlayersNames([])
    },[setPlayersNames])

    const inputRef = useRef<HTMLInputElement>(null)

    const addPlayer = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newArr = [...playersNames, inputRef.current?.value as string]
        setPlayersNames(newArr)
        if(inputRef.current){
            inputRef.current.value = ''
        }
    }

    const handleStartGame = () => {
        localStorage.setItem("playersNames", JSON.stringify(playersNames))
        setStart(true)
    }

return(
    <div className="container mx-auto bg-black">

        <div className="text-center w-full">
            <h4 className="font-bold uppercase mb-4">
                Aggiungi i giocatori
            </h4>
            <ul className="space-y-1 mb-4">
                {
                    playersNames.map(player => <li key={player}>
                        {player}
                    </li>)
                }
            </ul>
            <form onSubmit={addPlayer} className="mb-4">
                <input
                className="inline border-0 border-b-2 border-white bg-black py-1.5 text-white shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:border-lime-300 sm:text-sm sm:leading-6"
                ref={inputRef}
                type="text" />
                <button
                    className="inline border-2 border-b-2 px-2 font-bold text-3xl hover:border-lime-400 hover:text-lime-400 bg-black py-1.5 text-white shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:border-lime-300 sm:text-sm sm:leading-6"
                    >
                        +
                </button>
            </form>
            {
                playersNames[0] && <button
                    onClick={() => handleStartGame()}
                    className="inline border-2 border-b-2 p-4 font-bold text-3xl hover:border-lime-400 hover:text-lime-400 bg-black py-1.5 text-white shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:border-lime-300 sm:text-sm sm:leading-6"
                    >
                        START GAME
                </button>
            }
            
            </div>
        
        </div>
    )
}

export default Loader