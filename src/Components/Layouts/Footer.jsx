import { TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Send from "../../assets/send.png";
export default function Footer() {
  return (
    <>
      <footer className="bg-black py-6 flex justify-center text-white">
        <div className="container grid grid-cols-5">
          <div>
            <p>Exclusive</p>
            <p>Subscribe</p>
            <p>Get 10% off your first order</p>

            <TextField
              hiddenLabel
              size={"small"}
              className="bg-black outline-white border-1 placeholder-white"
              placeholder="Enter you Email"
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <img
                      src={Send}
                      alt="Custom Icon"
                      style={{ width: "24px", height: "24px" }}
                    />
                  </IconButton>
                ),
              }}
            />
          </div>
          <div>b</div>
          <div>c</div>
          <div>d</div>
          <div>e</div>
        </div>
      </footer>
    </>
  );
}

{
  /* <div className="flex flex-wrap justify-between">
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
</div> */
}
