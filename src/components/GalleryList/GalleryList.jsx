import GalleryItem from '../GalleryItem/GalleryItem.jsx'

export default function GalleryList({
    gallery,
    addLike
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
            />)
            })}
        </div>
    )
}
