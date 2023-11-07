import React from "react";
import Image from "next/image";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";


const Home = () => {

  
 
  return (
    <main className="py-10">
      <section className="mx-auto md:w-[80%] w-[90%] ">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10  items-center">
          <div className="w-full ">
            <h1 className="lg:text-5xl md:text-4xl text-4xl">
              We help you{" "}
              <span className="text-primary-main font-extrabold">Ace</span> your
              Frontend Interviews.
            </h1>
            <p className="text-xl text-gray-500 py-4">
              Ace your frontend interviews and land your dream Job in tech!
            </p>
            <ButtonPrimary
              link="/sign-up"
              text="Get Started"
              classes="bg-black text-white hover:bg-gray-900 capitalize text-xl"
              arrow={true}
            />
          </div>
          <div className="w-full">
            <Image
              src={"/assets/home/dummy.jpg"}
              height={200}
              width={200}
              alt="dashbaord"
              className=" object-cover h-full w-full"
            />
          </div>
        </div>
      </section>
      <section className="my-20 bg-black w-full py-10 min-h-[80vh]">
        <div className="mx-auto w-[80%] h-[60vh] flex justify-center items-center">
            <div className="text-center">
              <span className="text-white text-3xl text-center">
             
              "You can never understand everything. But, you should push yourself to understand the system."
              </span>
              <div className="flex justify-center items-center py-4">
                <Image
                  src={'/assets/home/node-creator.jpeg'}
                  height={100}
                  width={100}
                  alt="node js creator"
                  className="h-20 w-20 rounded-full object-cover"
                />
                <div className="flex flex-col items-center  mx-4">
               <span className="text-white"> Ryan Dahl </span>
               <span className="text-gray-200">Creator of Node JS</span>
                </div>
              </div>
            </div>
        </div>
      </section>
      <section className="mt-20">
        <div className="mx-auto w-[80%]">
            <div className="bg-black py-20 px-20 text-center rounded-3xl">
              <h1 className="text-white text-4xl mb-10">
              Try to digitize your handwritten stickies today with Miro
              </h1>
              <ButtonPrimary
              link="/sign-up"
              text="Get Started"
              classes="bg-primary-main text-white hover:bg-gray-900 capitalize text-xl"
              arrow={true}
            />
            </div>
        </div>
      </section>


    </main>
  );
};

export default Home;
