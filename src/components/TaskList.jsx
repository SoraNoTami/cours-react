import { useContext } from "react";
import { TitreContext } from "../App";


function TaskList() {
    const contexte = useContext(TitreContext);
    console.log(contexte)
    return (
        <>
            <h1>Liste de tâches</h1>
            {contexte.etat.map((tache) => (
                <div>
                    <h2>{tache.title}</h2>
                    <p>{tache.priority}</p>
                </div>
            ))}
        </>
    )
}

export default TaskList