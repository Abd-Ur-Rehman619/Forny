import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-800 py-6 text-white">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-auto">
              <h3 className="text-xl font-bold mb-4">Company</h3>
              <ul className="mb-4">
                <li className="mt-2">
                  <Link to="/about" className="hover:text-gray-300">
                    About Us
                  </Link>
                </li>
                <li className="mt-2">
                  <Link to="/contact" className="hover:text-gray-300">
                    Contact Us
                  </Link>
                </li>
                <li className="mt-2">
                  <Link to="/privacy-policy" className="hover:text-gray-300">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-auto">
              <h3 className="text-xl font-bold mb-4">Support</h3>
              <ul className="mb-4">
                <li className="mt-2">
                  <Link to="/faq" className="hover:text-gray-300">
                    FAQ
                  </Link>
                </li>
                <li className="mt-2">
                  <Link to="/terms-of-service" className="hover:text-gray-300">
                    Terms of Service
                  </Link>
                </li>
                <li className="mt-2">
                  <Link to="/refund-policy" className="hover:text-gray-300">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-auto">
              <h3 className="text-xl font-bold mb-4">Social</h3>
              <ul className="mb-4">
                <li className="mt-2">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gray-300"
                  >
                    Facebook
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gray-300"
                  >
                    Twitter
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gray-300"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-6">
            <p className="text-center text-sm">
              &copy; {new Date().getFullYear()} Company Name. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
