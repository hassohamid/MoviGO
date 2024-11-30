import Navigation from "../components/Navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const getData = async () => {
    if (!searchTerm) return;

    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=6665ca&s=${searchTerm}`
      );
      setData(response.data.Search);
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = () => {
    setIsSearching(true); // Начать поиск
    getData();
  };

  useEffect(() => {
    if (isSearching) {
      setIsSearching(false); // Сбросить состояние после выполнения запроса
    }
  }, [data]);

  return (
    <>
      <Navigation />
      <div className="w-full flex justify-center items-center flex-col gap-5 p-4">
        <h1>You may looking for some film for the evening...</h1>

        <input
          type="text"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-4 py-2 rounded-md mb-4"
        />

        {/* Кнопка для поиска */}
        <button
          onClick={handleSearch}
          className="border px-4 py-2 rounded-md bg-blue-500 text-white mb-4"
        >
          Search
        </button>

        {data && data.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-5 mt-[30rem]">
            {data.map((item, i) => (
              <div
                key={i}
                className="flex flex-wrap flex-col items-center max-w-xs w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              >
                <h1 className="text-center">{item.Title}</h1>
                <img
                  className="w-full max-w-[200px] rounded-md"
                  src={item.Poster}
                  alt={item.Title}
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">No data...</p>
        )}
      </div>
    </>
  );
}
