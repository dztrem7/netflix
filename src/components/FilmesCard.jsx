
export default function FilmesCards(props) {
    console.log(props)
    return(
        <>
       
        <img src={props.image} alt={props.descricao} />
        </>
    )
}