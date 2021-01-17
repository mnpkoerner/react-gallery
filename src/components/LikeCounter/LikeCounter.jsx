export default function LikeCounter({
    card
}) {
        if(card.likes === 1) {
            return(<p className="likes">1 Person Likes this</p>)
        }
        else {
            return(<p className="likes">{card.likes} People likes this</p>)
        }
}
