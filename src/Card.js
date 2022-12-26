import "./styles.css"
import React from "react";
import Data from "./data";
import Marker from "./images/location-marker.svg";

function Card() {
    return (
        <div>
            {
                Data.map(place => {
                    return (
                        <div className="card" key={ place.id }>
                            <img className="card__image" src={ `${place.image}` } alt="attraction"/>
                            <div className="card__text">
                                <div className="card__location-text">
                                    <img className="card__marker" src={ Marker } alt="location-icon"/>
                                    <h4 className="card__country">{ place.location }</h4>
                                    <a className="card__maps" href={ `${place.mapsLink}` }>
                                        View on Google Maps
                                    </a>
                                </div>
                            <h1 className="card__title">{ place.title }</h1>
                            <h3 className="card__dates">{ place.dates.start } - { place.dates.end }</h3>
                            <p className="card__description">{ place.description }</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card;