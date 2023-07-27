import Footer from "./footer"
import Navbar from "./navbar"
export default function Layout({ children }) {
    return (
      <div className="max-w-[75%] mx-auto">
        <div className="container mx-auto">
          <Navbar />
        </div>
        <div>{children}</div>
        <Footer />
      </div>
    );
  }
  