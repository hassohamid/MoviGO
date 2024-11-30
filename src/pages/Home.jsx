import Navigation from "../components/Navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const [page, setPage] = useState(1);
  // const [isSearching, setIsSearching] = useState(false);

  const getData = async () => {
    if (!searchTerm) return;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2IyZmYxZGQ3YjgxNjlkOGU0ZjcxZjRjOTFiNmMzZiIsIm5iZiI6MTcwNDM3MTc5MC4yMTIsInN1YiI6IjY1OTZhNjRlODY5ZTc1NzA4ZTA2ODBlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.81BnBa3jtZMc6EQsv2M5KbpPCnRooP9M2RHhTjO32Ls",
      },
    };
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
      options
    );
    setData(response.data.results);
  };

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <>
      <Navigation />
      <section className="main-content">
        <div className="flex justify-center items-center flex-col gap-5">
          {/* <div className=" h-max flex flex-col justify-center items-center gap-5">
            <label
              htmlFor=""
              className="text-3xl font-extrabold drop-shadow-lg"
            >
              Enter any movie you want
            </label>
            <input
              type="text"
              placeholder="Search for movies"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border px-4 py-2 rounded-md mb-4 text-black w-full"
            />
            <button
              onClick={handleSearch}
              className="border px-10 py-2 rounded-md bg-blue-500 text-white mb-4 hover:-translate-y-1 transition-all duration-200 hover:bg-red-600"
            >
              Search
            </button>
          </div> */}
          {data && data.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-5 my-10">
              {data.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-wrap flex-col items-center max-w-xs w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                >
                  <h1 className="text-center text-white">
                    {item.original_title}
                  </h1>
                  <img
                    className="w-full max-w-[200px] rounded-md"
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.Title}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center drop-shadow-lg text-black">
              No data for now... Please find something for you!{" "}
            </p>
          )}
          <div className="flex gap-5 mb-5">
            <button
              onClick={prevPage}
              className="text-white text-2xl border border-white px-4 rounded-lg hover:scale-105 hover:bg-slate-500 transition-all duration-200"
              disabled={page === 1} // Блокируем кнопку, если это первая страница
            >
              Previous
            </button>
            <button
              onClick={nextPage}
              className="text-white text-2xl border border-white px-4 rounded-lg hover:scale-105 hover:bg-slate-500 transition-all duration-200"
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
