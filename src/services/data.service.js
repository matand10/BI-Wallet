import { storageService } from "./async-storage.service"
const STORAGE_KEY = 'bank'

export const dataService = {
    query,
    save,
    remove,
    clearTable,
    getLabels,
    getLanguageLabels,
    calculateBalance
}

async function query(filterBy) {
    try {
        return await storageService.query(STORAGE_KEY, filterBy)
    } catch (err) {
        throw err
    }
}

async function remove(dataId) {
    try {
        return await storageService.remove(STORAGE_KEY, dataId)
    } catch (err) {
        throw err
    }
}

async function clearTable() {
    try {
        return await storageService.removeAll(STORAGE_KEY)
    } catch (err) {
        throw err
    }
}

async function save(data) {
    var savedData
    if (data._id) {
        savedData = await storageService.put(STORAGE_KEY, data)
    } else {
        savedData = await storageService.post(STORAGE_KEY, data)
    }
    return savedData
}

function getLabels() {
    return [
        {
            value: 1,
            label: 'Sort by..'
        },
        {
            value: 2,
            label: 'Expenses'
        },
        {
            value: 3,
            label: 'Income'
        },
        {
            value: 4,
            label: 'Balance'
        },
        {
            value: 5,
            label: 'Date'
        },
    ]
}

function getLanguageLabels() {
    return [
        {
            value: 1,
            label: 'English'
        },
        {
            value: 2,
            label: 'עברית'
        },
    ]
}

function calculateBalance(data) {
    return data.reduce((acc, obj) => {
        if (typeof obj.income === 'number') {
            if (acc.income) acc.income += obj.income
            else acc.income = obj.income
        }
        if (typeof obj.expense === 'number') {
            if (acc.expenses) acc.expenses += obj.expense
            else acc.expenses = obj.expense
        }
        return acc
    }, {})
}