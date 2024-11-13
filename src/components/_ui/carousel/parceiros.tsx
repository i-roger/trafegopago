// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import Image from "next/image";
import EmpresaWD from "@/assets/images/clientes/empresa-wd.png";
import SocialBar from "@/assets/images/clientes/social-bar.png";
import TeczSmart from "@/assets/images/clientes/tecz-smart.png";
import TataBoutique from "@/assets/images/clientes/tata-boutique.png";

export default function Parceiros() {
  return (
    <>
      <div className="flex flex-col mb-[1rem]">
        <h1 className="titulo text-center">Nossos Clientes e Projetos</h1>
      </div>
      <div className="flex w-full">
        <Swiper loop={true}>
          <SwiperSlide className="">
            <a href="https://www.canva.com/design/DAF2yHmPhZw/MGr_7U_RGgMWlLa7XI88Hw/view?utm_content=DAF2yHmPhZw&utm_campaign=designshare&utm_medium=link&utm_source=editor">
              <p className="carousel-titulo">Empresa WD</p>
              <Image className="carousel-img" alt="EmpresaWD" src={EmpresaWD} />
            </a>
          </SwiperSlide>
          <SwiperSlide className="">
            <a href="https://www.canva.com/design/DAF-xNm-_oI/4Ulr9s8On7EaSdwIvMyq_Q/view?utm_content=DAF-xNm-_oI&utm_campaign=designshare&utm_medium=link&utm_source=editor">
              <p className="carousel-titulo">Social Bar</p>
              <Image className="carousel-img" alt="EmpresaWD" src={SocialBar} />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://www.canva.com/design/DAF2x-lzU_M/6O6NQjtv4i0aOlYA_xCvwg/view?utm_content=DAF2x-lzU_M&utm_campaign=designshare&utm_medium=link&utm_source=editor">
              <p className="carousel-titulo">Tecz Smart</p>
              <Image className="carousel-img" alt="EmpresaWD" src={TeczSmart} />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://www.canva.com/design/DAF3WBZ4hiY/89st5flafsi7aiaQ13n9QA/view?utm_content=DAF3WBZ4hiY&utm_campaign=designshare&utm_medium=link&utm_source=editor">
              <p className="carousel-titulo">Tatá Boutique Social Media</p>
              <Image className="carousel-img" alt="EmpresaWD" src={TataBoutique} />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
