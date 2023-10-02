import React from "react";
// import Data from "../data.json";

function Card() {
  return (
    <div className="bg-gray-300  md:w-[70%] lg:w-[50%] mx-auto md:flex md:mt-[12%] text-center rounded-xl bg-White font-Hanken shadow-xl shadow-Lightlavender font-medium">
      <div className=" md:mx-0  md:w-[50%] pt-5 mt-[-20px] md:mt-0 bg-Lightroyalblue rounded-2xl  text-White">
        <h1 className="pt-4 md:pt-0 text-White/60">Your Result</h1>
        <div className="rounded-[100%] w-[100px] h-[100px] bg-gradient-to-b from-Persianblue/90 mx-auto my-4">
          <section className="text-center pt-5">
            <p className="text-4xl font-bold">76</p>
            <p className="text-White/60">of 100</p>
          </section>
        </div>
        <h2 className="text-lg">Great</h2>
        <p className="text-center  pb-5 text-White/60 w-[60%] text-sm mx-auto">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div className="mx-5  md:w-[50%] pt-5 ">
        <p className="text-start w-[80%] mx-auto">Summary</p>
        {/* {Data.map((item, key) => {
          return (
            <div
              key={key}
              className="flex my-5 justify-center w-[85%] mx-auto bg-White rounded-md"
            >
              <img src={item.icon} alt={item.category} />
              <p className="mx-4">{item.category}</p>
              <p>{item.score}/100</p>
            </div>
          );
        })} */}
        <section>
          <div className="flex my-5 justify-center w-[95%] mx-auto bg-Lightred/10 rounded-md">
            <img src="./assets/images/icon-reaction.svg" alt="Reaction" />
            <p className="mx-4 text-Lightred">Reaction</p>
            <p className="ml-20">
              80/<span className="text-Darkgrayblue">100</span>
            </p>
          </div>
          <div className="flex my-5 justify-center w-[95%] mx-auto bg-Lightred/10 rounded-md">
            <img src="./assets/images/icon-memory.svg" alt="Memory" />
            <p className="mx-4 text-Orangeyyellow">Memory</p>
            <p className="ml-20">
              92/<span className="text-Darkgrayblue">100</span>
            </p>
          </div>
          <div className="flex my-5 justify-center w-[95%] mx-auto bg-Greenteal/10 rounded-md">
            <img src="./assets/images/icon-verbal.svg" alt="Verbal" />
            <p className="mx-4 text-Greenteal">Verbal</p>
            <p className="ml-20">
              61/<span className="text-Darkgrayblue">100</span>
            </p>
          </div>
          <div className="flex my-5 justify-center w-[95%] mx-auto bg-Greenteal/10 rounded-md">
            <img src="./assets/images/icon-visual.svg" alt="Visual" />
            <p className="mx-4 text-Cobaltblue">Visual</p>
            <p className="ml-20">
              72/<span className="text-Darkgrayblue">100</span>
            </p>
          </div>
        </section>
        <button className="rounded-xl w-[50%] text-white bg-Darkgrayblue text-White font-semibold h-[33px] my-5 hover:cursor-pointer">
          Continue
        </button>
      </div>
    </div>
  );
}

export default Card;
