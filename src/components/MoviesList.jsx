import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import MoviesCard from "./MoviesCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import HiMovieCard from "./HiMovieCard";

function MoviesList({ GenreId, index_ }) {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => getMoviesGenre(), []);
  const ElementRef = useRef(null);
  const getMoviesGenre = () => {
    GlobalApi.getMoviesByGenre(GenreId).then((res) => {
      console.log(res.data.results);
      setMovieList(res.data.results);
    });
  };

  const scrollRight = (element) => {
    element.scrollLeft += 500;
  };
  const scrollLeft = (element) => {
    element.scrollLeft -= 500;
  };
  return (
    <>
      <div>
        <HiChevronLeft  
          className={`hidden md:block text-3xl text-white absolute mx-[-28px] ${index_ == 0 ? "my-[130px]" : "my-[170px]"} cursor-pointer`}
          onClick={() => scrollLeft(ElementRef.current)}
        />
      </div>
      <div>
        <HiChevronRight
          className={`hidden md:block text-3xl text-white absolute mx-4 ${index_ == 0 ? "my-[130px]" : "my-[170px]"} right-0 cursor-pointer`}
          onClick={() => scrollRight(ElementRef.current)}
        />
      </div>
      <div
        ref={ElementRef}
        className="flex overflow-x-auto overflow-y-hidden gap-3 py-4 px-3 my-0 scrollbar-none scroll-smooth"
      >
        {movieList.map((item, index) => (
          <>{index_ % 3 == 0 ? <HiMovieCard className="h-full" movie={item} /> : <MoviesCard  className="w-full" movie={item} key={index} />}</>
        ))}
      </div>
    </>
  );
}

export default MoviesList;
