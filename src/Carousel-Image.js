export const CarouselImage = ({image, active}) => {
    return (
        <>
             <img className={`carousel-image ${active ? 'active-image': ''}`} src={image.src} alt={image.text} />
        </>
    )
}
