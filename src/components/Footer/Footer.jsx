import payment1 from "../../assets/imgs/amazon-pay.png"
import payment2 from "../../assets/imgs/American-Express-Color.png"
import payment3 from "../../assets/imgs/mastercard.webp"
import payment4 from "../../assets/imgs/paypal.png"
import applestore from "../../assets/imgs/get-apple-store.png"
import googleplay from '../../assets/imgs/get-google-play.png'
import './Footer.css'
export default function Footer() {
  return (
   <>
<footer className="bg-light py-5">
<div className="container d-flex flex-column gap-3">
  <div className="footer-part1">
    <h3>Get The FreshCart App</h3>
    <p>We Will Send You A Link ,open it on your mobile to download the app</p>
  </div>
  <div className="footer-part2 d-flex gap-2 border-1 border-dark">
    <input type="email" placeholder="E-mail..." className="flex-grow-1 border border-secondary-subtle rounded-2"/>
    <div className="btn btn-primary">Share App Link</div>
  </div>
  <div className="footer-part3 d-flex justify-content-between">
    <div className="payment-method d-flex  align-items-center gap-2">
      <p>payment partners</p>
      <img src={payment1} alt="amazon-pay" />
      <img src={payment2} alt="American-Express-Color" />
      <img src={payment3} alt="mastercard" />
      <img src={payment4} alt="paypal" />
    </div>
    <div className="app-store d-flex  align-items-center gap-2 ">
      <p>Get deliveries with FreshCart</p>
      <img src={applestore} alt="get-apple-store" />
      <img src={googleplay} alt="get-google-play"  />
    </div>
  </div>
  </div>
</footer>
   </>
  )
}
