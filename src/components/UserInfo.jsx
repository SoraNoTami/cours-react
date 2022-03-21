export function UserInfo(props) {
    return(
        <>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
        <a href={props.site}>{props.site}</a>
        </>
    )
}