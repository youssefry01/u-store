import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../index.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import valorant from '../../assets/valorant/Bundle.jfif';
import apex from '../../assets/apex/ApexCoins.jpg';
import lol from '../../assets/league-of-legends/lolCover.png';
import steam from '../../assets/steam/Steam2.png';
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
          <Link to='/valorant'> <img src={valorant} alt='valorant' className=''/> </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/apex'> <img src={apex} alt='apex' className=''/> </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/league-of-legends'> <img src={lol} alt='league of legends' className=''/> </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/steam'> <img src={steam} alt='steam' className=''/> </Link>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
  