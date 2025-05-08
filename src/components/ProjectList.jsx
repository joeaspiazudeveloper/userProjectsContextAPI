import { useAppContext } from "./AppContext"

function ProjectList() {
    const { projects, getUserName } = useAppContext();

    if (!projects.length) {
        return (
            <div>
                <h1>No projects</h1>
            </div>
        )
    }
    
    return (
        <div>
            <h2>Project List</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {projects.map(project => (
                    <li key={project.id} className="project">
                        <h3>{project.name}</h3>
                        <p>User: {getUserName(project.userId)}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProjectList