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
import forDateFrame from "../../../img/specialPuproses/date_frame.png"
import forPhotoFrame from "../../../img/specialPuproses/photo_frame.png"
import forBusiness from "../../../img/specialPuproses/business_frame.png"
import rentForFrame from "../../../img/specialPuproses/rent-for_frame.png"


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
             <h2 className="airport__title">трансфер <br/> <span>ИЗ АЭРОПОРТА</span></h2>
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



        <section className="forDate">
            <h2 className="forDate__title">для <br/> <span>свиданий</span></h2>
            <div className="forDate__wrapper">
                <div className="forDate__img"><img src={forDateFrame} alt="ForDate" className="businessMeet__frame"/></div>
                <div className="forDate__descr">
                    <p className="forDate__text">В нашем мире очень много обыденности, но всегда есть возможность удивить свою вторую половинку чем то новым.
                        Если Вам надоели походы в кино с однообразными фильмами и Вы устали от простых прогулок по паркам. Наша компания предлагает Вам услугу аренды автомобиля для свиданий. Вы сможете выбрать красивейший автомобиль и просто покататься по городу или выехать на природу со своей второй половинкой.
                    </p>
                    <ul className="forDate__list">
                        <h4 className="purposes__list_title">В стоимость услуги входит:
                        </h4>
                        <li className="purposes__list_item">Подача автомобиля в указанное Вами время и место при бронировании</li>
                        <li className="purposes__list_item">4 часа аренды автомобиля</li>
                        <li className="purposes__list_item">Компания предоставит Вам маршрут по пути следования которого Вы увидите самые красивые и интересные места нашего города сможете там остановится и сделать памятные фотографии</li>
                        <li className="purposes__list_item"> С персональным менеджером Вы сможете обсудить дополнительные услуги такие как: заказ цветов, прохладительных напитков или фруктов</li>
                    </ul>
                </div>
            </div>
            {/*SLIDER PLACE*/}
        </section>


        <section className="forPhoto">
            <h2 className="forPhoto__title">для <br/> <span>фото и видео съемок</span></h2>
            <div className="forPhoto__wrapper">
                <div className="forPhoto__descr">
                    <p className="forPhoto__text">Красивую фотосессию можно сделать не только в студийных условиях. Но и в интересных локациях нашего города и Ленинградской области. Мы можем предоставить любой автомобиль из нашего автопарка для проведения фото и видеосъемок.</p>
                    <ul className="forPhoto__list">
                        <h4 className="purposes__list_title">В стоимость услуги входит:
                        </h4>
                        <li className="purposes__list_item">Подача автомобиля с водителем в указанную локацию</li>
                        <li className="purposes__list_item"> 2 часа аренды автомобиля для фото и видеосъемок
                            На данную услугу можно приобрести подарочный сертификат
                        </li>
                    </ul>
                </div>
                <div className="forPhoto__img"><img src={forPhotoFrame} alt="forPhoto" className="forPhoto__frame"/></div>
            </div>

            {/*SLIDER PLACE*/}
        </section>


        <section className="forBusiness">
            <h2 className="forBusiness__title">для <br/> <span>Бизнеса</span></h2>
            <div className="forBusiness__wrapper">
                <div className="forBusiness__img"><img src={forBusiness} alt="ForBusiness" className="forBusiness__frame"/></div>
                <div className="forBusiness__descr">
                    <ul className="forBusiness__list">
                        <p className="forBusiness__list_title">Простота, удобство и комфорт
                        </p>
                        <li className="purposes__list_item">Вам не нужно покупать машину и страховой полис</li>
                        <li className="purposes__list_item">В личном кабинете Вы сможете контролировать использования автомобиля своими сотрудниками</li>
                        <li className="purposes__list_item">Вы самостоятельно выставляете лимиты своим сотрудникам</li>
                        <li className="purposes__list_item">Наша система позволяет построить трекер движения автомобиля</li>
                        <li className="purposes__list_item">Без суточного лимита по пробегу</li>
                        <li className="purposes__list_item">Не нужно думать о ТО и замене резины</li>
                        <li className="purposes__list_item">Техническая поддержка <span>24/7</span></li>
                        <li className="purposes__list_item">Возможность передачи права управления автомобилем</li>

                    </ul>
                    <p className="forBusiness__details"><span>*</span>Подробнее об условиях Вас ознакомит персональный менеджер</p>
                </div>
            </div>
            {/*SLIDER PLACE*/}
        </section>



        <section className="rentFor">
            <h2 className="rentFor__title"><span>Аренда автомобиля для ....</span></h2>
            <div className="rentFor__wrapper">
                <div className="rentFor__descr">
                    <ul className="rentFor__list">
                        <li className="purposes__list_item">Вы сами решаете куда и когда поехать</li>
                        <li className="purposes__list_item">Круглосуточная подача автомобиля по территории СПб и ЛО</li>
                        <li className="purposes__list_item">Не нужно думать о ТО и замене резины</li>
                        <li className="purposes__list_item">Техническая поддержка 24/7</li>
                        <li className="purposes__list_item">Возможность замены автомобиля под Ваши планы в рамках действующего договора</li>
                        <li className="purposes__list_item">Возможность передачи права управления автомобилем</li>
                    </ul>
                        <p className="forBusiness__details"><span>*</span>Подробнее об условиях Вас ознакомит персональный менеджер</p>
                </div>
                <div className="rentFor__img"><img src={rentForFrame} alt="rentFor" className="rentFor__frame"/></div>
            </div>

            {/*SLIDER PLACE*/}
        </section>
    </>

  )
}

export default SpecialPurposesPage;