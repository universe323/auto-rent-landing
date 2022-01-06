const TypeOfRents = () => {
  return (
    <>
        <section className="TypesOfRent">
            <h3 className="TypesOfRent__title">Виды <br/> <span>Аренды</span></h3>
           <div className="TypesOfRent__wrapper">
               <div className="scene">
                   <div className="card">
                       <div className="card__face card__face-front card__face-first">
                           <button className="card__btn">С водителем</button>
                       </div>
                       <div className="card__face card__face-back">
                           <p>Вы можете арендовать
                               автомобиль для того, чтобы роскошно встретить любимого человека из аэропорта или свозить его на свидания.
                               Провести незабываемую фотосессию. Или элегантно приехать на бизнес встречу. Устроить романтическое свидание по ночному городу или арендовать автомобиль на свадьбу.
                           </p>
                           <button className="card__btn card__btn-back">ЗАКАЗАТЬ МАШИНУ</button>
                       </div>
                   </div>
               </div>
                   <div className="scene">
                       <div className="card">
                           <div className="card__face card__face-front card__face-second">
                               <button className="card__btn">ДЛЯ ОСОБЫХ ЦЕЛЕЙ</button>
                           </div>
                           <div className="card__face card__face-back">
                               <p>Вы можете арендовать
                                   автомобиль для того, чтобы роскошно встретить любимого человека из аэропорта или свозить его на свидания.
                                   Провести незабываемую фотосессию. Или элегантно приехать на бизнес встречу. Устроить романтическое свидание по ночному городу или арендовать автомобиль на свадьбу.
                               </p>
                               <button className="card__btn card__btn-back">ЗАКАЗАТЬ МАШИНУ</button>
                           </div>
                       </div>
                   </div>
                   <div className="scene">
                       <div className="card">
                           <div className="card__face card__face-front card__face-third">
                               <button className="card__btn">БЕЗ ВОДИТЕЛЯ</button>
                           </div>
                           <div className="card__face card__face-back">
                               <p>Вы можете арендовать
                                   автомобиль для того, чтобы роскошно встретить любимого человека из аэропорта или свозить его на свидания.
                                   Провести незабываемую фотосессию. Или элегантно приехать на бизнес встречу. Устроить романтическое свидание по ночному городу или арендовать автомобиль на свадьбу.
                               </p>
                               <button className="card__btn card__btn-back">ЗАКАЗАТЬ МАШИНУ</button>
                           </div>
                       </div>
                   </div>
           </div>

        </section>

    </>
  )
}

export default TypeOfRents;