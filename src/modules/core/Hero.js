import React from "react";
import data from "../../imges/data.svg";

export default function Hero() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            SUBHAM ROY
            <br class="lg:inline-block" />
            M.Tech (CS)
          </h1>
          <p class="mb-8 leading-relaxed">
            3+ years of experience in writing code and building apps. Currently
            working at Cognizant as Full Stack Web developer, and building web
            apps. Learning things by Googling.
          </p>
          <p class="mb-8 leading-relaxed">
            <b>Skills: </b>Python (OOPs), JavaScript, MySQL, MongoDB, ReactJs,
            NextJs, NodeJs, Asp Dot Net Core, Angular, C#
          </p>
          <div class="flex justify-center">
            <a
              href="https://github.com/isubhamsr"
              target="_blank"
              class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              GitHub
            </a>
            <a
              href="https://drive.google.com/file/d/1QzdLvZPME9WVpO0DoSlqFddq_j-PaEYI/view?usp=share_link"
              target="_blank"
              class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              Resume
            </a>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src={data}
          />
        </div>
      </div>
    </section>
  );
}
