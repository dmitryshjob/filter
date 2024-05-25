import './Card.css'

function Card ({item}) {

    return (
        <div className="cardList">
                {item.map((val) => (      
                        <div >
                            <img src={val.img} alt={val.category} className=""/>
                        </div>
                ))}
        </div>
    )
}

export default Card