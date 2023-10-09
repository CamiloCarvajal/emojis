
function ImageEmoji({ source, alt }) {

    return (
        <img
            className="emoji-image"
            src={require(`../../assets/img/${source}`)}
            // src={enojado}
            alt={alt} 
            height={50}/>
    )
}

export default ImageEmoji
