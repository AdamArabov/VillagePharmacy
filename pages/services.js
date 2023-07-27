import Layout from "@/components/layout"
import Image from "next/image"
import passport from "../assets/passport.jpg"
import services from '../assets/services.jpg'
import immune from "../assets/immune.jpg"
import otc from '../assets/otcs.png'
import deliveries from '../assets/deliveries.jpg'
import notary from '../assets/notary.jpg'
import Card from "@/components/card"


export default function Services () {
    return (
       <Layout>
        <h1 className=" text-4xl italic text-center font-light">Services</h1>
          
        <div className="flex flex-wrap gap-4 mt-3">
  <div className="w-2/5 mx-auto">
    <Card noPadding={true}>
      <div style={{ height: '300px' }}>
        <Image className="object-cover h-full object-contain" src={passport} alt="" />
      </div>
      <h1 className="text-3xl text-center font-bold px-2">Passport Photos</h1>
    </Card>
  </div>
  <div className="w-2/5 mx-auto">
    <Card noPadding={true}>
      <div style={{ height: '300px' }}>
        <Image className="object-cover h-full object-contain" src={immune} alt="" />
      </div>
      <h1 className="text-4xl text-center font-bold px-2">Immunizations</h1>
    </Card>
  </div>
  <div className="w-2/5 mx-auto">
    <Card noPadding={true}>
      <div style={{ height: '300px' }}>
        <Image className="object-cover h-full object-contain" src={services} alt="" />
      </div>
      <h1 className="text-4xl text-center font-bold px-2">DMV Vision Tests</h1>
    </Card>
  </div>
  <div className="w-2/5 mx-auto">
    <Card noPadding={true}>
      <div style={{ height: '300px' }}>
        <Image className="object-cover h-full object-contain mx-auto" src={otc} alt="" />
      </div>
      <h1 className="text-4xl text-center font-bold px-2">We Take OTC Card</h1>
    </Card>
  </div>
  <div className="w-2/5 mx-auto">
    <Card noPadding={true}>
      <div style={{ height: '300px' }}>
        <Image className="object-cover h-full object-contain" src={deliveries} alt="" />
      </div>
      <h1 className="text-4xl text-center font-bold px-2">We Deliver</h1>
    </Card>
  </div>
  <div className="w-2/5 mx-auto">
    <Card noPadding={true}>
      <div style={{ height: '300px' }}>
        <Image className="object-cover h-full object-contain" src={notary} alt="" />
      </div>
      <h1 className="text-4xl text-center font-bold px-2">Notary Public</h1>
    </Card>
  </div>
</div>

       </Layout>
    )
}