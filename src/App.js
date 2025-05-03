import logo from './logo.svg';
import './App.css';
import { CarouselContainer } from './Carousel.js'

function App() {
  const images = [
		{
			src: 'https://picsum.photos/id/18/2500/1667',
			primaryText: 'Image 1',
			secondaryText: 'This is the first image in the carousel.'
		},
		{
			src: 'https://picsum.photos/id/19/2500/1667',
			primaryText: 'Image 2',
			secondaryText: 'This is the second image in the carousel.'
		},
		{
			src: 'https://picsum.photos/id/54/3264/2176',
			primaryText: 'Image 3',
			secondaryText: 'This is the third image in the carousel.'
    }];

  return (
    <div className="App">
      <header className="App-header">
        <h2>Carousel</h2>
      </header>
      <main>
        <CarouselContainer images={images} />
      </main>
    </div>
  );
}

export default App;
