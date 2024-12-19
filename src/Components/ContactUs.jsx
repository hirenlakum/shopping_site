const ContactUs = () => {
 return(
 <>


    <header className="bg-blue-600 text-white p-6">
        <h1 className="text-3xl font-bold text-center">Contact Us</h1>
    </header>

    <main className="max-w-4xl mx-auto p-6">
        <section className="mt-8 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-6">
                We’d love to hear from you! Please fill out the form below, and we’ll get back to you as soon as possible.
            </p>

            <form action="#" method="POST">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700" for="name">Name</label>
                        <input type="text" id="name" name="name" required className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" placeholder="Your Name"/>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700" for="email">Email</label>
                        <input type="email" id="email" name="email" required className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" placeholder="Your Email"/>
                    </div>
                </div>
                <div className="mt-4">
                    <label className="block mb-2 text-sm font-medium text-gray-700" for="message">Message</label>
                    <textarea id="message" name="message" required className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" rows="4" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="mt-6 w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-200">Send Message</button>
            </form>
        </section>

        <section className="mt-8 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-2"><strong>Email:</strong> myshophelp@gmail.com</p>
            <p className="text-gray-700 mb-2"><strong>Phone:</strong> (+91) 9978019893</p>
            <p className="text-gray-700"><strong>Address:</strong> 123 Ahemdabad, Gujrat , India</p>
        </section>
    </main>

    <footer className="bg-blue-600 text-white text-center p-4 mt-6">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
    </footer>



 </>
 )
}

export default ContactUs