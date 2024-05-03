import Banner from "./Banner.jsx";
import { bodyItem } from "../constants";
import { footer } from "../constants";
export default function BodySection() {
  return (
    <>
      <div className=" bg-gray-100 py-10">
        <Banner />
      </div>
      <div className="text-center">
        <div className=" bg-[rgb(153,31,72)] py-10 mb-10 text-white px-2">
          <h2 className="text-3xl md:text-5xl lg:text-6xl">
            {bodyItem.title2}
          </h2>
          <p className="text-sm py-10 w-[85%] mx-auto">{bodyItem.subtitle}</p>
          <div className="flex flex-col sm:flex-row mx-auto gap-6 items-center justify-center">
            <a href="" className="uppercase text-sm px-3 py-2 border max-w-fit">
              learn more about us
            </a>
            <a href="" className="uppercase text-sm px-3 py-2 border max-w-fit">
              contact us today
            </a>
          </div>
        </div>
        <div className="py-10 flex flex-col gap-10">
          <p>{bodyItem.para1}</p>
          <p>{bodyItem.para2}</p>
          <p>{bodyItem.para3}</p>
        </div>
        <div className="bg-gray-500 h-1 my-10"></div>
        <div>
          <h2 className="text-[rgb(153,31,72)] my-10 text-3xl md:text-4xl lg:text-5xl">
            {bodyItem.title2}
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl">{bodyItem.addresh}</p>
          <p className="text-xl md:text-2xl lg:text-3xl">
            Phone:{" " + bodyItem.Phone}
          </p>
        </div>

        <footer className="text-sm my-10 bg-gray-600 text-white py-3"> {footer.text}</footer>
      </div>
    </>
  );
}
