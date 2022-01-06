import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module

import Img1 from "../../../../img/main-slider/2017-lexus-ls-460-2-960x550.png"
import Img2 from "../../../../img/main-slider/2016-Lexus-RX-350-BM-01-960x550.png"
import Img3 from "../../../../img/main-slider/bmw-3-series-sedan-wallpaper-1920x1200-05-960x550 1.png"
import Img4 from "../../../../img/main-slider/bmw-x6-2015-41-960x550.png"
import Img5 from "../../../../img/main-slider/elektromobil-3840x2160-elektromobil-17992 1.png"
import Img6 from "../../../../img/main-slider/luxury-sport-car-with-xenon-lights-front-view.png"
import Img7 from "../../../../img/main-slider/P14_0596_a4_rgb-1-960x550.png"
import Img8 from "../../../../img/main-slider/Porsche-Boxster-Wheels-8-960x550.png"
import Img9 from "../../../../img/main-slider/Porsche-Panamera-960x550.png"
import Img10 from "../../../../img/main-slider/zaudia5-004-960x550.png"


const Slider = () => {

  const imgWidth = 500;


  return (

    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{"clickable": true}}
        loop={true}
      >
        <SwiperSlide>
          <img width={imgWidth} src={Img1}/>
        </SwiperSlide>
        <SwiperSlide>
          <img width={imgWidth} src={Img2}/>
        </SwiperSlide>
        <SwiperSlide>
          <img width={imgWidth} src={Img3}/>
        </SwiperSlide>
        <SwiperSlide>
          <img width={imgWidth} src={Img4}/>
        </SwiperSlide>
        <SwiperSlide>
          <img width={imgWidth} src={Img5}/>
        </SwiperSlide>
        <SwiperSlide>
          <img width={imgWidth} src={Img6}/>
        </SwiperSlide>
        <SwiperSlide>
          <img width={imgWidth} src={Img7}/>
        </SwiperSlide>
        <SwiperSlide>
          <img width={imgWidth} src={Img8}/>
        </SwiperSlide>
        <SwiperSlide>
          <img width={imgWidth} src={Img9}/>
        </SwiperSlide>
        <SwiperSlide>
          <img width={imgWidth} src={Img10}/>
        </SwiperSlide>
      </Swiper>
      <h2>Slider</h2>
    </div>
  )
}

export default Slider;