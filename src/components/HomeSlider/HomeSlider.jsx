import sliderImg1 from "../../assets/imgs/slider-image-1.jpeg"
import sliderImg2 from "../../assets/imgs/slider-image-2.jpeg"
import sliderImg3 from "../../assets/imgs/slider-image-3.jpeg"

export default function HomeSlider() {
  return (
   <>
 <div className="home-slider  m-auto mt-2">
    <div className="container">
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval={10000}>
      <img src={sliderImg1} className="d-block w-100 " alt="..." />
      <div className="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div className="carousel-item" data-bs-interval={2000}>
      <img src={sliderImg2} className="d-block w-100 " alt="..." />
      <div className="carousel-caption d-none d-md-block">
       
      </div>
    </div>
    <div className="carousel-item">
      <img src={sliderImg3} className="d-block w-100 " alt="..." />
      <div className="carousel-caption d-none d-md-block">
       
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleDark"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleDark"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
 </div>

   </>
  )
}
