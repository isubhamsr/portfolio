import React from "react";
import { Link } from "react-router-dom";

export default function ProjectComponent({ data }) {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-16 mx-auto">
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {data.map((item, index) => (
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src={item.image}
                />
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                {item.name}
              </h2>
              <p class="text-base leading-relaxed mt-2">{item.description}</p>
              <p class="text-base leading-relaxed mt-2">
                <b>Technology Used:</b> {item.technology}
              </p>
              {item.inApp ? (
                <Link
                  to={item.link}
                  class="text-indigo-500 inline-flex items-center mt-3"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              ) : (
                <a
                  href={item.link}
                  target="_blank"
                  class="text-indigo-500 inline-flex items-center mt-3"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
        {/* <div class="flex justify-center mt-12">
                    <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Show More</button>
                </div> */}
      </div>
    </section>
  );
}
