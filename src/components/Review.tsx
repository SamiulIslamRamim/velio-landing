// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { REVIEWS } from '../assets/data';

const Review = () => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {REVIEWS.map((review) => (<SwiperSlide>
            <div className="review" key={review.id}>
              <div className="revbox">
                <div className='revsize'>
                <div className="revtext">{review.text}</div>
                <div className="revpro">
                  <div className="revname">{review.name}</div>
                  <div className="revplat">{review.platform}</div>
                </div>
                </div>
              </div>
            </div>
            </SwiperSlide>
          ))}
      </Swiper>

    </div>
  )
}

export default Review
