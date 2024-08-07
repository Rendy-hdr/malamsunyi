import React from "react";
import Image from "next/image";

const Description = () => {
    return (
        <div className="relative h-screen bg-primary-A-200 flex flex-col items-center">
            <div className="flex w-full justify-between">
                <Image src="/Rasi Bintang1.svg" alt="star1" width={100} height={100} className="flex-1"/>
                <Image src="/Rasi Bintang2.svg" alt="star2" width={100} height={100} className="flex-1"/>
                <Image src="/Rasi Bintang3.svg" alt="star3" width={100} height={100} className="flex-1"/>
                <Image src="/Rasi Bintang4.svg" alt="star4" width={100} height={100} className="flex-1"/>
                <Image src="/Rasi Bintang5.svg" alt="star5" width={100} height={100} className="flex-1"/>
            </div>
            <div className="flex justify-center items-center space-x-8 -mt-20">
                <Image src="/Deskripsi.svg" alt="deskrip" width={300} height={300} />
                <Image src="/logotf.svg" alt="logotf" width={300} height={300} />
                <Image src="/bidangminat.svg" alt="bminat" width={300} height={300} />
            </div>  
        </div>
    );
}

export default Description;
