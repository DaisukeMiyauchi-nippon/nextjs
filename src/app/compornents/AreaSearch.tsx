"use client"
import Link from "next/link";
import React, { useState } from 'react';
import Image from "next/image";
import map from "../images/kanto_map.png";
import { Button } from "@material-tailwind/react";

const Popup = () => {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const handleCheckboxChange = (event: { target: { id: any; checked: any; }; }) => {
    const { id, checked } = event.target;
    setCheckedItems({ ...checkedItems, [id]: checked });
  };

  const HandleSearch = () => {
    const selectedPrefectures = Object.keys(checkedItems).filter((key) => checkedItems[key]);
    const selectedURL = `search?area=${selectedPrefectures.join(',')}`;
    window.open(selectedURL, '_blank');
  };

  return (
    <div>
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"></div>
        <input type="checkbox" id="tokyo" onChange={handleCheckboxChange}/>東京
        <input type="checkbox" id="kanagawa" onChange={handleCheckboxChange}/>神奈川
        <input type="checkbox" id="saitama" onChange={handleCheckboxChange}/>埼玉
        <input type="checkbox" id="chiba" onChange={handleCheckboxChange}/>千葉
        <input type="checkbox" id ="yamanashi" onChange={handleCheckboxChange}/>山梨

      <button className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
        onClick={HandleSearch}
        >検索</button>
    </div>
    </div>
    
  );
};

const AreaSearch = () => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div>
      <div>
        <button
        onClick={togglePopup}
        >
        全国</button>
        {showPopup && <Popup />}
      </div>
      </div>
  );
};

export default AreaSearch;
