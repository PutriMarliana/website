import SectionTitle from "../Components/SectionTitle";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { gallery } from "../Constants/constants";
import React, { useRef, useState } from 'react';
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import slide1 from '../assets/gallery/kalea.jpg';
import slide2 from '../assets/gallery/kalea2.jpg';
import slide3 from '../assets/gallery/kalea3.jpg';
import slide4 from '../assets/gallery/kalea4.jpg';
import slide5 from '../assets/gallery/kalea5.jpg';
import slide6 from '../assets/gallery/kalea6.jpg';
import slide7 from '../assets/gallery/kalea7.jpg';
import slide8 from '../assets/gallery/kalea8.jpg';
import slide9 from '../assets/gallery/kalea9.jpg';

import nbc1 from '../assets/gallery/nbc.jpg';
import nbc2 from '../assets/gallery/nbc2.jpg';
import nbc3 from '../assets/gallery/nbc3.jpg';
import nbc4 from '../assets/gallery/nbc4.jpg';
import nbc5 from '../assets/gallery/nbc5.jpg';
import nbc6 from '../assets/gallery/nbc8.jpg';
import nbc7 from '../assets/gallery/nbc7.jpg';

import oca1 from '../assets/gallery/oca.jpg';
import oca2 from '../assets/gallery/oca2.jpg';
import oca3 from '../assets/gallery/oca3.jpg';
import oca4 from '../assets/gallery/oca4.jpg';
import oca5 from '../assets/gallery/oca5.jpg';
import oca6 from '../assets/gallery/oca6.jpg';
import oca7 from '../assets/gallery/oca7.jpg';

const Gallery = () => {

    return (
      <div id="gallery" className="w-full overflow-hidden-web flex justify-center">
        <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
          <div className="w-full">
            <SectionTitle
              title="GALLERY"
              subtitle="Space to accomodate work"
              />
              </div>
              <div className="container">
              <SectionTitle
              title="PHOTOS"
              subtitle="Section"
              />
              <h1 className="heading">KALEA COFFEE</h1>
                <Swiper
                  slidesPerView={'auto'}
                  loop= "true"
                  centeredSlides={true}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src={ slide1 } alt="Slide 1" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ slide2} alt="Slide 2" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ slide3 } alt="Slide 3" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ slide4 } alt="Slide 4" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ slide5 } alt="Slide 5" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ slide6 } alt="Slide 6" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ slide7 } alt="Slide 7" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ slide8 } alt="Slide 8" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ slide9 } alt="Slide 9" />
                  </SwiperSlide>
                </Swiper>
                <h1 className="heading">NBC 3x3</h1>
                <Swiper
                  slidesPerView={'auto'}
                  loop={ true }
                  centeredSlides={true}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src={ nbc1 } alt="Slide 1" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ nbc2 } alt="Slide 2" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ nbc3 } alt="Slide 3" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ nbc4 } alt="Slide 4" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ nbc5 } alt="Slide 5" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ nbc6 } alt="Slide 6" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ nbc7 } alt="Slide 7" />
                  </SwiperSlide>
                </Swiper>
                <h1 className="heading">OFF CLASS ASSIGNMENT</h1>
                <Swiper
                  slidesPerView={'auto'}
                  loop= "true"
                  centeredSlides={true}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src={ oca1 } alt="Slide 1" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ oca2 } alt="Slide 2" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ oca3 } alt="Slide 3" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ oca4 } alt="Slide 4" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ oca5 } alt="Slide 5" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ oca6 } alt="Slide 6" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ oca7 } alt="Slide 7" />
                  </SwiperSlide>
                </Swiper>
                </div>
                <SectionTitle
              title="VIDEOS"
              subtitle="Section"
              />
              <div className="title"><h1>RANU REGULO</h1></div>
              <div className="video-wrapper">
                <ReactPlayer
                    url='https://youtu.be/TPtAQdQfouU'
                    playing
                    controls
                    loop
                    muted
                    className="react-player-reguler"
                    />
              </div>
              <div className="title2"><h1>TIRTOSARI</h1></div>
              <div className="video-wrapper2">
                <ReactPlayer
                    url='https://youtu.be/Mp1uBxeWWYM'
                    playing
                    controls
                    loop
                    muted
                    className="react-player-reguler2"
                    />
              </div>
              <div className="title3"><h1>KAPAS BIRU</h1></div>
              <div className="video-wrapper3">
                <ReactPlayer
                    url='https://youtu.be/8Ame9-IMc24'
                    playing
                    controls
                    loop
                    muted
                    className="react-player-reguler3"
                    />
              </div>
              <div className="title4"><h1>SAKURA GARDEN</h1></div>
              <div className="video-wrapper4">
                <ReactPlayer
                    url='https://youtu.be/-zxVm_ZP8XQ'
                    playing
                    controls
                    loop
                    muted
                    className="react-player-reguler4"
                    />
              </div>
              <div className="title5"><h1>GOA TETES</h1></div>
              <div className="video-wrapper5">
                <ReactPlayer
                    url='https://youtu.be/kqIRGMw0seg'
                    playing
                    controls
                    loop
                    muted
                    className="react-player-reguler5"
                    />
              </div>
              <div className="title6"><h1>B29</h1></div>
              <div className="video-wrapper6">
                <ReactPlayer
                    url='https://youtu.be/LG_m5iD8dyk'
                    playing
                    controls
                    loop
                    muted
                    className="react-player-reguler6"
                    />
              </div>
              <div className="title7"><h1>LAVA TOUR</h1></div>
              <div className="video-wrapper7">
                <ReactPlayer
                    url='https://youtu.be/oyZVT1X-iRo'
                    playing
                    controls
                    loop
                    muted
                    className="react-player-reguler7"
                    />
              </div>
              <div className="title8"><h1>BUMI GLAGAH HARUM</h1></div>
              <div className="video-wrapper8">
                <ReactPlayer
                    url='https://youtu.be/w9ZisxBw5mk'
                    playing
                    controls
                    loop
                    muted
                    className="react-player-reguler8"
                    />
              </div>
              <div className="title9"><h1>TUMPAK SEWU</h1></div>
              <div className="video-wrapper9">
                <ReactPlayer
                    url='https://youtu.be/jCpQ-wWJbwQ'
                    playing
                    controls
                    loop
                    muted
                    className="react-player-reguler9"
                    />
              </div>
              <div className="title10"><h1>MUSEUM KENANGAN SEMERU</h1></div>
              <div className="video-wrapper10">
                <ReactPlayer
                    url='https://youtu.be/n3h3GjnraaE'
                    playing
                    controls
                    loop
                    muted
                    className="react-player-reguler10"
                    />
              </div>
              <div className="title11"><h1>TRAVEL MAGAZINE</h1></div>
              <div className="video-wrapper11">
                <ReactPlayer
                    url='https://youtu.be/ArYYyWrGRAA'
                    playing
                    controls
                    loop
                    muted
                    className="react-player-reguler11"
                    />
              </div>
              <div className="title12"><h1>VIDEO PRODUCT MIE INSTANT</h1></div>
              <div className="video-wrapper12">
                <ReactPlayer
                    url='https://youtu.be/slmiuSVoq4U'
                    playing
                    controls
                    loop
                    muted
                    className="react-player-reguler12"
                    />
              </div>
              <div className="title13"><h1>FEATURE - BATIK BETAWI TEROGONG</h1></div>
              <div className="video-wrapper13">
                <ReactPlayer
                    url='https://youtu.be/65jO3qZxSOk'
                    playing
                    controls
                    loop
                    muted
                    className="react-player-reguler13"
                    />
              </div>
              <div className="title14"><h1>TALKSHOW - GAME ON</h1></div>
              <div className="video-wrapper14">
                <ReactPlayer
                    url='https://youtu.be/U2NBmldBGW4'
                    playing
                    controls
                    loop
                    muted
                    className="react-player-reguler14"
                    />
              </div>
              <div className="title15"><h1>VARIETY SHOW - HOUSETY</h1></div>
              <div className="video-wrapper15">
                <ReactPlayer
                    url='https://youtu.be/HKNtE11XoZ8?si=ox6bCZaj46nv6GT5'
                    playing
                    controls
                    loop
                    muted
                    className="react-player-reguler15"
                    />
              </div>
        <div className="w-full h-full flex justify-center">
          <div className="w-[80%] flex flex-col sm:flex-row sm:flex-wrap justify-center gap-2">
            <LazyMotion features={domAnimation} strict>
              {gallery.image.map((gallery, index) => (
                <m.div
                  key={index}
                  initial={{ x: 100 }}
                  whileInView={{ x: 0 }}
                  className="w-full sm:w-[48%] rounded-xl p-1 bg-primary-400"
                >
                  <img className="w-full rounded-xl" src={gallery} />
                </m.div>
              ))}
            </LazyMotion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;