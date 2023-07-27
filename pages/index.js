import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import Card from '@/components/card'
import Carousels from '@/components/carousel'
import prescription from '../assets/prescription.png'
import immune from '../assets/immune.png'
import fast from '../assets/fast.png'
import deliver from '../assets/deliver.png'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return(
    <Layout>
      <Carousels/>
     <div>
      <Card>
        <div className='text-center'>
        <h1 className='font-bold'>About Us</h1>
        <p>Village Square Pharmacy is a brand new retail pharmacy located in the heart of Glen Cove. That is not an accident as we are able to service all of Glen Cove and even Sea Cliff  to meet the demand for quality healthcare. We are poised to step up and provide exceptional, professional and individualized service to all our customers. The pharmacist, Yury Arabov, has 25 years of pharmacy experience, with 20 years of that in Glen Cove.  The pharmacy provides many essential services as well as carrying a wide selection of everyday and specialized items. </p>
        </div>
      </Card>
     </div>
     <h1 className=" text-4xl italic text-center font-light">What We Offer</h1>

     <div className="flex flex-row gap-3">
            <div className=" w-2/5 mx-auto">
                <Card noPadding={true}>
                <Image className=" mx-auto object-cover"
                src ={prescription}
                alt = ""
                height= ''
                width= ''     
                />
                   <h1 className="text-2xl text-center font-bold px-2">Transfer or Send</h1>
                   <h1 className="text-2xl text-center font-bold px-2">New Prescriptions</h1>              
                </Card>
            </div>
            <div className=" w-2/5 mx-auto">
              <Card noPadding={true}>
                <Image className=" mx-auto object-cover"
                  src ={immune}
                  alt = ""
                  height= ''
                  width= ''     
                 />
               <h1 className="text-2xl text-center font-bold px-2">We Provide</h1>
               <h1 className="text-2xl text-center font-bold px-2">Immunizations</h1> 
                  

              </Card>
            </div>
            <div className=" w-2/5 mx-auto">
              <Card noPadding={true}>
                <Image className=" mx-auto object-cover"
                  src ={fast}
                  alt = ""
                  height= ''
                  width= ''     
                 />
               <h1 className="text-2xl text-center font-bold px-2">Fast and Reliable</h1>
               <h1 className="text-2xl text-center font-bold px-2">Service</h1> 
                

              </Card>
            </div>
            <div className=" w-2/5 mx-auto">
              <Card noPadding={true}>
                <Image className="mx-auto object-cover"
                  src ={deliver}
                  alt = ""
                  height= ''
                  width= ''     
                 />
                 <h1 className="text-2xl text-center font-bold px-2">We</h1>
               <h1 className="text-2xl text-center font-bold px-2">Deliver</h1> 
                

              </Card>
            </div>
        </div>

     
    </Layout>
   )
}
