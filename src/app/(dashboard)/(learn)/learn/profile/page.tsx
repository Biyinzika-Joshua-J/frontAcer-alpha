import React from "react";
import Image from "next/image";
import HeatMap from "@/components/heatmap/HeatMap";


const Profile = () => {
  return (
    <div>
      <div className="h-56 w-full bg-black relative">
        <div className="profile-bg__image"></div>
        <div className="absolute profile-image ">
          <Image
            src={
              "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg"
            }
            alt="profile image"
            width={200}
            height={200}
            className="h-56 w-56 object-cover rounded-full"
          />
        </div>
      </div>

      <div className="pt-36">
        heat map goes here
       <HeatMap/>
      </div>
    </div>
  );
};

export default Profile;
