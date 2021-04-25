import React, {useEffect} from 'react'
import DataAnalysisProject from './DataAnalysisProject'
import MLProject from './MLProject'
import PowerBIProject from './PowerBIProject'
import WebProject from './WebProject'

export default function ProjectIndex() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <React.Fragment>
            <section class="text-gray-600 body-font">
                <div class="container px-5 mt-16 mb-12 mx-auto">
                    <div class="flex flex-col text-center w-full">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Projects</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep.</p>
                    </div>
                </div>
            </section>
            {/* <MLProject /> */}
            <DataAnalysisProject />
            {/* <PowerBIProject /> */}
            <WebProject />
        </React.Fragment>
    )
}
