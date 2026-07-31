import React from 'react';

import {Header} from "@/assets/components/header";
import {Footer} from "@/assets/components/footer";
import bgImage from "@/assets/image/imageProxy.webp";
import fimage from "@/assets/image/imageProxy.jpg";
import Timage from "@/assets/image/imageProxy.png";
import Rimage from "@/assets/image/imageProxy.webp";
import BTN from "@/assets/components/btn/button";

import A from "@/assets/image/pic1.webp";
import B from "@/assets/image/pic2.webp";
import C from "@/assets/image/pic3.webp";
import D from "@/assets/image/pic4.webp";

export default function HomePage() {
  return (
    <>
      <Header/>
      <div className="w-full h-[1000px] bg-cover bg-center flex items-center justify-center text-white"style={{ backgroundImage: `url(${bgImage})` }}>

       <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-black">Welcome to My Blog</h1>
          <h2 className="text-3xl mb-6 text-black ">Learn More About My Travels Around the World</h2>
          <p className="text-xl text-center max-w-2xl mb-8 text-black ">Created in 2022, LITERACY was created to document my various travels and cultural
                                                         discoveries around the world. This is a paragraph. You can write your own content here,
                                                         and fill in the blanks. Tell the world about your business, and make this text yours.</p>
          
          
          <button className="bg-white text-black font-semibold px-8 py-3 mt-10 text-blue-600">
              Read More
          </button>
        </div> 
        </div>

        <section className=" text-black py-20 px-4  text-center">
        
          <h1 className="text-black font-bold text-3xl">Feature Stories</h1> 

          
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-20 ">
            
            <div className="w-full h-[280px]  mb-10"style={{ backgroundImage: `url(${fimage})` }}>
               <h3 className=" mb-5 text-2xl font-semibold text-gray-400 mb-1 pt-80">Sweden</h3>
               <p className="text-gray-400 mb-5">Posted on January 1, 2022</p>
               <p className="text-gray-400 mb-6 ">This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your business, and make this…</p>
               <BTN buttonVariant="bg-[#4A2E12] hover:bg-[#38220D] " text="Read More" />
            </div>

            

             <div className="w-full h-[280px] bg-gray-200 mb-10"style={{ backgroundImage: `url(${Timage})` }}>
               <h3 className=" mb-5 text-2xl font-semibold text-gray-400 mb-1 pt-80">British Columbia</h3>
                <p className="text-gray-400 mb-5">Posted on January 1, 2022</p>
               <p className="text-gray-400 mb-6 ">This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your business, and make this…</p>
               <BTN buttonVariant="bg-[#4A2E12] hover:bg-[#38220D] " text="Read More" />
            </div>
        
             <div className="w-full h-[280px] bg-gray-200 mb-4"style={{ backgroundImage: `url(${Rimage})` }}>
                 <h3 className=" mb-5 text-2xl font-semibold text-gray-400 mb-1 pt-80">British Columbia</h3>
                <p className="text-gray-400 mb-5">Posted on January 1, 2022</p>
               <p className="text-gray-400 mb-6 ">This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your business, and make this…</p>
               <BTN buttonVariant="bg-[#4A2E12] hover:bg-[#38220D] " text="Read More" />
            </div>
          
            </div>    
        </section>

        <section className="w-full bg-blue-900 py-16 px-8 md:px-16 text-white mt-100 ">
          <h1 className="font-bold text-4xl text-white mb-10 ">Follow Me</h1>
          <p className="text-lg underline hover:text-gray-200 mb-20">@literacy.blog</p>


           <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="w-full h-[280px] bg-cover bg-center" style={{ backgroundImage: `url(${A})`}}></div>
           <div className="w-full h-[280px] bg-cover bg-center" style={{ backgroundImage: `url(${B})`}}></div>
          <div className="w-full h-[280px] bg-cover bg-center" style={{ backgroundImage: `url(${C})`}}></div>
           <div className="w-full h-[280px] bg-cover bg-center" style={{ backgroundImage: `url(${D})`}}></div>
            </div>
        </section>
      
      <Footer />
    </>
  );
}