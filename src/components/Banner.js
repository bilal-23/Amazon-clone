import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Banner() {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-10" />
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
                showArrows={false}
            >
                <div>
                    <img loading="lazy" src="https://m.media-amazon.com/images/I/61zLzPoxv9L._SX3000_.jpg" alt="banner" />
                </div>
                <div>
                    <img loading="lazy" src="https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg" alt="banner" />
                </div>
                <div>
                    <img loading="lazy" src="https://m.media-amazon.com/images/I/51PL6-WGyML._SX3000_.jpg" alt="banner" />
                </div>
                <div>
                    <img loading="lazy" src="https://links.papareact.com/gi1" alt="banner" />
                </div>
                <div>
                    <img loading="lazy" src="https://links.papareact.com/7ma" alt="banner" />
                </div>
                <div>
                    <img loading="lazy" src="https://m.media-amazon.com/images/I/71i723QTb+L._SX3000_.jpg" alt="banner" />
                </div>

            </Carousel>

        </div>
    )
}
