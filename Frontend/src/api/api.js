// import axios from 'axios'
//
// export const createNewExpense = async (data) => {
//     try {
//         const res = await axios.post('http://localhost:3000/expenses/add-expense', data)
//         return res.data
//     } catch (err) {
//         console.log(err)
//     }
//
// }
//
// export const getAllExpenses = async () => {
//     try {
//         const res = await axios.get('http://localhost:5200/expenses')
//         return res.data
//     } catch (err) {
//         console.log(err)
//     }
//
// }
//
// export const deleteExpense = async (id) => {
//     try {
//         const res = await axios.delete(`http://localhost:3000/expenses/delete-expense/${id}`)
//         return res.data
//     } catch (err) {
//         console.log(err)
//     }
//
// }
//
//
// export const createNewIncome = async (data) => {
//     try {
//         const res = await axios.post('http://localhost:3000/incomes/add-income', data)
//         return res.data
//     } catch (err) {
//         console.log(err)
//     }
//
// }
//
// export const getAllIncomes = async () => {
//     try {
//         const res = await axios.get('http://localhost:5200/incomes')
//         return res.data
//     } catch (err) {
//         console.log(err)
//     }
//
// }
//
// export const deleteIncomes = async (id) => {
//     try {
//         const res = await axios.delete(`http://localhost:3000/incomes/delete-income/${id}`)
//         return res.data
//     } catch (err) {
//         console.log(err)
//     }
//
// }
