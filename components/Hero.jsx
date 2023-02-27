import { CourselImages } from "@/helper/coursel";
import React, { useEffect, useState } from "react";

export default function Hero() {
  const [currImg, setcurrImg] = useState(1);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setcurrImg((currImg + 1) % CourselImages.length);
    }, 2200);

    return () => clearInterval(intervalId);
  }, [currImg]);
  return (
    <section className="mt-28 md:mt-16">
      <div
        className=" max-w-[120rem] mx-auto py-64 relative"
        style={{
          backgroundImage: `url(${CourselImages[currImg].img})`,
          backgroundColor: "#cccccc" /* Used if the image is unavailable */,
          backgroundPosition: "right" /* Center the image */,
          backgroundRepeat: "no-repeat" /* Do not repeat the image */,
          backgroundSize:
            "cover" /* Resize the background image to cover the entire container */,
        }}
      >
        <div className="max-w-[88rem]  mx-auto grid md:grid-cols-1 grid-cols-2 absolute -bottom-10 left-10 md:inset-0">
          <div className="col-start-1 space-y-4 bg-black text-white py-7 px-10 md:px-4">
            <div className="space-y-3">
              <h1 className="text-[2.3rem] md:text-[2.2rem] leading-10">
                {CourselImages[currImg].title}
              </h1>
              <p className="text-xl max-w-xl">
                {CourselImages[currImg].subTitle}
              </p>
            </div>

            <div className="flex flex-col">
              {CourselImages[currImg].arr.map((e, idx) => {
                return (
                  <div key={idx} className="flex -ml-2 gap-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20 12L4 12"
                        stroke="#ffffff"
                        stroke-width="2.3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14 18L19.9375 12.0625V12.0625C19.972 12.028 19.972 11.972 19.9375 11.9375V11.9375L14 6"
                        stroke="#ffffff"
                        stroke-width="2.3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    {e.title}
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between items-center">
              <svg
                onClick={() => currImg > 0 && setcurrImg(currImg - 1)}
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#ffffff"
                  stroke-width="0.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.26 15.53L9.73999 12L13.26 8.46997"
                  stroke="#ffffff"
                  stroke-width="0.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div
                className="flex gap-4 items-center
              "
              >
                {[1, 2, 3, 4].map((_, idx) => {
                  return (
                    <div
                      key={idx}
                      className={`${
                        idx === 1 ? "h-4 w-4" : "h-2 w-2"
                      } bg-white rounded-full`}
                    ></div>
                  );
                })}
              </div>
              <svg
                onClick={() =>
                  currImg < CourselImages.length - 1 && setcurrImg(currImg + 1)
                }
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#ffffff"
                  stroke-width="0.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.74 15.53L14.26 12L10.74 8.46997"
                  stroke="#ffffff"
                  stroke-width="0.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
