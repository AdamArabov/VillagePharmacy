import Card from "@/components/card"
import Layout from "@/components/layout"
import aroma from '../assets/aroma.jpg'
import bubble from '../assets/bubble.jpg'
import cbd from '../assets/cbd.jpg'
import cream from '../assets/cream.jpg'
import perfume from '../assets/perfume.jpg'
import toys from '../assets/toys.jpg'
import Image from "next/image"


export default function Product () {
    return (
      <Layout>
      <h1 className=" text-4xl italic text-center font-light">Services</h1>
          
          <div className="flex flex-wrap gap-4 mt-3">
    <div className="w-2/5 mx-auto">
      <Card noPadding={true}>
        <div style={{ height: '300px' }}>
          <Image className="object-cover h-full object-contain" src={aroma} alt="" />
        </div>
        <h1 className="text-3xl text-center font-bold px-2">Passport Photos</h1>
      </Card>
    </div>
    <div className="w-2/5 mx-auto">
      <Card noPadding={true}>
        <div style={{ height: '300px' }}>
          <Image className="object-cover h-full object-contain" src={bubble} alt="" />
        </div>
        <h1 className="text-4xl text-center font-bold px-2">Immunizations</h1>
      </Card>
    </div>
    <div className="w-2/5 mx-auto">
      <Card noPadding={true}>
        <div style={{ height: '300px' }}>
          <Image className="object-cover h-full object-contain" src={cbd} alt="" />
        </div>
        <h1 className="text-4xl text-center font-bold px-2">DMV Vision Tests</h1>
      </Card>
    </div>
    <div className="w-2/5 mx-auto">
      <Card noPadding={true}>
        <div style={{ height: '300px' }}>
          <Image className="object-cover h-full object-contain mx-auto" src={cream} alt="" />
        </div>
        <h1 className="text-4xl text-center font-bold px-2">We Take OTC Card</h1>
      </Card>
    </div>
    <div className="w-2/5 mx-auto">
      <Card noPadding={true}>
        <div style={{ height: '300px' }}>
          <Image className="object-cover h-full object-contain" src={perfume} alt="" />
        </div>
        <h1 className="text-4xl text-center font-bold px-2">We Deliver</h1>
      </Card>
    </div>
    <div className="w-2/5 mx-auto">
      <Card noPadding={true}>
        <div style={{ height: '300px' }}>
          <Image className="object-cover h-full object-contain" src={toys} alt="" />
        </div>
        <h1 className="text-4xl text-center font-bold px-2">Notary Public</h1>
      </Card>
    </div>
  </div>          
        <div className="flex flex-wrap gap-4 mt-3">
  <div className="w-2/5 mx-auto">
    <Card noPadding={true}>
      <div style={{ height: '300px' }}>
        <Image className="object-cover h-full object-contain" src={toys} alt="" />
      </div>
      <h1 className="text-3xl text-center font-bold px-2">Passport Photos</h1>
    </Card>
  </div>
  <div className="w-2/5 mx-auto">
    <Card noPadding={true}>
      <div style={{ height: '300px' }}>
        <Image className="object-cover h-full object-contain" src={toys} alt="" />
      </div>
      <h1 className="text-4xl text-center font-bold px-2">Immunizations</h1>
    </Card>
  </div>
  <div className="w-2/5 mx-auto">
    <Card noPadding={true}>
      <div style={{ height: '300px' }}>
        <Image className="object-cover h-full object-contain" src={toys} alt="" />
      </div>
      <h1 className="text-4xl text-center font-bold px-2">DMV Vision Tests</h1>
    </Card>
  </div>
  <div className="w-2/5 mx-auto">
    <Card noPadding={true}>
      <div style={{ height: '300px' }}>
        <Image className="object-cover h-full object-contain mx-auto" src={toys} alt="" />
      </div>
      <h1 className="text-4xl text-center font-bold px-2">We Take OTC Card</h1>
    </Card>
  </div>
  <div className="w-2/5 mx-auto">
    <Card noPadding={true}>
      <div style={{ height: '300px' }}>
        <Image className="object-cover h-full object-contain" src={toys} alt="" />
      </div>
      <h1 className="text-4xl text-center font-bold px-2">We Deliver</h1>
    </Card>
  </div>
  <div className="w-2/5 mx-auto">
    <Card noPadding={true}>
      <div style={{ height: '300px' }}>
        <Image className="object-cover h-full object-contain" src={toys} alt="" />
      </div>
      <h1 className="text-4xl text-center font-bold px-2">Notary Public</h1>
    </Card>
  </div>
</div>

  
       
      </Layout>
    )
}