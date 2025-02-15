// src/components/Sidebar.js

import React from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faChartBar,
    faWallet,
    faCoins,
    faShoppingCart,
    faSignOutAlt,
    faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";

// Контейнер для боковой панели
const SidebarContainer = styled.div`
  width: 240px;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 10px;
  border-right: 1px solid #e0e0e0;
`;

// Стиль для профиля пользователя
const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

// Аватарка пользователя
const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e0e0e0;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Информация о пользователе
const UserInfo = styled.div`
  font-size: 14px;
  color: #333;
`;

// Стиль для имени пользователя
const UserName = styled.div`
  font-weight: bold;
`;

// Список навигации
const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

// Элемент навигации
const NavItem = styled.li`
  padding: 10px 0;
  display: flex;
  align-items: center;
  color: #333;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #007bff;
  }

  & svg {
    margin-right: 10px;
  }
`;

// Стиль для кнопки выхода
// Стиль для кнопки выхода
// Стиль для кнопки выхода
const SignOutButton = styled.button`
  background: none;
  border: none;
  color: #333;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.2s;
  padding: 10px 0;
  margin-left: 0px; // Добавьте этот стиль

  &:hover {
    color: #007bff;
  }

  & svg {
    margin-right: 10px;
  }
`;

const SignOutContainer = styled.div`
  padding-left: 10px; // То же значение, что и у других элементов
  display: flex;
  align-items: center;
`;

const Sidebar = () => {
    return (
        <SidebarContainer>
            <div>
                <Profile>
                    <Avatar>
                        <FontAwesomeIcon icon={faUserCircle} size="2x" color="#333"/>
                    </Avatar>
                    <UserInfo>
                        <UserName>Alex</UserName>
                        <div>Ваши деньги</div>
                    </UserInfo>
                </Profile>
                <NavList>
                    <NavLink to={'/'}>
                        <NavItem>
                            <FontAwesomeIcon icon={faChartBar}/>
                            Главная
                        </NavItem>
                    </NavLink>
                    <NavLink to={'/transactions'}>
                        <NavItem>
                            <FontAwesomeIcon icon={faWallet}/>
                            Все транзакции
                        </NavItem>
                    </NavLink>

                    <NavLink to={'/incomes'}>
                        <NavItem>
                            <FontAwesomeIcon icon={faCoins}/>
                            Прибыль
                        </NavItem>
                    </NavLink>
                    <NavLink to={'/expense'}>
                        <NavItem>
                            <FontAwesomeIcon icon={faShoppingCart}/>
                            Расходы
                        </NavItem>
                    </NavLink>
                </NavList>
            </div>
            <SignOutContainer>
                <SignOutButton>
                    <FontAwesomeIcon icon={faSignOutAlt}/>
                    Выйти
                </SignOutButton>
            </SignOutContainer>
        </SidebarContainer>

    );
};

export default Sidebar;
