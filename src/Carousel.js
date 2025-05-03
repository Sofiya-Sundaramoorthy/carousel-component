import { useState, useEffect } from 'react';
import { CarouselImage } from './Carousel-Image';
import './App.css';

export const CarouselContainer = ({images}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const onClickPrevious = () => {
    //    if (currentIndex > 0) {
        setCurrentIndex((currentIndex - 1) % images.length);
    //    }   
    }

    const onClickNext = () => {
        // if (currentIndex < images.length -1 ) {
            setCurrentIndex((currentIndex + 1) % images.length)
        // }
    }

    // useEffect(() => {
    //     setTimeout(() => {
    //             onClickNext();
            
    //     }, 4000);
    // }, [currentIndex])

    const onClickNavigator = (selectedIndex) => {
        setCurrentIndex(selectedIndex)
    }

    return (
        <main>
            <div className='carousel-container'>
                {/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}> */}
                {images.length &&  images.map((image, key) => {
                    return (
                        <div className='carousel-inner' key={key}>
                            <CarouselImage image={image} active={key === currentIndex} />
                        </div>
                    )
                })}
                <div className="button-container">
                    <button onClick={() => onClickPrevious()}>Left</button>
                    <button onClick={() => onClickNext()}>Right</button>
                </div>
                <div className="slider-container">
                    {images.map((_, key) => {
                       return (
                        <button key={key} className={`slider-div ${key === currentIndex ? 'active-div': ''}` } onClick={() => onClickNavigator(key)}></button>
                       )
                    })}
                </div>
                {/* </div> */}
                
            </div>
        </main>
    )
}
