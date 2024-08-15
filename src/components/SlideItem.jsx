import React, { useRef } from "react";
import { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../css/custom-pagination.css";

const IMAGE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;
function SlideItem() {
  // useState digunakan untuk mengelola state komponen. Di sini, `trendingMovies` digunakan untuk menyimpan data film yang sedang tren.
  // Setiap kali `setTrendingMovies` dipanggil, komponen akan re-render dan menampilkan data film terbaru.
  const [trendingMovies, setTrendingMovies] = useState([]);

  // useRef digunakan untuk membuat ref ke elemen DOM. Di sini, `elementRef` digunakan untuk mengakses elemen container slide secara langsung.
  // Ref berguna untuk memanipulasi elemen DOM secara imperatif, seperti menggeser elemen.
  const elementRef = useRef();

  // useEffect digunakan untuk menjalankan efek samping setelah komponen dirender atau ketika dependensi berubah.
  // Di sini, useEffect digunakan untuk mengambil data film ketika komponen pertama kali dimunculkan.
  // Dependency array kosong `[]` menandakan bahwa efek ini hanya akan berjalan sekali.
  useEffect(() => getTrendingMovies(), []);

  //Fungsi untuk mengambil data film yang sedang tren dari API.
  const getTrendingMovies = () => {
    GlobalApi.getTrendingMovies.then((res) => {
      console.log(res.data.results);
      setTrendingMovies(res.data.results);
    });
  };

  // Fungsi untuk menggeser konten


  return (
    <>
      <div className="text-white">
      {/* Container slide dengan kemampuan scroll */}
      <Swiper
      className="flex w-full px-14 py-4 text-white"
       modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
       spaceBetween={20}
       slidesPerView={1}
       navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
       }}
       pagination={{ clickable: true,}}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
       autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        stopOnLastSlide: false,
        reverseDirection: false,
        pauseOnMouseEnter: true,
        loop: true,

      }}
      >
      <div className="swiper-button-prev text-white text-3xl"><HiChevronRight/></div>

      <div
        className="flex w-full overflow-x-auto px-14 py-4 scrollbar-none text-white scroll-smooth"
        ref={elementRef}
      >
        {trendingMovies.map((item, index) => (
          <SwiperSlide className="min-w-full md:h-[390px] object-cover overflow-hidden object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-200 bg-white text-white">
          <img
            key={index}
            src={IMAGE_URL + item.backdrop_path}
            
          />
          </SwiperSlide>
          
        ))}
      </div>
      <div className="swiper-button-next text-white text-3xl"><HiChevronLeft/></div>
      </Swiper>
      </div>
      ;
    </>
  );
}

export default SlideItem;
