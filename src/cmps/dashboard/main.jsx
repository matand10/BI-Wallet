import { useState, useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import { Outlet } from 'react-router-dom'

import { Overview } from './overview'
import { Panel } from './panel'

import { showSuccessMsg } from '../../services/event-bus.service'
import { useEffectUpdate } from '../../hook/useEffectUpdate'
import { dataService } from '../../services/data.service'


export const Main = (props) => {
    const { setFilterBy, filterBy, language } = props
    const [excelData, setExcelData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (excelData) setLoading(false)
        loadData()
    }, [])

    useEffectUpdate(() => {
        loadData(filterBy)
    }, [filterBy?.text, filterBy?.sort, filterBy?.rev])

    const loadData = async (filterBy) => {
        const data = await dataService.query(filterBy)
        if (!data?.length) return setLoading(true)
        setLoading(false)
        setExcelData(data)
    }

    const onRemoveData = async (dateId) => {
        const data = await dataService.remove(dateId)
        setExcelData(data)
        showSuccessMsg('Deleted successfully')
    }

    const onAddData = async (data) => {
        const savedData = await dataService.save(data)
        setExcelData(savedData)
        showSuccessMsg('Added successfully')
    }

    const onRemoveTable = async () => {
        var data
        const res = window.confirm('Are you sure?')
        if (res) {
            data = await dataService.clearTable() || null
            setExcelData(data)
            setLoading(true)
        }
    }

    return (
        <section className="main-content">
            <Overview data={excelData} />
            <Panel setExcelData={setExcelData} setLoading={setLoading} setFilterBy={setFilterBy} />

            {loading && <div className="loading-data">
                <h1><FormattedMessage id={"upload-data"} /></h1>
            </div>}

            {excelData && !loading && <Outlet context={{
                excelData, language,
                loadData, setFilterBy,
                onRemoveData, onAddData,
                onRemoveTable, setExcelData
            }} />}
        </section>
    )
}