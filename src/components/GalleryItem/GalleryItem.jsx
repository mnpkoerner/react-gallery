import { useState } from 'react';

export default function GalleryItem({
    card,
    addLike
}) {
    //declare state to determine whether to show the text OR the photo
    const [isVisible, setIsVisible] = useState(true)
    //write function on the div that contains either the image OR the desctiption
    //this handle click function will change the state of the variable
    function handleClick() {
        setIsVisible(!isVisible);
    }

    return (
        <div className="gallery-card">
            <div onClick={() => handleClick()} className="holder">
                {isVisible ? <img src={card.path} /> : <p className="card-text">{card.description}</p>}
            </div>
            <div className="like-container">
                <button onClick={() => addLike(card.id)}>LIKE THIS<span>&#9829;</span></button>
                <p>{card.likes} People like this</p>
            </div>
        </div>
    )
}
