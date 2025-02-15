import Sidebar from "../components/Sidebar.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect} from "react";
import styled from "styled-components";
import {useGlobalContext} from "../context/context.jsx";


const IncomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f9f9f9;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

const TotalIncome = styled.div`
  font-size: 24px;
  color: #00a300;
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const IncomeForm = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  flex: 1;
  max-width: 400px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const AddIncomeButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #ff4757;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e84357;
  }
`;

const IncomeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 2;
  max-width: calc(100% - 400px);
  max-height: 600px; /* Fixed height for scrolling */
  overflow-y: auto; /* Enable vertical scrolling */
  padding-right: 10px; /* To ensure scrollbar does not overlay the list */

  &::-webkit-scrollbar {
    width: 8px; /* Scrollbar width */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ddd; /* Scrollbar thumb color */
    border-radius: 4px; /* Rounded scrollbar thumb */
  }
`;

const IncomeItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const IncomeInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const IconWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 50%;
`;

const IncomeDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const IncomeTitle = styled.h3`
  font-size: 20px;
  color: #333;
  margin-bottom: 5px;
`;


const IncomeDescription = styled.p`
  font-size: 17px;
  color: #666;
  margin-top: 0;
  margin-bottom: 5px;
`;

const IncomeAmount = styled.div`
  font-size: 18px;
  color: #333;
`;

const DeleteButton = styled.button`
  border: none;
  background: transparent;
  color: #ff4757;
  cursor: pointer;

  &:hover {
    color: #e84357;
  }
`;


const Transactions = () => {
    const {
        expenses,
        createNewExpense,
        getAllExpenses,
        deleteExpense,
        totalExpenses,
        allTransactions,
        transactions
    } = useGlobalContext()
    useEffect(() => {
        allTransactions()
    }, []);
    return (
        <>
            <Sidebar/>
            <IncomePageContainer>
                <Header>
                    <Title>Все транзакции</Title>
                </Header>

                <IncomeList>
                    {transactions.map((item) => (
                        <IncomeItem key={item.id}>
                            <IncomeInfo>
                                <IconWrapper>
                                    <FontAwesomeIcon icon={faGlobe} color="#007bff"/>
                                </IconWrapper>
                                <IncomeDetails>
                                    <IncomeTitle>Название: {item.title}</IncomeTitle>
                                    <IncomeDescription>Категория: {item.category}</IncomeDescription>
                                    <IncomeDescription>
                                        {
                                            item.type === 'expense' ? <>Потрачено: </> : <>Получено: </> }

                                         {item.amount} руб. • Дата: {item.date} • Описание: {item.description}
                                    </IncomeDescription>
                                </IncomeDetails>
                            </IncomeInfo>

                        </IncomeItem>
                    ))}
                </IncomeList>
            </IncomePageContainer>

        </>
    )
}
export default Transactions;