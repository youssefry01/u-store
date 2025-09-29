import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../index.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import netflix from '../../assets/netflix/cover.png';
import steam from '../../assets/steam/cover.png';
import amazon from '../../assets/amazon/cover.png';
import apple from '../../assets/apple/cover.png';
import { Link } from 'react-router-dom';
import "../../css/custom-swiper-bullet.css";

export default function App() {

  return (
    <div className='flex h-1/4 lg:h-1/3 my-10 drop-shadow-lg select-none'>
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-2xl"
      >
        <SwiperSlide>
          <Link to='/netflix'> <img src={netflix} alt='netflix' className=''/> </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/steam'> <img src={steam} alt='steam' className=''/> </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/amazon'> <img src={amazon} alt='amazon' className=''/> </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/apple'> <img src={apple} alt='apple' className=''/> </Link>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
  