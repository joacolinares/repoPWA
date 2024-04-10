"use client";

import Image from "next/image";
import fotoImg from "@/assets/imgs/photoProfile.png";
import { useRef, useState } from "react";
import CamaraFoto from "@/assets/imgs/camera-reverse.png";
import convertBase64 from "@/utils/convertBase64";

export interface ProfilePicProps {
  src?: string;
}

export default function ProfilePic({ src }: ProfilePicProps) {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedImageSrc, setSelectedImageSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Estados y funciones para manejar el show/hide del modal y otro estado para almacenar la imagen seleccionada
  const handleFolderSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageInsert = event.target.files![0];

    if (imageInsert) {
      setSelectedImage(imageInsert);
      const base64 = await convertBase64(imageInsert) as string;
      setSelectedImageSrc(base64);
    } 

  };

  
  const handleImageClick = () => {
    if(fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="container-img relative border border-1 border-[#39307b] mb-4">
      <Image
        src={selectedImageSrc || fotoImg}
        className="photoUser object-cover rounded-[50%] h-[160px]"
        alt=""
        width={160}
        height={160}
      />
      <div className="camara-container bg-[#7A2FF4] p-2 rounded-[20px] w-[32px] absolute right-0 bottom-4">
        <Image
          className="camara"
          src={CamaraFoto}
          alt=""
          onClick={handleImageClick}
          width={18}
          height={18}
        />
      </div>

      <input
        id="folder-select"
        type="file"
        // webkitdirectory="true"
        onChange={handleFolderSelect}
        style={{ display: "none" }}
        ref={fileInputRef}
        accept="image/png, image/jpeg, image/webp"
      />
    </div>
  );
}
