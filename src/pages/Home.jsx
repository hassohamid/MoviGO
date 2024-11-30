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
    setIsSearching(true);
    getData();
  };

  useEffect(() => {
    if (isSearching) {
      setIsSearching(false);
    }
  }, [data]);

  return (
    <>
      <Navigation />
      <div className="main-content">
        <div className="flex justify-center items-center flex-col gap-5">
          <div className=" h-max flex flex-col justify-center items-center gap-5">
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
          </div>
          {data && data.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-5 my-10">
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
            <p className="text-center drop-shadow-lg text-black">
              No data for now... Please find something for you!{" "}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
