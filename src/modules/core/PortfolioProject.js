import React from 'react'
import { Link } from 'react-router-dom'
const data = require('../projects/Projects File/FeatureProject.json')

export default function PortfolioProject() {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Feature Projects</h1>
                    {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p> */}
                </div>
                <div class="flex flex-wrap -m-4">

                    {
                        data.data.map((item, index) => (
                            <div class="lg:w-1/3 sm:w-1/2 p-4">
                                <div class="flex relative">
                                    <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={item.image} />
                                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <p class="title-font font-medium text-lg text-gray-900 mb-3">{item.name}</p>
                                        <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"><b>Technology Use: </b><p>{item.technology}</p> </h2> 
                                        <p class="leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }


                </div>
                <div class="flex justify-center mt-4">
                    <Link to='/pojects' class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">More</Link>
                </div>
            </div>
        </section>
    )
}
