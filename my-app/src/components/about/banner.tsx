import Navbar from "../../components/Navbar/Navbar"
import Image from "next/image"

const Banner = () => {
    return(
        <div className="">
            <Image  src="/image 8.png" alt="gambar2" fill className="absolute z-[-1]"/>
            <Image  src="/rectangle 179.svg" alt="gambar3" width={1440} height={720} className="absolute bottom-0"/>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="font-bold text-10xl text-center text-white whitespace-nowrap">TEKNIK FISIKA</h1>
                <p className="font-bold text-4xl text-center text-white">Institut Teknologi Sepuluh Nopember</p>
            </div>

        </div>
    )
}
export default Banner