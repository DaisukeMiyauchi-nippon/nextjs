"use client";
import React from "react";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";


interface ImageSliderProps {
  imageUrl: string;
  imageUrlSub1: string;
  imageUrlSub2: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  imageUrl,
  imageUrlSub1,
  imageUrlSub2,
}) => {
  return (

    <div>
      <Carousel className="rounded-xl">
          <Image src={imageUrl} alt= "image1" width={300} height={300} className="object-contain m-auto" />
          <Image src={imageUrlSub1} alt= "image2" width={300} height={300}className="object-contain  m-auto"/>
          <Image src={imageUrlSub2} alt= "image3" width={300} height={300} className="object-contain  m-auto  "/>
      </Carousel>
    </div>
  );
};

export default ImageSlider;
