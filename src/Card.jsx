import './Card.css'

function Card(props) {
    return (
        <>
            <div className='card'>
                <h2>{props.info.nome}</h2>
                <img src={props.info.foto} />
                <h2>{props.info.numero}</h2>
                <h2>{props.info.tipo}</h2>
            </div>
        </>
    )
}
export default Card