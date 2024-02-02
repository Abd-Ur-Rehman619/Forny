import { TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Send from "../../assets/send.png";
import appStore from "../../assets/appstore.png";
import googlePlay from "../../assets/googlePlay.png";
import facebook from "../../assets/iconFacebook.png";
import instagram from "../../assets/iconinstagram.png";
import Linkedin from "../../assets/iconLinkedin.png";
import twitter from "../../assets/iconTwitter.png";
import qrcode from "../../assets/QrCode.png";
export default function Footer() {
  return (
    <>
      <footer className="bg-black py-6 flex justify-center text-white">
        <div className="container grid grid-cols-5">
          <div>
            <p className="font-bold text-2xl font-sans mb-5 mt-5">Exclusive</p>
            <p className="font-medium text-lg font-sans mb-5 mt-5">Subscribe</p>
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
          <div>
            <p className="font-medium text-lg font-sans mb-5 mt-5">Support</p>
            <p className="font-sans mb-1 mt-5">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="font-sans mb-5 mt-5">exclusive@gmail.com</p>
            <p className="font-sans mb-5 mt-5">+88015-88888-9999</p>
          </div>
          <div>
            <p className="font-medium text-lg font-sans mb-5 mt-5">Account</p>
            <p className="font-sans mb-5 mt-5">My Account</p>
            <p className="font-sans mb-5 mt-5">Login / Register</p>
            <p className="font-sans mb-5 mt-5">Cart</p>
            <p className="font-sans mb-5 mt-5">Wishlist</p>
            <p className="font-sans mb-5 mt-5">Shop</p>
          </div>
          <div>
            <p className="font-medium text-lg font-sans mb-5 mt-5">
              Quick Link
            </p>
            <p className="font-sans mb-5 mt-5">Privacy Policy</p>
            <p className="font-sans mb-5 mt-5">Terms Of Use</p>
            <p className="font-sans mb-5 mt-5">FAQ</p>
            <p className="font-sans mb-5 mt-5">Contact</p>
          </div>
          <div>
            <p className="font-medium text-lg font-sans mb-5 mt-5">
              Download App
            </p>
            <p className="font-sans mb-5 mt-5">
              Save $3 with App New User Only
            </p>
            <div className="flex  mb-5 mt-5">
              <IconButton>
                <img src={qrcode} alt="" />
              </IconButton>
              <div>
                <IconButton>
                  <img src={googlePlay} alt="" />
                </IconButton>
                <IconButton>
                  <img src={appStore} alt="" />
                </IconButton>
              </div>
            </div>
            <div className="grid grid-cols-4  mb-5 mt-5">
              <IconButton>
                <img src={facebook} alt="" />
              </IconButton>
              <IconButton>
                <img src={twitter} alt="" />
              </IconButton>
              <IconButton>
                <img src={instagram} alt="" />
              </IconButton>
              <IconButton>
                <img src={Linkedin} alt="" />
              </IconButton>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
