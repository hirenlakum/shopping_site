import { Link } from "react-router-dom"

const AboutUs = () => {
 return(
  
    <>
        <header className="bg-blue-600 text-white p-6">
            <h1 className="text-3xl font-bold text-center">About Us</h1>
        </header>
    
        <main className="max-w-4xl mx-auto p-6">
            <section className="mt-8 bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
                <p className="text-gray-700">
                    We are a passionate team dedicated to bringing you the best products at the best prices. Our mission is to provide an unparalleled shopping experience that keeps you coming back.
                </p>
            </section>
    
            <section className="mt-6 bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                <p className="text-gray-700">
                    Founded in 2024, our eCommerce platform started as a small project aimed at solving everyday shopping challenges. Over time, we have grown into a trusted brand that customers love.
                </p>
            </section>
    
            <section className="mt-6 bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
                <ul className="list-disc pl-5 text-gray-700">
                    <li>Customer Satisfaction: We put our customers first.</li>
                    <li>Quality: We source the best products for you.</li>
                    <li>Integrity: We operate with honesty and transparency.</li>
                    <li>Innovation: We constantly improve our services.</li>
                </ul>
            </section>
    
            <section className="mt-6 bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Join Us</h2>
                <p className="text-gray-700">
                    Become part of our community! Follow us on social media and subscribe to our newsletter for the latest updates and promotions.
                </p>
            </section>
        </main>
    
        <footer className="bg-blue-600 text-white text-center p-4 mt-6">
            <p>&copy; 2024 myshop29online.gmail.com. All rights reserved.</p>
        </footer>
    
        </>
    
 )
}

export default AboutUs