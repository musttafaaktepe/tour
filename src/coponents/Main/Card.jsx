

const Card = (data)=>{
    console.log(data)
    return (
        <div className="cards">
            <h1>{data.title}</h1>
        </div>
    )
}

export default Card;