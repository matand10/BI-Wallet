import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'


import { AiOutlineHome } from 'react-icons/ai'
import { AiFillPieChart } from 'react-icons/ai'


export const Menu = () => {
    return (
        <section className="sidebar-menu">
            <ul className="clean-list">
                <li>
                    <Link to="/">
                        <span><AiOutlineHome /></span>
                        <span><FormattedMessage id="dashboard" /></span>
                    </Link>
                </li>
                <li>
                    <Link to="/charts">
                        <span><AiFillPieChart /></span>
                        <span><FormattedMessage id="charts" /></span>
                    </Link>
                </li>
            </ul>
        </section>
    )
}