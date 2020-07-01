import React from 'react';
import NewProyect from '../projects/NewProject';
import ListProyects from '../projects/ListProyects';


const Sidebar = () => {
    return (
        <aside>
            <h1>MERN<span>Task</span></h1>
            <NewProyect />
            <div className="projects">
                <h2>Tus Proyectos</h2>
                <ListProyects />
            </div>
        </aside>
    );
}

export default Sidebar;
