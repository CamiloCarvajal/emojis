import ImageEmoji from "../atoms/ImageEmoji";
import EmojiDescription from "../molecules/EmojiDescription";


function EmojiCard({ path, name, description }) {
    return (
        <div className="emoji-card">
            <ImageEmoji source={path} alt={name} />
            <EmojiDescription name={name} description={description}/>
        </div>
    )
}

export default EmojiCard;