export default function GalleryList({
    gallery
}){
    console.log('gallery in GalleryList', gallery)
    return (
        <div className="gallery-container">
        {gallery.map((card)=>(
            <div key={card.id}>
            <p>{card.path}</p>
            <p>{card.description}</p>
            <p>{card.likes}</p>
            </div>
        ))}
        </div>
    )
}
