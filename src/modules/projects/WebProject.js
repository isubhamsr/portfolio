import React from 'react'
import ProjectComponent from './Components/ProjectComponent'
import ProjectName from './Components/ProjectName'

const data = require('../projects/Projects File/WebDevelopment.json')
console.log(data.data);
export default function WebProject() {
    return (
        <React.Fragment>
            <ProjectName name={data.name} description={data.description} />
            <ProjectComponent data={data.data}/>
        </React.Fragment>
    )
}
