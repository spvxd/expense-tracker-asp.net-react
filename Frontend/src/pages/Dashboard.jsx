import React, { useEffect } from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar.jsx";
import { useGlobalContext } from "../context/context.jsx";
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    RadialLinearScale
} from 'chart.js';
import { Line,Doughnut } from 'react-chartjs-2';

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    RadialLinearScale
);

const DashboardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: #f8f9fa;
    flex: 1;
`;

const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding-right: 20px;
`;

const RightSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding-left: 20px;
`;

const GraphPlaceholder = styled.div`
    height: 400px;
    background-color: #eaeaea;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    color: #666;
    margin-bottom: 20px;
`;

const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Card = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
`;

const CardTitle = styled.h3`
    font-size: 18px;
    color: #333;
    margin-bottom: 10px;
    text-align: center;
`;

const CardValue = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: ${(props) => props.color || "#333"};
`;

const Dashboard = () => {
    const {
        incomes,
        expenses,
        getAllIncomes,
        getAllExpenses,
        totalIncomes,
        totalExpenses,
        totalBalance,
        allTransactions
    } = useGlobalContext();

    useEffect(() => {
        getAllExpenses();
        getAllIncomes();
        allTransactions();
    }, []);

    // Функция для суммирования значений на одинаковые даты
    const sumByDate = (data) => {
        return data.reduce((acc, item) => {
            if (!acc[item.date]) {
                acc[item.date] = 0;
            }
            acc[item.date] += item.amount;
            return acc;
        }, {});
    };

    const groupedIncomes = sumByDate(incomes);
    const groupedExpenses = sumByDate(expenses);

    // Функция для объединения дат доходов и расходов в единый массив
    const mergeDates = () => {
        const allDates = [
            ...new Set([...Object.keys(groupedIncomes), ...Object.keys(groupedExpenses)])
        ];
        allDates.sort((a, b) => new Date(a) - new Date(b)); // Сортируем даты
        return allDates;
    };

    const mergedDates = mergeDates();

    // Подготовка данных для графика доходов
    const incomeData = mergedDates.map(date => groupedIncomes[date] || null);

    // Подготовка данных для графика расходов
    const expenseData = mergedDates.map(date => groupedExpenses[date] || null);

    const graph = {
        labels: mergedDates, // Все уникальные даты
        datasets: [
            {
                label: 'Доходы',
                data: incomeData,
                backgroundColor: 'green',
                borderColor: 'green',
                fill: false,
                tension: 0.4,
                spanGaps: true // Соединять пропуски
            },
            {
                label: 'Расходы',
                data: expenseData,
                backgroundColor: 'red',
                borderColor: 'red',
                fill: false,
                tension: 0.4,
                spanGaps: true // Соединять пропуски
            }
        ]
    };
    const processData = (expenses) => {
        const categoryMap = {};

        expenses.forEach((expense) => {
            if (categoryMap[expense.category]) {
                categoryMap[expense.category] += expense.amount;
            } else {
                categoryMap[expense.category] = expense.amount;
            }
        });

        const labels = Object.keys(categoryMap);
        const data = Object.values(categoryMap);

        return {labels, data};
    };

    const {labels, data} = processData(expenses);
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Expenses',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <>
            <Sidebar></Sidebar>
            <DashboardContainer>
                <LeftSection>
                    <GraphPlaceholder>
                        <Line data={graph}/>
                    </GraphPlaceholder>
                    <StatsContainer>
                        <Card>
                            <CardTitle>Общая прибыль</CardTitle>
                            <CardValue color="#28a745">{totalIncomes()} руб.</CardValue>
                        </Card>
                        <Card>
                            <CardTitle>Общие траты</CardTitle>
                            <CardValue color="#dc3545">{totalExpenses()} руб.</CardValue>
                        </Card>
                        <Card>
                            <CardTitle>Разница</CardTitle>
                            <CardValue color="#28a745">{totalBalance()} руб.</CardValue>
                        </Card>
                    </StatsContainer>
                </LeftSection>

                <RightSection>
                    <GraphPlaceholder>
                        <Doughnut data={chartData}/>
                    </GraphPlaceholder>
                    <Card style={{marginTop: "20px"}}>
                        <CardTitle>Прибыль</CardTitle>
                        <CardValue color="#333">
                            <div>Минимальная: {incomes.length ?
                                Math.min(...incomes.map(item => item.amount)) : 0} руб.
                            </div>
                            <div>Максимальная: {incomes.length ? Math.max(...incomes.map(item => item.amount)) : 0} руб.</div>
                        </CardValue>
                    </Card>
                    <Card style={{marginTop: "20px"}}>
                        <CardTitle>Траты</CardTitle>
                        <CardValue color="#333">
                            <div>Минимальные: {expenses.length ? Math.min(...expenses.map(item => item.amount)) : 0} руб.</div>
                            <div>Максимальные: {expenses.length ? Math.max(...expenses.map(item => item.amount)) : 0} руб.</div>
                        </CardValue>
                    </Card>
                </RightSection>
            </DashboardContainer>
        </>
    );
};

export default Dashboard;
