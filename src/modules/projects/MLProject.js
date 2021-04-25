import React from 'react'
import ProjectComponent from './Components/ProjectComponent'
import ProjectName from './Components/ProjectName'

export default function MLProject() {
    return (
        <React.Fragment>
        <ProjectName name={"Machine Learning Projects"} />
            <ProjectComponent  />
        </React.Fragment>
    )
}
