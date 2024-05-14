"use client";

import { useRef, useState } from "react";

import { usePapers } from "../papers/usePapers";
import Link from "next/link";

const HeroBanner = () => {
  const [cardId, setCardId] = useState(null);
  const [inputError, setInputError] = useState(false);
  const ref = useRef();

  const [filterValue, setFilterValue] = useState("");
  const [filterField, setfilterField] = useState("all");

  const [filterPapers, setFilterPapers] = useState([]);
  console.log(filterPapers);

  const { Papers, isLoading, isError } = usePapers();

  // if (isLoading) return <p>loading...</p>;
  if (isError) return <p>Error</p>;

  function handleFilter(e) {
    setfilterField(e.target.value);
  }

  // search function
  function handleSearch() {
    // 1. check if search field is not empty
    if (!filterValue) return setInputError(true);

    let filterdata;
    // 2. If field field is set to default All then show data based on input value
    if (filterField === "all") {
      filterdata = Papers?.filter(
        (paper) =>
          paper.title.toLowerCase().includes(filterValue.toLowerCase()) ||
          paper.keywords.toLowerCase().includes(filterValue.toLowerCase()) ||
          paper.author.toLowerCase().includes(filterValue.toLowerCase()) ||
          paper.publisher.toLowerCase().includes(filterValue.toLowerCase())
      );
      setFilterPapers(filterdata);
    }

    // 3. finally filter data based on select input field box
    if (filterField !== "all") {
      filterdata = Papers?.filter((paper) =>
        paper[filterField]?.toLowerCase().includes(filterValue?.toLowerCase())
      );
      setFilterPapers(filterdata);
    }

    // 4. scroll to result box

    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const handleViewPdf = (pdf) => {
    window.open(pdf, "_blank");
  };

  function handleShowAbstract(id) {
    setCardId(id);
  }
  function handleHiddenAbstract() {
    setCardId(null);
  }
  return (
    <div className="overflow-hidden">
      <div className=" min-h-screen  px-8 flex flex-col gap-8 justify-center items-center">
        <h1 className=" text-7xl  text-center font-semibold text-black">
          Empowering knowledge with every search
        </h1>
        <div className=" bg-[#4d79aa] text-white rounded-md overflow-hidden flex h-12 w-[70%]">
          <select
            value={filterField}
            onChange={handleFilter}
            className="  disabled:bg-opacity-70 px-4 outline-none border-none  bg-[#4d79aa] h-full font-semibold capitalize"
            name="filterSelect"
          >
            <option defaultChecked value="all">
              All
            </option>
            <option value="keywords">keywords</option>
            <option value="title">title</option>
            <option value="author">author</option>
            <option value="publisher">publisher</option>
          </select>

          <input
            value={filterValue}
            onChange={(e) => {
              setFilterValue(e.target.value);
              setInputError(false);
            }}
            className={`px-4 h-full w-full placeholder:text-white text-lg outline-none border-none rounded-md bg-[#4d79aa]  ${
              inputError ? " ring-2 ring-offset-1 ring-red-600" : "ring-0"
            }`}
            type="text"
            placeholder="Search..."
          />
          <button
            onClick={handleSearch}
            className=" bg-buttonColor px-6 text-white capitalize hover:bg-sky-700"
          >
            search
          </button>
        </div>
      </div>

      <div
        className=" border-b flex justify-center items-center flex-col border-gray-400 py-8 space-y-5"
        ref={ref}
      >
        {filterPapers?.length > 0 && (
          <h1 className="capitalize">
            showing{" "}
            <span className="font-semibold"> {filterPapers?.length} </span>{" "}
            result
          </h1>
        )}
        {filterPapers?.map((paper) => {
          return (
            <div
              className=" relative  bg-white shadow-xl flex flex-col gap-4 w-[70%] px-4 py-8 rounded-md"
              key={paper.id}
            >
              <Link
                href={`/paper/${paper.id}`}
                className={`text-xl mb-4 underline hover:no-underline transition-all duration-300 max-w-[90%] font-medium  w-fit text-gray-800 leading-10 `}
              >
                {paper.title}
              </Link>

              {cardId !== paper.id ? (
                <button
                  onClick={(e) => handleShowAbstract(paper.id)}
                  className="absolute top-10 right-10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={handleHiddenAbstract}
                  className="absolute top-10 right-10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25"
                    />
                  </svg>
                </button>
              )}

              {/* author box */}
              <div className=" grid grid-cols-[12rem_1fr] ">
                <p className="text-gray-500 font-normal">
                  Author<span>(s)</span>
                </p>
                <p className=" text-left font-semibold text-gray-600 capitalize underline">
                  {paper.author}
                </p>
              </div>

              {/* publication year box */}
              <div className=" grid grid-cols-[12rem_1fr] ">
                <p className="text-gray-500 font-normal capitalize">
                  Publication year
                </p>
                <p className=" w-full font-semibold text-gray-600 capitalize">
                  {paper.pubdate}
                </p>
              </div>

              {/* publication title box */}
              <div className=" grid grid-cols-[12rem_1fr] ">
                <p className="text-gray-500 font-normal capitalize">
                  Publication title
                </p>
                <p className=" font-semibold text-gray-600 capitalize">
                  {paper.title}
                </p>
              </div>

              {/* Resource type box */}
              <div className=" grid grid-cols-[12rem_1fr] ">
                <p className="text-gray-500 font-normal capitalize">
                  Resource type
                </p>
                <p className=" font-semibold text-gray-600 capitalize">
                  {paper.resource_type}
                </p>
              </div>

              {/* Publisher box */}
              <div className=" grid grid-cols-[12rem_1fr] ">
                <p className="text-gray-500 font-normal capitalize">
                  publisher
                </p>
                <p className=" font-semibold text-gray-600 capitalize">
                  {paper.publisher}
                </p>
              </div>
              {cardId === paper.id && (
                <div>
                  <p className="text-gray-500  capitalize">abstract</p>
                  <p className=" text-gray-600">{paper.abstract}</p>
                </div>
              )}

              {/* Footer box */}
              <div className=" mt-8 space-x-3">
                <Link
                  href={`/paper/${paper.id}`}
                  className=" bg-sky-500 hover:bg-white hover:text-stone-600 hover:shadow-xl transition-all duration-300 rounded-md px-6 py-2 border-none text-white capitalize font-medium"
                >
                  view paper
                </Link>
                <button
                  className=" bg-sky-500 hover:bg-white hover:text-stone-600 hover:shadow-xl transition-all duration-300 rounded-md px-6 py-2 border-none text-white capitalize font-medium"
                  onClick={() => handleViewPdf(paper.pdf)}
                >
                  view <span>PDF</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroBanner;
