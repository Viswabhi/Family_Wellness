import { img } from "../constants";
import { Carousel } from "antd";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const Banner = () => (
  <Carousel autoplay autoplaySpeed-200 easing="linear" effect="scrollx">
    {img.map((image, i) => (
      <div key={i} style={contentStyle}>
        <img
          src={image}
          alt={`carousel-${i}`}
          className="w-full h-[500px] object-cover object-center"
        />
      </div>
    ))}
  </Carousel>
);
export default Banner;
