import GalleryItem from '../GalleryItem/GalleryItem.jsx'

export default function GalleryList({
    gallery,
    addLike,
    deleteCard
}){
    console.log('gallery in GalleryList', gallery)
    return (
        <div className="gallery-container">
        {gallery.map((card)=>{
            return (
            <GalleryItem
                key={card.id}
                card={card}
                addLike={addLike}
                deleteCard={deleteCard}
            />)
            })}
        </div>
    )
}
