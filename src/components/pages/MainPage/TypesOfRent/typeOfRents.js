import {useState} from "react";

const TypeOfRents = () => {

    const [isCard1Active, setCard1] = useState(false);
    const [isCard2Active, setCard2] = useState(false);
    const [isCard3Active, setCard3] = useState(false);

  return (
    <>
        <section className="TypesOfRent">
            <h3 className="TypesOfRent__title">Виды <br/> <span>Аренды</span></h3>
           <div className="TypesOfRent__wrapper">
               <div className="scene">
                   <div className={`card ${isCard1Active ? 'is-flipped' : null}`} >
                       <div className="card__face card__face-front card__face-first">
                           <button className="card__btn" onClick={()=>setCard1(!isCard1Active)}>С водителем</button>
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
                       <div className={`card ${isCard2Active ? 'is-flipped' : null}`} >
                           <div className="card__face card__face-front card__face-second">
                               <button className="card__btn" onClick={()=>setCard2(!isCard2Active)}>ДЛЯ ОСОБЫХ ЦЕЛЕЙ</button>
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
                       <div className={`card ${isCard3Active ? 'is-flipped' : null}`} >
                           <div className="card__face card__face-front card__face-third">
                               <button className="card__btn" onClick={()=>setCard3(!isCard3Active)}>БЕЗ ВОДИТЕЛЯ</button>
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