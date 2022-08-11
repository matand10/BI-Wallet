

export const TableButtons = (props) => {
    const { dataPerPage, totalData, onPaging } = props
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="paging-btn" dir="ltr">
            {pageNumbers.map(num => {
                return <button key={num} onClick={() => onPaging(num)}>{num}</button>
            })}
        </div>
    )
}