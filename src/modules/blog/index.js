import React from 'react'
import { Link } from 'react-router-dom'
const data = require('../projects/Projects File/DataAnalisis.json')

console.log(data.name);
export default function index() {
    
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                    <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">Coming Soon</h1>
                    <Link to='/pojects' class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">Projects</Link>
                </div>
            </div>
        </section>
    )
}
