import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Gallery({ photos }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,       
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    arrows: true,        
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="p-4 sm:p-8">
      <h2 className="text-xl font-bold text-center mb-4">Photo Gallery</h2>
      <Slider {...settings}>
        {photos.map((photo) => (
          <div key={photo.id} className="px-2">
            <img
              src={photo.url}
              alt={`Photo ${photo.id}`}
              className="rounded-lg shadow w-full h-auto object-cover"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
