import React from "react"
import "./Card.sass"

export default function Card ({ cardColor, cardTitle, image, cardNumber  }) {
    return (
        <div className={cardColor} data-testid="card">
            <div className="card-info-container">
                <p className="card-number">{cardNumber}</p>
                <p className="card-text">{cardTitle}</p>
            </div>
            <div className="card-image-container">
                <img src={image} alt="Card Background Image" />
            </div>
        </div>
    )
}