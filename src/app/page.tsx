import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/assets/MiMologo.png";
import Hero from "../../public/assets/headquaters.jpeg";
import Hilton from '../../public/assets/hilton.jpg'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Navbar */}
      <nav className="flex items-center justify-between sm:flex-wrap bg-white sm:p-6 p-3">
        <div className="flex items-center flex-shrink-0 text-custom-green mr-6">
          <Image src={Logo} alt="MiMo Finance Logo" width={50} height={50} />

        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
          <div className="text-sm lg:flex-grow">
            <Link
              href="#about"
              className="hidden sm:block mt-4 lg:inline-block lg:mt-0 text-custom-green font-bold hover:text-custom-dark-green mr-4"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="hidden sm:block mt-4 lg:inline-block lg:mt-0 text-custom-green font-bold hover:text-custom-dark-green mr-4"
            >
              Contact
            </Link>
          </div>

          <div className="sm:ml-0 sm:mt-0 -mt-3 ml-36">
            <Link
              href="/auth"
              className="inline-block text-sm px-4 py-3 leading-none border rounded text-white bg-custom-green border-white hover:bg-white hover:border-custom-green hover:text-custom-green mt-4 lg:mt-0"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[80vh]">
        <Image
          src={Hero}
          alt="MiMo Finance Headquarters"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">
              Welcome to MiMo Finance
            </h1>
            <p className="text-xl mb-8">
              Innovative solutions for your financial needs
            </p>
            <Link
              href="/auth"
              className="inline-block bg-teal-500 text-white py-2 px-6 rounded-md hover:bg-teal-600"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="flex bg-gray-100 py-16 h-[60vh] text-center">
        <div className="container mx-auto px-4 sm:w-1/2 w-full sm:mt-24">
          <h2 className="text-3xl font-bold mb-8">About MiMo Finance</h2>
          <p className="text-lg mb-8">
            MiMo Finance is a leading financial institution dedicated to providing innovative solutions and exceptional services to our clients. With a team of experienced professionals and a commitment to excellence, we strive to help you achieve your financial goals.
          </p>
          {/* Add more content about MiMo Finance */}
        </div>
        <div className="hidden lg:block sm:w-1/2 w-full sm:h-[50vh]">
          <Image src={Hilton} alt="Hilton" className="w-full h-full object-cover" />
        </div>
      </div>




      {/* Contact Section */}
      <div id="contact" className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <p className="text-lg mb-8">
            Have a question or need assistance? Don't hesitate to reach out to
            our friendly team. We're here to help!
          </p>
          {/* Add a contact form or contact information */}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-custom-green py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-lg mb-8">
            Join MiMo Finance today and experience a new level of financial
            freedom.
          </p>
          <Link
            href="#"
            className="inline-block bg-white text-teal-500 py-2 px-6 rounded-md hover:bg-gray-200"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 sm:flex sm:items-center sm:justify-between">
          <div>
            <Image src={Logo} alt="MiMo Finance Logo" width={50} height={50} />

          </div>
          <div>
            <p>&copy; {new Date().getFullYear()} MiMo Finance. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}