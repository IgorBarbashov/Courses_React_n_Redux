import React, { Component } from "react";

class Greetings extends Component {
    render() {
        return(
            <div>
                <h3>Добро пожаловать</h3>
                <p>Web CRUD-приложение над Strapi.io</p>
                <p>Помимо стандартных CRUD-функций реализовано следующее:</p>
                <ul><li>т.к. Strapi в своем интерфейсе позволяет создавать страницы с одинаковым slug, 
                в данной админке при операциях Create, Update введена проверка на уникальность slug
                по всем страницам</li>
                <li>так же осуществляется проверка на Create и Update страниц с пустым slug (это запрещено
                    т.к. slug используется как часть URL)</li>
                <li>с учетом того, что в родном интерфейсе Strapi или других сторонних админках возможно создание
                    страниц без slug или без name (а так же и без того и без другого), в текущей админке такие страницы
                    в навигационном меню представлены без активных ссылок</li>
                <li>если нет slug, страница отображается по name, если нет name - по id</li>
                <li>в административной части дана возможность исправить параметры таких страниц (кнопка [Edit])</li>
                </ul>
            </div>
        );
    }
}

export default Greetings;