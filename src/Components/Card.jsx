import React from 'react'

const Card = () =>(
<div className="card">
    <div className="card__name">
        <div className="card__logo"></div>
        <div className="card__indicator">
            Балтия плюс
        </div>
    </div>

    <div className="card__info">
        <p>Координаты: 57.072552, 27.945672</p>
        <p>Адрес: Пыталово, Псковская область, 181410</p>
        <p>Координаты: 57.072552, 27.945672</p>
        <p>E-mail: info@baltiaplus.ru</p>
        <p>
            <i class="fab fa-facebook" aria-hidden="true"></i>
            <i class="fab fa-youtube" aria-hidden="true"></i>
            <i class="fab fa-whatsapp-square" aria-hidden="true"></i>
            <i class="fab fa-instagram-square" aria-hidden="true"></i>
        </p>
    </div>
    <div className="card__map">
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A0bf67d0678d1651ac9884480afeaa541528dc28b8d4b3f9dee6b52f156c53acf&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
    </div>
</div>
)

export default Card 