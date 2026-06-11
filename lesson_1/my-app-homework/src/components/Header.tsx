import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="container header__inner">
                <span className="logo">Мой сайт</span>
                <nav className="nav">
                    <a href="#hero">Главная</a>
                    <a href="#main">Обо мне</a>
                    <a href="#footer">Контакты</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;