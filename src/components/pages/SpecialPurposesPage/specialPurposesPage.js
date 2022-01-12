import airportIcon from "../../../icons/special_purpose/airport_btn.svg"
import businessMeetIcon from "../../../icons/special_purpose/business-meet_btn.svg"
import weddingIcon from "../../../icons/special_purpose/wedding_btn.svg"
import dateIcon from "../../../icons/special_purpose/date_btn.svg"
import photoIcon from "../../../icons/special_purpose/photo_btn.svg"
import business from "../../../icons/special_purpose/business_btn.svg"
import rentFor from "../../../icons/special_purpose/rent-for_btn.svg"
import airportFrame from "../../../img/specialPuproses/airport_frame.png"
import businessFrame from "../../../img/specialPuproses/business-meet_frame.png"
import weddingFrame from "../../../img/specialPuproses/wedding_frame.png"


const SpecialPurposesPage = () => {
  return(
    <>
        <section className="purposes">
            <h2 className="purposes__title">АРЕНДА АВТОМОБИЛЯ <br/> <span>ДЛЯ ОСОБЫХ ЦЕЛЕЙ</span></h2>
            <div className="purposes__buttons">
                <button className="purposes__buttons_item"><img src={airportIcon} alt="From airport" className="btn__icon"/>ТРАНСФЕР</button>
                <button className="purposes__buttons_item"><img src={businessMeetIcon} alt="BusinessMeeting" className="btn__icon"/>бизнес встречи</button>
                <button className="purposes__buttons_item"><img src={weddingIcon} alt="ForWedding" className="btn__icon"/>для свадьбы</button>
                <button className="purposes__buttons_item"><img src={dateIcon} alt="For dates" className="btn__icon"/>для свиданий</button>
                <button className="purposes__buttons_item"><img src={photoIcon} alt="For Photo and Video" className="btn__icon"/>фото и видео съемка</button>
                <button className="purposes__buttons_item"><img src={business} alt="For business" className="btn__icon"/>бизнес</button>
                <button className="purposes__buttons_item"><img src={rentFor} alt="Rent For" className="btn__icon"/>Аренда для...</button>
                <button className="purposes__buttons_item purposes__buttons_order">ЗАКАЗАТЬ</button>
            </div>
        </section>





        <section className="airport">
             <h2 className="airport__title">АРЕНДА АВТОМОБИЛЯ <br/> <span>ИЗ АЭРОПОРТА</span></h2>
             <div className="airport__wrapper">
                 <ul className="purposes__list">
                     <h4 className="purposes__list_title">В стоимость услуги входит:
                     </h4>
                     <li className="purposes__list_item">Встреча в зоне ожидания с именной табличкой</li>
                     <li className="purposes__list_item">Подача автомобиля с персональным водителем в аэропорт</li>
                     <li className="purposes__list_item">Погрузка багажа в автомобиль</li>
                     <li className="purposes__list_item">Вы заранее можете обсудить весь маршрут и выразить дополнительные пожелания к поездке с персональным менеджером</li>
                     <li className="purposes__list_item">В стоимость услуги входит 3 часа аренды автомобиля</li>
                 </ul>
                 <div className="airport__img"><img src={airportFrame} alt="airport" className="airport__frame"/></div>
             </div>

            {/*SLIDER PLACE*/}
        </section>




        <section className="businessMeet">
            <h2 className="businessMeet__title">для <br/> <span>бизнес- встреч</span></h2>
            <div className="businessMeet__wrapper">
                <div className="businessMeet__img"><img src={businessFrame} alt="airport" className="businessMeet__frame"/></div>
                <div className="businessMeet__quote">
                    <p>Согласитесь, одна встреча способна перевернуть всю жизнь.</p> <br/>
                    <span>(Иоганн В. Гёте)</span>
                </div>

                <div className="businessMeet__descr">
                    <p className="businessMeet__text">Порой исход деловой встречи может решить каким образом Вы на ней появитесь, приехав на встречу на дорогом автомобиле с личным водителем произведет серьезное впечатления на Ваших партнеров
                    </p>
                    <ul className="businessMeet__list">
                        <h4 className="purposes__list_title">В стоимость услуги входит:
                        </h4>
                        <li className="purposes__list_item">Подача автомобиля с личным водителем за 15 минут до указанного Вами время при бронировании</li>
                        <li className="purposes__list_item"> 2 часа аренды автомобиля
                        </li>
                    </ul>
                </div>
            </div>
            {/*SLIDER PLACE*/}
        </section>

        <section className="wedding">
            <h2 className="wedding__title">для <br/> <span>Свадьбы</span></h2>
            <div className="wedding__wrapper">
                <div className="wedding__descr">
                    <p className="wedding__text">Каждая свадьба — уникальное знаменательное событие в жизни любой пары.
                        Наша компания предоставляет широкий выбор автомобилей от классических седанов до ярких спорткаров.
                    </p>
                    <ul className="wedding__list">
                        <h4 className="purposes__list_title">В стоимость услуги входит:
                        </h4>
                        <li className="purposes__list_item">Подача автомобиля с личным водителем в указанное Вами время при бронировании</li>
                        <li className="purposes__list_item"> 3 часа аренды автомобиля</li>
                        <li className="purposes__list_item"> 2 бокала и замечательное игристое шампанское которым Вы сможете наслаждаться во время Вашей незабываемой поездки.</li>
                    </ul>
                </div>
                <div className="wedding__img"><img src={weddingFrame} alt="wedding" className="wedding__frame"/></div>
            </div>

            {/*SLIDER PLACE*/}
        </section>

    </>

  )
}

export default SpecialPurposesPage;