import './styles.css'

 export function Card({ name, time }) {        //props é uma propriedade que vem do componente pai|| voce tambem pode usar 'export function Card({name, time})' e tera o mesmo resultado
    return(
        <div className='card'>
            <strong>{name}</strong>
            <small>{time}</small>
        </div>
        
    )
}