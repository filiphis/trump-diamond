import Image from "next/image";
import Link from "next/link";
import React from "react";

const LandingPage = () => {
  // Image Name === product-image.webp
  // Image Width & Height = 580x1100 -> Proporção = 1x2
  const Title = "TRUMP DIAMOND";
  const OrderLink = "submit";
  const Description = (
    <p className="text-paragraph text-[#ffffff]">
      Trump Diamond is a symbol of unwavering patriotism and a testament to the
      enduring spirit of the American people. Crafted with precision and pride,
      this diamond stands as a powerful symbol for every Trump supporter across
      the world.
    </p>
  );
  const titleColor = "#ffffff";
  const bgButton = "#FACC15";
  const bgButtonHover = "#EAB308";

  return (
    <>
      {/* Mobile */}
      <section className="md:hidden section-col ">
        <h1
          className={`font-wix heading-aboveTheFold flex justify-center text-[#ffffff]`}
        >
          {Title}
        </h1>

        <div className="min-[320px]:max-w-[180px] min-[400px]:max-w-[360px] w-[100%] mx-auto ">
          <Image
            src={`/images/product-image.webp`}
            alt={Title}
            width={300}
            height={500}
            priority
          />
        </div>

        {Description}

        <div className="flex flex-col items-center gap-1 w-[100%]">
          <span>go to official website and</span>
          <Link
            href={OrderLink}
            className={`bg-[#FACC15] hover:bg-[#296c52] text-[#000] font-bold py-3 w-[100%] rounded inline-flex items-center flex justify-center items-center`}
          >
            <span>ORDER NOW</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="fill-current w-6 h-6 ml-1"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Desktop */}
      <section className="hidden md:flex section-col">
        <h1
          className={`font-wix heading-aboveTheFold flex justify-center text-[#ffffff]`}
        >
          {Title}
        </h1>

        <div className="grid grid-cols-2 items-center max-w-6xl">
          <div className="md:max-w-[300px] lg:max-w-[340px] w-[80%] mx-auto">
            <Image
              src={`/images/product-image.webp`}
              alt={Title}
              width={400}
              height={400}
              priority
            />
          </div>

          <div className="section-col-content justify-center md:gap-8 lg:gap-16">
            {Description}

            <div className="flex flex-col items-center gap-1 w-[100%]">
              <span>go to official website and</span>
              <Link
                href={OrderLink}
                className={`bg-[#FACC15] hover:bg-[#EAB308] text-[#000] font-bold py-3 w-[100%] rounded inline-flex items-center flex justify-center items-center`}
              >
                <span>ORDER NOW</span>
                {/* <svg className="fill-current w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg> */}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="fill-current w-6 h-6 ml-1"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
