import { NavLink } from 'react-bootstrap'
// import img1 from '../../assets/imgs/slider-image-1.jpeg'
import  './Card.module.css'

export default function Card(productInfo) {
    const {title,description,price,imageCover,ratingsAverage}=productInfo;
  return (
   <>
 {/* <div className={styles.homeCard}> */}
 {/* <div className="container d-flex flex-wrap justify-content-between align-items-center gap-2"> */}
  

 <div className="card shadow " >
  <div className='img-layer'>
  <img src={imageCover} className="card-img-top w-100" alt="..." />
  <div className='layer d-flex gap-3 justify-content-center align-items-center'>
    <NavLink to=""><i className="fa-solid fa-heart"></i></NavLink>
    <NavLink to=""><i className="fa-solid fa-cart-shopping"></i></NavLink>
    <NavLink to=""><i className="fa-regular fa-eye"></i></NavLink>
  </div>
  </div>
  <div className="card-body">
    <h5 className="card-title text-truncate">{title}</h5>
    <p className="card-text text-truncate">{description}</p>
   <div className=' d-flex justify-content-between'>
   <p className="card-price">{price}</p>
    <div className="card-rating">
    <i className="fa-solid fa-star"></i>
    <span>{ratingsAverage}</span>
    </div>
   </div>
  </div>
</div>
   {/* </div> */}
 {/* </div> */}
   </>
  )
}

// style="width: 18rem;"
