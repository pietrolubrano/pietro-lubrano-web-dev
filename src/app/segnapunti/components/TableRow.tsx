import { PartitaData } from "../page";

interface IRow {
    index: number,
    row: PartitaData[],
    saveRecord: (rowIndex: number, valueIndex: number, value: number | undefined) => void,
}

interface ITableData extends IRow {
    value: PartitaData
    valueIndex: number
}

const TableData = (props: ITableData) => {

    const {
        index: rowIndex,
        saveRecord,
        value,
        valueIndex
    } = props

    const handleChange = (value: string) => {
        if(value){
            const number = parseInt(value)
            if(number || number === 0){
                saveRecord(rowIndex, valueIndex, number)
            }
        } else {
            saveRecord(rowIndex, valueIndex, undefined)
        }
    }

    const handleBlur = (value: string) => {
        if(!value){
            saveRecord(rowIndex, valueIndex, 0)
        }
    }

    return (
        <td>
            <input
                type="number"
                className="text-center inline border-0 border-white w-full bg-black py-1.5 text-white shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-b-2 focus:ring-0 focus:ring-inset focus:border-lime-300 sm:text-sm sm:leading-6"
                value={value !== undefined ? value : ''}
                onChange={(e) => handleChange(e.target.value)}
                onFocus={(e) => e.target.select()}
                onBlur={(e) => handleBlur(e.target.value)}
            />
        </td>
    )
}

export default function TableRow(props: IRow) {

    const { row } = props

    return (
        <tr>
            {
                row.map((value, valueIndex) => <TableData key={valueIndex} {...props} value={value} valueIndex={valueIndex} />)
            }
        </tr>
    )
}
