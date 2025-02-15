// src/components/TransactionCard.js

import React from "react";
import styled from "styled-components";

// Стиль для карточки транзакции
const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

// Название транзакции
const TransactionName = styled.div`
  font-size: 16px;
  color: #333;
`;

// Сумма транзакции
const TransactionAmount = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #ff4c4c;
`;

const TransactionCard = ({ name, amount }) => {
    return (
        <CardContainer>
            <TransactionName>{name}</TransactionName>
            <TransactionAmount>{amount}</TransactionAmount>
        </CardContainer>
    );
};

export default TransactionCard;
