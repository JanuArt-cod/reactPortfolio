import React from 'react'
import './quotes.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
{
avatar:AVTR1,
name:'Imam Al-Ghazali',
review:'Bantinglah otak untuk mencari ilmu sebanyak-banyaknya guna mencari rahasia besar yang terkandung di dalam benda besar bernama dunia ini,tetapi pasanglah pelita dalam hati sanubari, yaitu pelita kehidupan jiwa.'
},
{
avatar:AVTR3,
name:'Imam Hasan al-Bashri',
review:'Jika seorang mencari ilmu, maka itu akan tampak di wajah,tangan dan lidahnya serta dalam kerendahan hatinya kepada Allah.'
},
{
avatar:AVTR2,
name:'Presiden Ir.Soekarno',
review:'Bermimpilah setinggi langit, jika engkau jatuh, engkau akan jatuh di antara bintang-bintang.'
},
{
avatar:AVTR4,
name:'Presiden BJ Habibie',
review:'Tidak ada gunanya IQ anda tinggi namun malas, tidak miliki disiplin.yang penting adalah anda sehat dan mau berkorban untuk masa depan yang cerah.'
},
]

const Quotes = () => {
  return (
    <section id='quotes'>
      <h5>words of motivation</h5>
      <h2>Quotes</h2>

      <Swiper className='container quotes__container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,review},index)=>{ knlm dno function 
            return (
            <SwiperSlide key={index} className='quotes'>
              <div className='client__avatar'>
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            /* <article className='quotes'>
              <div className='client__avatar'>
                <img src={AVTR3} alt='Avatar one'/>
              </div>
              <h5 className='client__name'>Imam Hasan al-Bashri</h5>
              <small className='client__review'>Jika seorang mencari ilmu, maka itu akan tampak di wajah, tangan dan lidahnya serta dalam kerendahan hatinya kepada Allah.</small>
            </article>
            <article className='quotes'>
              <div className='client__avatar'>
                <img src={AVTR2} alt='Avatar one'/>
              </div>
              <h5 className='client__name'>Presiden Ir.Soekarno</h5>
              <small className='client__review'>Bermimpilah setinggi langit, jika engkau jatuh, engkau akan jatuh di antara bintang-bintang.</small>
            </article>
            <article className='quotes'>
              <div className='client__avatar'>
                <img src={AVTR4} alt='Avatar one'/>
              </div>
              <h5 className='client__name'>Presiden BJ Habibie</h5>
              <small className='client__review'>Tidak ada gunanya IQ anda tinggi namun malas, tidak miliki disiplin. yang penting adalah anda sehat dan mau berkorban untuk masa depan yang cerah.</small>
            </article> */
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Quotes