"use client";
import Card from "@/app/ui/Card";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HeroAuthorsCard = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const authors = [
    { id: 1, image: "/author-1.jpeg", author: "jhon", location: "U.S America" },
    { id: 1, image: "/author-2.jpeg", author: "kane", location: "Canada" },
    { id: 1, image: "/author-3.jpeg", author: "kael", location: "japan" },
    { id: 1, image: "/author-4.jpeg", author: "Ceare", location: "Italy" },
  ];
  return (
    <div className=" relative z-10 py-20 px-4 max-w-6xl mx-auto">
      <h1 className=" [grid-column:1/-1] text-3xl font-semibold mb-4">
        Featured Authors
      </h1>
      <Carousel
        swipeable={true}
        itemClass="px-2 "
        className=" p-6 rounded-lg bg-gray-200"
        responsive={responsive}
        showDots={true}
      >
        {authors?.map((auth) => (
          <Card
            key={auth.id}
            authorName={auth.author}
            authorImage={auth.image}
            authorLocatin={auth.location}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default HeroAuthorsCard;
