import "./personne.css";
import React from "react"

export function Personne(props){
    return <p>Nom: {props.name}</p>
}

export class Personnage extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return (
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            provident quia voluptatum sit a quasi delectus. Dolore omnis labore
            ipsa deserunt cum officiis vero molestiae eum nesciunt dolorum consequatur 
            sunt ipsam alias, saepe minima laborum quia fuga quo reiciendis commodi 
            eveniet neque aperiam. Adipisci, aperiam assumenda optio officia impedit 
            corrupti cum voluptate! Ea accusantium atque molestias sint repellendus 
            aliquam quisquam, consequatur maiores voluptatibus nihil quos velit 
            ducimus similique non hic enim optio ab delectus architecto exercitationem.
            Cum nesciunt quis cupiditate.</p>
        )
    }
}