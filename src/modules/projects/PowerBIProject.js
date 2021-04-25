import React from 'react'
import ProjectComponent from './Components/ProjectComponent'
import ProjectName from './Components/ProjectName'

export default function PowerBIProject() {
    return (
        <React.Fragment>
            <ProjectName name={"Power BI Projects"}/>
            <ProjectComponent />
        </React.Fragment>
    )
}
