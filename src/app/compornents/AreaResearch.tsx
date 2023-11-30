import Link from "next/link";
import React from "react";
import Image from "next/image";
import map from "../images/kanto_map.png";

const AreaResearch = () => {
  return (
    <div>
      <Image src={map} alt ="" width ={440} height={640} />
    </div>

  );
};

export default AreaResearch;


