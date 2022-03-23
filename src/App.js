import { createContext, useState, React } from "react";
import './App.css';
import TaskList from "./components/TaskList.jsx"
import Task from "./components/Task.jsx" 

export const TitreContext = createContext({})

export function App() {
    const [Taches, setTaches] = useState([{ id: 1, title: 'Tache 01', priority: 'Important' }, { id: 2, title: 'Tache 02', priority: 'Urgent' }]);

    const envoyerAuContexte = {
        etat: Taches,
        update: setTaches,
    }

    return (
        <TitreContext.Provider value={envoyerAuContexte}>
            <div>
                <TaskList />
                <Task />
            </div>
        </TitreContext.Provider>
    )



}

