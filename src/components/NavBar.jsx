import { navItem } from "../constants";
export default function NavBar() {
  return (
    <>
      <div>
        <h1 className="text-[rgb(153,31,72)] text-4xl md:text-6xl lg:text-7xl mt-10">
          Family Wellness
        </h1>
        <h4 className="uppercase mt-1 text-gray-600 text-sm md:text-xl lg:text-2xl mb-10">
          MASSAGE Therapy
        </h4>
      </div>
      <div className="  text-center   mx-auto">
        <ul className="flex justify-around text-center bg-gray-500 text-white  ">
          {navItem.map((item, index) => (
            <li key={index} className="hover:bg-[rgb(153,31,72)] w-full py-2">
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
