import React from "react";
import Image from "next/image";

const Laboratory = () => {
    return (
        <div className="relative h-screen bg-primary-A-200 flex flex-col items-center pt-8 overflow-hidden">
            <div className="absolute inset-0 top-[-500px] z-0">
                <Image src="/gelombang.svg" alt="wave" layout="fill" objectFit="cover" quality={100}/>
            </div>
            <h1 className="font-bold text-5xl text-center text-white mb-8 relative z-10">
                LABORATORY
            </h1>
            <div className="grid grid-cols-3 gap-4 relative z-10">
                <Image src="/ico.png" alt="ico" width={180} height={180} className="mx-auto" />
                <Image src="/energi.png" alt="energi" width={180} height={180} className="mx-auto" />
                <Image src="/bahan.png" alt="bahan" width={180} height={180} className="mx-auto" />
                <Image src="/foton.png" alt="foton" width={180} height={180} className="mx-auto" />
                <Image src="/foton2.png" alt="foton2" width={180} height={180} className="mx-auto" />
                <Image src="/ecs.png" alt="ecs" width={180} height={180} className="mx-auto" />
            </div>
            <div className="absolute -bottom-20 -left-10 -right-10 z-0 flex justify-between">
                <Image src="/Tata Surya.svg" alt="left-planet" width={300} height={300} className="absolute bottom-0 left-0"/>
                <Image src="/Tata Surya.svg" alt="right-planet" width={300} height={300} className="absolute bottom-0 right-0"/>
            </div>
        </div>
    );
}

export default Laboratory;
