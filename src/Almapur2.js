import React from 'react'
import Carousel from 'react-bootstrap/Carousel'


function DarkVariantExample() {
    
  return (
    
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          style={{ width: "1550px", height: "500px", borderRadius: "10px" }}
          src='https://img.freepik.com/vetores-premium/instagram-carousel-template-e-social-media-post-layout-design_595212-362.jpg'
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>      
      <Carousel.Item>
        <img
           style={{ width: "1550px", height: "500px", borderRadius: "10px" }}
           src="https://img.freepik.com/premium-vector/set-linkedin-carousel-post-editable-business-social-media-instagram-carousel-post-template_526766-953.jpg?w=740"
          alt="Second slide"
         />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
           style={{ width: "1550px", height: "500px", borderRadius: "10px" }}
          src="https://img.freepik.com/vetores-premium/conjunto-de-modelo-de-postagem-de-carrossel-do-instagram-post-de-carrossel-de-midia-social-editavel-para-empresas_595212-299.jpg?w=1800"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
export const Alampur = () => (
    <div> <DarkVariantExample /> </div>
)
