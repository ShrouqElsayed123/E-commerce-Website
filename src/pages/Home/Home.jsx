import Loading from "../../components/Loading/Loading";
import styles from '../../components/Card//Card.module.css'
import axios from "axios";
// import Card from "../../components/Card/Card";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import HomeSlider from "../../components/HomeSlider/HomeSlider";

export default function Home() {
let [products,setProducts]=useState(null)
 async function getProgucts(){
  const option={
    url:"https://ecommerce.routemisr.com/api/v1/products",
    method:"GET"
  }
 
    let {data}=await axios.request(option)
    setProducts(data.data)
    
  }
  useEffect(()=>{ 
    getProgucts()},[])

  return (
    <>

    <HomeSlider />
    {!products ? <Loading /> :
    <div className={styles.homeCard}>
      <div className="container d-flex flex-wrap justify-content-between align-items-center gap-4">
      {products.map((product)=><Card key={product.id} title={product.title} description={product.description}
      price={product.price}
      imageCover={product.imageCover}
      ratingsAverage={product.ratingsAverage}
      />)}
      </div>
    </div>
    
    
    }
   
   
    </>
  )
}
