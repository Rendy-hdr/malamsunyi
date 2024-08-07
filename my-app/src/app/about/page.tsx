import React from "react";
import Banner from "@/components/about/banner";
import Description from "@/components/about/description";
import Laboratory from "@/components/about/laboratory";


const About = () => {
    return (
        <div className="overflow-x-hidden">
            <Banner />
            <div className="mt-100"> {/* Menambahkan margin top untuk memberi jarak */}
                <Description />
                <Laboratory/>
            </div>
        </div>
    )
}

export default About