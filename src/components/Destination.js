import React from "react";
import travelIcon from "../images/location-icon.png";

export default function Destination(props) {
    // Determine if the 'border-bottom' class should be applied
    const borderClass = props.isLast ? "" : "border-bottom";

    return(
        <div>
            <section className={`dest-container ${borderClass}`}>
                <img src={props.data.imageUrl} className="dest-image" alt="Destination"></img>
                <div className="dest-info">
                    <div className="info-header">
                        <img src={travelIcon} alt="destination pin icon" className="travel-icon"></img>
                        <p>{props.data.location}</p>
                        <a href={props.data.googleMapsUrl} className="google-maps-link" target="_blank" rel="noreferrer">View on Google Maps</a>
                    </div>
                    <h2 className="dest-title">{props.data.title}</h2>
                    <p className="dates-info">{props.data.startDate} - {props.data.endDate}</p>
                    <p>{props.data.description}</p>
                </div>
            </section>
        </div>
    )
}