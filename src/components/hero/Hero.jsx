import "./Hero.css";
import { motion } from "framer-motion";
import logo_site from "../../assets/logo.png";
import rocket from '../../assets/inter-logo.png';
import img_3 from "../../assets/small.png";
import Banner from "../Banner/Banner";
import Banner1 from "../Banner1/Banner1";
import cart_icon from "../../assets/cart.png";
import heart_icon from "../../assets/heart.png";
import slide2 from "../../assets/slide2.png"
import slide3 from "../../assets/slide3.png"
import slide4 from "../../assets/slide4.png"
import slide5 from "../../assets/slide5.png"
import slide6 from "../../assets/slide6.png"
import Banner2 from "../Banner2/Banner2";
import OnlyHead from "../OnlyHead/OnlyHead";
import { fadeIn, slideLeft, slideRight, staggerContainer } from "../../utils/animations";


// const Hero = () => {
//   return (
//     <div>
//       <section className="hero">
//         <div className="hero-main">
//           <div className="fl-display">
//             <div className="hero-content">
//               {/* <p className="sale-text">Big Saving Days Sale</p>
//           <h1>Electrician Service at Makan Care</h1>
//           <p className="price">Starting at only <span>$59.00</span></p>
//           <button className="shop-btn">SHOP NOW</button> */}
//               <>
//                 <Banner />
//               </>
//             </div>
//             <div className="hero-image">
//               <a href="#">
//                 <>
//                   <Banner1 />
//                 </>
//               </a>
//               <a href="#">
//                 <>
//                   <Banner2 />
//                 </>
//               </a>
//             </div>
//           </div>
//           <div>
//             <div className="service-gallery">
//               <img src={img_3} alt="Service 1" />
//               <img src={slide2} alt="Service 2" />
//               <img src={slide3} alt="Service 3" />
//               <img src={slide4} alt="Service 4" />
//               <img src={slide5} alt="Service 5" />
//               <img src={slide6} alt="Service 6" />
//             </div>
//           </div>
//         </div>

//         {/* <div className="hero-side">
//           <div className="service-box">
//             <img src={img_2} alt="Bathroom Cleaning" />
//             <div className="service-info">
//               <h3>Bathroom Cleaning</h3>
//               <p className="price">$129.00</p>
//               <button className="book-btn">BOOK NOW</button>
//             </div>
//           </div>
//           <div className="service-box">
//             <img src={img_2} alt="Kitchen Cleaning" />
//             <div className="service-info">
//               <h3>Kitchen Cleaning</h3>
//               <p className="price">$129.00</p>
//               <button className="book-btn">BOOK NOW</button>
//             </div>
//           </div>
//           <div className="service-box">
//             <img src={img_2} alt="Bathroom Cleaning" />
//             <div className="service-info">
//               <h3>Bathroom Cleaning</h3>
//               <p className="price">$129.00</p>
//               <button className="book-btn">BOOK NOW</button>
//             </div>
//           </div>
//           <div className="service-box">
//             <img src={img_2} alt="Kitchen Cleaning" />
//             <div className="service-info">
//               <h3>Kitchen Cleaning</h3>
//               <p className="price">$129.00</p>
//               <button className="book-btn">BOOK NOW</button>
//             </div>
//           </div>
//         </div> */}
//       </section>
//     </div>
//   );
// };

const Hero = () => {
  const images = [img_3, slide2, slide3, slide4, slide5, slide6];

  return (
    <>
      <div className="w-full py-5">
        <div className="max-w-7xl mx-auto p-4 h-full">
          <div className="flex flex-wrap -mx-2 h-full gap-4">
            <motion.div
              className="w-full sm:w-8/12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideLeft}
            >
              <Banner />
            </motion.div>
            <motion.div
              className="w-full sm:w-4/12 flex-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideRight}
            >
              <div className="flex flex-col h-full">
                <div className="flex-1 mb-4">
                  <Banner1 />
                </div>
                <div className="flex-1">
                  <Banner2 />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="max-w-7xl mx-auto p-4 h-full">
          <motion.div
            className="flex flex-wrap -mx-2 h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="w-6/12 sm:w-4/12 md:w-2/12 p-2"
                variants={fadeIn}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <img
                  className="w-full h-26 object-cover rounded-lg cursor-pointer"
                  src={image}
                  alt={`Service ${index + 1}`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Hero;
