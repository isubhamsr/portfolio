import React, { useEffect } from "react";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-col">
        <div class="lg:w-4/6 mx-auto">
          <div class="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              class="object-cover object-center h-full w-full"
              src="https://res.cloudinary.com/dkcwzsz7t/image/upload/q_auto:low/v1619450305/pexels-pixabay-265152_kkk1ko.jpg"
            />
          </div>
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <img src="https://res.cloudinary.com/dkcwzsz7t/image/upload/q_auto:low/v1619425814/circle-cropped_rvccen.png" />
              </div>
              <div class="flex flex-col items-center text-center justify-center">
                <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                  Subham Roy
                </h2>
                <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p class="text-base">
                  Currently M.Tech(CS) | Full Stack Developer (MERN Stack)
                </p>
              </div>
            </div>
            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p class="leading-relaxed text-lg mb-4">
                I am Subham Roy, from Kolkata, India. working at Cognizant as Full Stack Web developer. I started coding in 2017, and I am
                still learning. I worked as a freelancer and also for a company
                in Kolkata, India. I have experience in web and app Service
                Modularize code with maintaining readable and reusable coding
                structure using Backend frameworks like Express (node.js),
                Django (Python), and Front End frameworks like React Js, Redux
                with MySQL, MongoDB as a primary database. A Full Stack Web
                Developer (MERN stack).
              </p>
              <p class="leading-relaxed text-lg mb-4">
                <b>This Website made with Reactjs, Nodejs, MongoDb, Django</b>
              </p>
              <p>
                <b>Mail:</b>{" "}
                <a
                  class="text-indigo-500"
                  href="mailto:shubhamroy12345@gmail.com"
                >
                  shubhamroy12345@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
