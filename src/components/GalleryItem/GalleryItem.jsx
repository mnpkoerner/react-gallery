import { useState } from 'react';
import LikeCounter from '../LikeCounter/LikeCounter';

export default function GalleryItem({
    card,
    addLike,
    deleteCard,
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
                {/* <p id="likes">{card.likes} People like this</p> */}
                <LikeCounter
                    card={card}
                    />
                <button
            id="deleteButton"
            onClick={()=> deleteCard(card.id)}>X</button>
            </div>
        </div>
    )
}
