// import { Autoplay } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import banner1 from "../../assets/banner1.jpg";
// import banner2 from "../../assets/banner2.jpg";
// import banner3 from "../../assets/banner3.jpg";
// import banner4 from "../../assets/banner4.jpg";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/autoplay";

// const Banner = () => {
//   return (
//     <div>
//       <h1>Banner</h1>
//       <Swiper
//         modules={[Autoplay]}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         spaceBetween={50}
//         onSwiper={(swiper) => console.log(swiper)}
//         onSlideChange={() => console.log("slide change")}
//       >
//         <SwiperSlide>
//           <img
//             src={banner1}
//             alt="Slide 1"
//             style={{ width: "80%", height: "auto" }}
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src={banner2}
//             alt="Slide 2"
//             style={{ width: "100%", height: "auto" }}
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src={banner3}
//             alt="Slide 3"
//             style={{ width: "100%", height: "auto" }}
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src={banner4}
//             alt="Slide 4"
//             style={{ width: "100%", height: "auto" }}
//           />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Banner;

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import banner4 from "../../assets/banner4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

const Banner = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center relative">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        loop={true}
        className="w-[96%] h-full rounded-md"
      >
        {[banner1, banner2, banner3, banner4].map((banner, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={banner}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Overlay with Text */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white">
              <h1 className="text-4xl font-bold mb-4">Buy or rent properties with no commission</h1>
              <p className="text-lg mb-8">Find your dream property with ease.</p>
            </div>
            {/* Search Box */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-70 p-4 rounded-lg shadow-lg flex items-center space-x-4 w-11/12 md:w-3/4 lg:w-2/3">
              <select className="p-2 font-semibold text-white border rounded-sm">
                <option>Category</option>
              </select>
              <select className="p-2 border font-semibold text-white rounded-sm">
                <option>Location</option>
              </select>
              <button className="bg-yellow-600 p-2 rounded-sm font-semibold text-white">Advanced</button>
              <button className="bg-yellow-600 p-2 rounded-sm font-semibold text-white">Search property</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
