import { FormattedMessage } from 'react-intl'

export const InputBox = (props) => {
    const { text, type, cb } = props

    const handleChange = ({ target }) => {
        let { value } = target
        value = type === 'number' ? parseInt(value) : value
        cb((prevState) => ({ ...prevState, [text]: value }))
    }

    return (
        <div className="input-box">
            <span><FormattedMessage id={text} /></span>
            <input type={type} placeholder={`Enter a ${text}`} onChange={handleChange} />
        </div>
    )
}