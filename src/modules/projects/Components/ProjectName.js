import React from 'react'

export default function ProjectName({ name="Project Name", description="Project description" }) {
    return (
        <div class="container px-5 mx-auto">
            <div class="flex flex-col">
                <div class="h-1 bg-gray-200 rounded overflow-hidden">
                    <div class="w-24 h-full bg-indigo-500"></div>
                </div>
                <div class="flex flex-wrap sm:flex-row flex-col py-6">
                    <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">{name}</h1>
                    <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">{description}</p>
                </div>
            </div>
        </div>
    )
}
