import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by Objectsbloom Inc.</p>
                <p className="grey-text">Tuesday 23rd, October 2018 00:01am</p>
            </div>
        </div>
    )
}

export default ProjectSummary