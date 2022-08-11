

export const Select = (props) => {
    const { labels, cb } = props

    return (
        <select onChange={cb} className="select" placeholder="Sort">
            {labels.map(option => <option key={option.value} value={option.label}>{option.label}</option>)}
        </select>
    )
}