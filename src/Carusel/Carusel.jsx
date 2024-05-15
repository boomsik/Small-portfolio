import Carousel from "react-bootstrap/Carousel";

function DarkVariantExample({ image1, image2, image3, image4 }) {
    return (
        <Carousel data-bs-theme="dark" h-200>
            <Carousel.Item h-200>
                <img
                    className="d-block w-100 h-200"
                    src={image1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item h-200>
                <img
                    className="d-block w-100 h-200"
                    src={image2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item h-200>
                <img
                    className="d-block w-100 h-200"
                    src={image3}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item h-200>
                <img
                    className="d-block w-100 h-200"
                    src={image4}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default DarkVariantExample;
