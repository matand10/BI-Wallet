import { utilService } from "../../services/util.service"

export const Search = (props) => {
    const { setFilterBy } = props

    const handleChange = ({ target }) => {
        const value = target.value
        const update = utilService.debounce((value) => {
            setFilterBy(prevState => ({ ...prevState, text: value }))
        }, 1000)
        update(value)
    }

    return (
        <form className="search-by-form">
            <input type="text" placeholder="Search" onChange={handleChange} />
        </form>
    )
}