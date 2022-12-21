import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar11.png'
import AVTR2 from '../../assets/avatar12.png'


import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Education',
    review: 'Master degree In 2020, he graduated from Odessa National University of Economics with bachelor degree in specialty 072 "Finance, banking and insurance". In 2021, he completed the second degree of the two-level system of higher education, namely the master`s degree at the Department of "Financial Management". The average score of the certificate is 4 (75 according to the Bologna-system of education) Point for diploma defense – 5 (90)',
  },
  {
    avatar: AVTR2,
    name: 'Courses',
    review: 'Successfully completed courses at the All-Ukrainian school of IT-Step to courses Front-end developer. Successfully completed courses in one of the top IT schools in Ukraine "Powercode Academy to courses Front-end developer and Front-end advanced"',
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Worth to Knowing</h5>
      <h2>Education & Courses</h2>

      <Swiper className="container testiomonals__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="avatar">
                  <img src={avatar} />
                </div>
                <h5 className='name'>{name}</h5>
                <small className="review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials