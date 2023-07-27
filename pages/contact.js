import Card from "@/components/card"
import Layout from "@/components/layout"

export default function Contact () {
    return (
        <Layout>
           <Card>
            <div className="text-center">
            <h1 className="font-bold">BUSINESS HOURS</h1>
            <p>Monday-Friday</p>
            <p>9:00am - 6:30pm</p>
            <p>Saturday</p>
            <p>9:00am - 5:00pm</p>
            <p>Sunday</p>
            <p className="font-semibold">CLOSED</p>

            </div>
            <div className="text-center">
                <br/>
            <h1 className="font-bold">CONTACT US</h1>
            <p>Phone: 516-201-2820</p>
            <p>Fax: 516-201-0819</p>
            <p>Email: VillagesquareRX@gmail.com</p>
            </div>
           </Card>
       
        </Layout>
    )
}