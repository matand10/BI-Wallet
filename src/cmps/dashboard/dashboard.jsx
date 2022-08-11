import { useState } from "react"
import { Main } from "./main"

export const Dashboard = (props) => {
    const { language } = props
    const [filterBy, setFilterBy] = useState({})

    return (
        <section className="dashboard-content">
            <Main setFilterBy={setFilterBy} filterBy={filterBy} language={language} />
        </section>
    )
}