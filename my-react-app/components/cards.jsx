export default function Card(props){
    console.log(props.image)
        return(
            <div className="card-container">
                <div className="card">
                    <img src={`./images/${props.image}`} className="card--image" />
                        <div className="card-stats">
                            <p className="card-location"><img className="location-marker" src="./images/location.png"></img> {props.location}</p>
                            <p className="card-title">{props.title}</p>
                            <p className="card-date">{props.startDate}-{props.endDate}</p>  
                            <p className="card-description">{props.description}</p>   
                        </div>
                </div>
            </div>
        )

}