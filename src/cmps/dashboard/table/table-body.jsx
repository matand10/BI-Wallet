import { utilService } from "../../../services/util.service"
import { AiOutlineDelete } from 'react-icons/ai'


export const TableBody = (props) => {
    const { data, onRemoveData } = props

    const getTime = (time) => {
        return utilService.getExactDate(time)
    }

    const onRemove = (dateId) => {
        onRemoveData(dateId)
    }

    return (
        <tbody>
            {data.map((row, idx) => {
                return (
                    <tr key={idx}>
                        <td>{getTime(row.date)}</td>
                        <td>{row.code}</td>
                        <td>{row.description}</td>
                        <td><span className={`badge ${row.income?.length ? '' : 'income'}`}>{utilService.ILSformat(row.income)}</span></td>
                        <td><span className={`badge ${row.expense?.length ? '' : 'expense'}`}>{utilService.ILSformat(row.expense)}</span></td>
                        <td style={{ color: '#027581', fontWeight: 600 }}>{utilService.ILSformat(row.balance)}</td>
                        <td className="table-row-modal"><span onClick={() => onRemove(row._id)}><AiOutlineDelete /></span></td>
                    </tr>
                )
            })}
        </tbody>
    )
}