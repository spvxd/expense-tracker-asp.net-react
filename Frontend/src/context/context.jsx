import React, {useContext, useState} from "react"
import axios from 'axios'


const GlobalContext = React.createContext()


export const GlobalProvider = ({children}) => {
    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [transactions, setTransactions] = useState([])
    const [error, setError] = useState(null)

    const createNewExpense = async (data) => {
        try {

            console.log(data)
            const res = await axios.post('http://localhost:5200/expenses', data)
            await getAllExpenses()

        } catch (err) {
            console.log(err)
        }

    }

    const getAllExpenses = async () => {
        try {
            const res = await axios.get('http://localhost:5200/expenses')
            setExpenses(res.data)

        } catch (err) {
            console.log(err)
        }

    }

    const deleteExpense = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:5200/expenses/${id}`)
            await getAllExpenses()

        } catch (err) {
            console.log(err)
        }

    }


    const createNewIncome = async (data) => {
        try {
            const res = await axios.post('http://localhost:5200/incomes', data)
            await getAllIncomes()
        } catch (err) {
            console.log(err)
        }

    }

    const getAllIncomes = async () => {
        try {
            const res = await axios.get('http://localhost:5200/incomes')
            setIncomes(res.data)
        } catch (err) {
            console.log(err)
        }

    }

    const deleteIncomes = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:5200/incomes/${id}`)
            await getAllIncomes()
        } catch (err) {
            console.log(err)
        }

    }


    const totalIncomes = () => {
        let totalIncome = 0;
        incomes.forEach((income) => {
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }

    const totalExpenses = () => {
        let totalIncome = 0;
        expenses.forEach((income) => {
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }
    const totalBalance = () => {
        return totalIncomes() - totalExpenses()
    }
    const allTransactions = async () => {
        try{
            const res = await axios.get(`http://localhost:5200/transactions`)
            setTransactions(res.data)
            console.log(res.data)
        }
        catch (err) {
            console.log(err)
        }
    }


    return (
        <GlobalContext.Provider value={{
            incomes,
            expenses,
            transactions,
            totalIncomes,
            createNewExpense,
            getAllExpenses,
            deleteExpense,
            createNewIncome,
            getAllIncomes,
            deleteIncomes,
            totalExpenses,
            totalBalance,
            allTransactions,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}