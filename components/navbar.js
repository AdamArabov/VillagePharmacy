import Link from "next/link";
import Card from "./card";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../assets/logo.png"

export default function Navbar () {
    const router = useRouter();
    const {pathname} = router;
    const activeElement = "flex-1 bg-red-800  rounded-md text-white "
    const nonActiveElement = "flex-1 hover:bg-red-800 rounded-md hover:text-white"
    return (
        <div className="w-75% ">
             <div className="flex justify-between mt-4 ">
             <div>
                    <Image 
                    src= {logo}
                    alt=''
                    width={125}
                    height={100}
                    />
                </div>
            <div className="mt-5 font-semibold">
            <p>100 Village Sq ste 130, Glen Cove, NY 11542</p>
            <p>Tel. 516 201-2820</p>
            <p> Fax: 516-201-0819 | villagesquarerx@gmail.com</p>
            </div>
            </div>
            
            <h1 className="text-center">Village Square Pharmacy</h1>
        <Card>
            <div className="flex justify-between text-center">
                <Link href={"/"} className={pathname === '/' ? activeElement: nonActiveElement}>Home</Link>
                <Link href={"/services"} className= {pathname === '/services' ? activeElement:nonActiveElement}>Services</Link>
                <Link href={"/products"} className= {pathname === '/products' ? activeElement:nonActiveElement}>Products</Link>
                <Link href={"/photos"} className= {pathname === '/photos' ? activeElement:nonActiveElement}>Photos</Link>
                < Link href={"/contact" }className= {pathname === '/contact' ? activeElement:nonActiveElement}>Contact Us</Link>
            </div>
        </Card>
        </div>
    )
}

//