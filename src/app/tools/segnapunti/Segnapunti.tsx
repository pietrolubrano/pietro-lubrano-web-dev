"use client"

import { useEffect, useState } from "react"
import Loader from "./components/Loader"
import TableRow from "./components/TableRow"
import { Metadata } from "next"

export type PartitaData = number | undefined

export default function Segnapunti() {
    const [playersNames, setPlayersNames] = useState<string[]>([])
    const [partita, setPartita] = useState<[PartitaData[]]>([[]])
    const [start, setStart] = useState<boolean | 'loading' >('loading')

    useEffect(() => {
        const players = localStorage.getItem("playersNames")
        if(players){
            const partita = localStorage.getItem("partita")
            if(partita){
                setPartita(JSON.parse(partita))
            }
            setPlayersNames(JSON.parse(players))
            setStart(true)
        } else {
            setStart(false)
        }
    },[])

    const saveRecord = (rowIndex: number, valueIndex: number, value: number | undefined) => {
        const newArr: [PartitaData[]] = [...partita]
        newArr[rowIndex][valueIndex] = value
        setPartita(newArr)
        localStorage.setItem("partita", JSON.stringify(newArr))
    }

    const getSum = (colIndex: number) => {
        let sum = 0
        for (let index = 0; index < partita.length; index++) {
            const el = partita[index][colIndex]
            if(el){
                sum += el
            }
        }
        return sum
    }

    const addNewRow = () => {
        const newArr: PartitaData[] = playersNames.map(e => 0)
        const partitaCopy: [PartitaData[]] = [...partita]
        partitaCopy.push(newArr)
        localStorage.setItem("partita", JSON.stringify(partitaCopy))
        setPartita(partitaCopy)
    }

    const handleReset = () => {
        localStorage.removeItem("playersNames")
        localStorage.removeItem("partita")
        setPartita([[]])
        setStart(false)
    }

    if(start === 'loading'){
        return(
            'loading...'
        )
    }

    if(start){
        return(
            <div className="container relative bg-black mx-auto p-4">
                <button
                    className="right-0 float-end hover:border-lime-400 hover:text-lime-400"
                    onClick={() => handleReset()}>
                    ❌
                </button>
                <table className="w-full  table-fixed text-center mb-4">
                    <thead className="">
                        <tr>
                            {
                                playersNames.map(name => <th key={name} className="overflow-hidden px-2">{name}</th>)
                            }
                        </tr>
                    </thead>
                    <tbody>
                            {
                                partita.map((row, index) => <TableRow key={index} index={index} row={row} saveRecord={saveRecord} />)
                            }
                            <tr>
                                <td colSpan={playersNames.length} className="p-4 font-bold">
                                    Totale Punti
                                </td>
                            </tr>
                            <tr className="font-bold text-xl">
                                {
                                    partita[0] && playersNames.map(
                                        (name, rowIndex) => <td key={rowIndex} className="pt-4">{getSum(rowIndex)}</td>
                                    )
                                }
                            </tr>
                    </tbody>
                    
                </table>
                <div className="p-4">
                
                    <button
                        className="w-full bg-black p-4 border-2 hover:border-lime-400 hover:text-lime-400"
                        onClick={() => addNewRow()}
                    >
                        Aggiungi Riga
                    </button>
                        
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto">
            <Loader
                playersNames={playersNames}
                setPlayersNames={setPlayersNames}
                setStart={setStart} />
        </div>
    )
}
