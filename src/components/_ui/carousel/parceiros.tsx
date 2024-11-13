// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import Image from 'next/image';
import EmpresaWD from '@/assets/images/clientes/empresa-wd.png';
import SocialBar from '@/assets/images/clientes/social-bar.png';
import TeczSmart from '@/assets/images/clientes/tecz-smart.png';
import TataBoutique from '@/assets/images/clientes/tata-boutique.png';

export default function Parceiros () {
    
  return (
    <div className="flex w-full">
    <Swiper
    loop={true}
    >
      <SwiperSlide className=''>
      <p className='carousel-titulo'>Empresa WD</p>
        <Image className="carousel-img" alt="EmpresaWD"src={EmpresaWD}/>
      </SwiperSlide>
      <SwiperSlide className=''>
      <p className='carousel-titulo'>Social Bar</p>
        <Image className="carousel-img" alt="EmpresaWD" src={SocialBar}/>
      </SwiperSlide>
      <SwiperSlide>
        <p className='carousel-titulo'>Tecz Smart</p>
        <Image className="carousel-img" alt="EmpresaWD" src={TeczSmart}/>
      </SwiperSlide>
      <SwiperSlide>
        <p className='carousel-titulo'>Tatá Boutique Social Media</p>
        <Image className="carousel-img" alt="EmpresaWD" src={TataBoutique}/>
      </SwiperSlide>
    </Swiper>
    </div>
  );
};