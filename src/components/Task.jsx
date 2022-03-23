import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TitreContext } from "../App";

function Task() {

    const contexte = useContext(TitreContext);
    const formulaire = useForm()
    const register = formulaire.register
    const handleSubmit = formulaire.handleSubmit
    const formState = formulaire.formState
    const errors = formState.errors
    const tacheInput = register("tacheInput")
    const prioriteInput = register("prioriteInput")
    const onSubmitHandler = (data) => {
        const copyTache = contexte.etat
        let dernierID = copyTache.length - 1
        console.log("Data: ", data)
        const tache = {
            id: dernierID + 1,
            tittle: data.tacheInput,
            priority: data.prioriteInput,
        }
        copyTache.push(tache)
        contexte.update(copyTache)
        console.log(contexte.etat)
    };
    const onErrorHandler = (error) => console.error("Error: ", error);

    return (
        <>
            <h1>Tâche</h1>
            <form onSubmit={handleSubmit(onSubmitHandler, onErrorHandler)}>
                <input type='text' id='task'{...tacheInput}></input>
                <select id='priorite' {...prioriteInput}>
                    <option value="">--Please choose an option--</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                </select>
            </form>
        </>
    )
}

export default Task