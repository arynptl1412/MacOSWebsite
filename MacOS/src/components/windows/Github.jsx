import React from 'react'
import MacWindow from './MacWindow'
import githubData from '../../assets/github.json'
import './github.scss'

const GitCard = ({ data = { id: 1, image: "", title: "", description: "", tags: [], repolink: "", demolink: "" } }) => {
    return (
        <div className="card">

            <img src={data.image} onError={(e) => e.target.style.display = "none"} />
            <h1>{data.title}</h1>
            <p className='desc'>{data.description}</p>

            <div className="tags">
                {
                    data.tags.map((tag, index) => (
                        <p className='tag' key={index}>{tag}</p>
                    ))
                }
            </div>

            <div className="urls">
                <a href={data.repolink} target="_blank" rel="noopener noreferrer">Repository</a>
                {data.demolink && <a href={data.demolink} target="_blank" rel="noopener noreferrer">Live Demo</a>}
            </div>

        </div>
    )
}

const Github = () => {
    return (
        <MacWindow>
            <div className="cards">
                {githubData.map(project => (
                    <GitCard key={project.id} data={project} />
                ))}
            </div>
        </MacWindow>
    )
}

export default Github