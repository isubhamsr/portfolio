import React from "react";
import { Link } from "react-router-dom";

export default function ProjectComponent({ data }) {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          {data.map((item, index) => (
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={item.image}
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {item.category}
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    {item.name}
                  </h1>
                  <p class="leading-relaxed mb-3">{item.description}</p>
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    <b>Technology Use: </b>
                  </h2>
                  <p class="tracking-widest text-sm title-font font-medium mb-2">
                    {item.technology}
                  </p>{" "}
                  <div class="flex items-center flex-wrap ">
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
