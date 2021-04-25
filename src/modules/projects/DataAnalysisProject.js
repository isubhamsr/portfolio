import React from 'react'
import ProjectComponent from './Components/ProjectComponent'
import ProjectName from './Components/ProjectName'

const data = require('../projects/Projects File/DataAnalisis.json')
console.log(data.data.length);

export default function DataAnalysisProject() {
    return (
        <React.Fragment>
            <ProjectName name={data.name} description={data.description} />
            <ProjectComponent data={data.data} />
        </React.Fragment>
    )
}
