/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import iphone from '../../assests/banners/iphone.jpg';
import laptop from '../../assests/banners/laptop.png';
import flight from '../../assests/banners/flight.jpeg'


export const PreviousBtn = ({ className, onClick }) => {
    return (
        <div className={className} onClick={onClick}>
            <ArrowBackIosIcon />
        </div>
    );
};

export const NextBtn = ({ className, onClick }) => {
    return (
        <div className={className} onClick={onClick}>
            <ArrowForwardIosIcon />
        </div>
    );
};

const Banner = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PreviousBtn />,
        nextArrow: <NextBtn />,
    };

    const banners = [
        iphone,
        laptop,
        flight,
    ];

    return (
        <>
            <section className="w-full rounded-sm shadow p-0 overflow-hidden mt-3 sm:m-2">
                <Slider {...settings}>
                    {banners.map((el, i) => (
                        <img
                            draggable="False"
                            className="h-[150px] sm:h-[240px] w-full object-cover "
                            src={el}
                            alt="banner"
                            key={i}
                        />
                    ))}
                </Slider>
            </section>
        </>
    );
};

export default Banner;
