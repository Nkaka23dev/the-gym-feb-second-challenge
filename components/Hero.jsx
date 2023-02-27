import React from "react";

export default function Hero() {
  return (
    <section className="">
      <div
        className=" max-w-[120rem] mx-auto py-64 relative"
        style={{
          backgroundImage: `url("https://www.aalto.fi/sites/g/files/flghsv161/files/styles/3_0_1920w_640h_d/public/2023-01/Terveysteknologia%20aivot.png?h=6f14bdd4&itok=ORy_ai_6")`,
          backgroundColor: "#cccccc" /* Used if the image is unavailable */,
          backgroundPosition: "right" /* Center the image */,
          backgroundRepeat: "no-repeat" /* Do not repeat the image */,
          backgroundSize:
            "cover" /* Resize the background image to cover the entire container */,
        }}
      >
        <div className="max-w-[88rem]  mx-auto grid md:grid-cols-1 grid-cols-2 absolute -bottom-10 left-10 md:inset-0">
          <div className="col-start-1 space-y-4 bg-black text-white py-7 px-10">
            <div className="space-y-3">
              <h1 className="text-[2.3rem] leading-10">
                How tech is transforming diagnostics and care
              </h1>
              <p className="text-xl max-w-xl">
                Read three inspiring stories of how Aaltonians are bringing new
                hope to people who suffer from
              </p>
            </div>

            <div className="flex flex-col">
              {[
                {
                  title: "Alzheimer's disease",
                },
                { title: "ADHD" },
                { title: "Alcoholism" },
              ].map((e, idx) => {
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
              <div className="flex gap-4 items-center
              ">
             {[1,2,3,4].map((_,idx) => {
                return (
                    <div key={idx} className={`${idx === 1? "h-4 w-4" : "h-2 w-2"} bg-white rounded-full`}>
                    </div>
                )
             })}
              </div>
              <svg
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
