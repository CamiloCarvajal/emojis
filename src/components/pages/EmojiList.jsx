import { emojis } from "../../assets/js/data"
import EmojiCard from "../organisms/EmojiCard"

function EmojiList() {

    return (
        <>
            {
                emojis.map((emoji) => {
                    return (
                        <EmojiCard
                            name={emoji.name}
                            path={emoji.imageUri}
                            description={emoji.description} />
                    )
                })
            }
        </>
    )
}

export default EmojiList