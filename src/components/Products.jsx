import React from 'react'
import styled from 'styled-components';
import product1 from '../Assets/product1.jpg'
import product2 from '../Assets/product2.jpg'
import product3 from '../Assets/product3.jpg'
import product4 from '../Assets/product4.jpg'
import { imageZoomEffect,TitleStyle } from './ReusableStyle';
export default function Products() {
    const data = [
        {
            image: product1,
            name: "chicken Burger",
            price: "Rs 30"
        },
        {
            image: product2,
            name: "Rosted Bread",
            price: "Rs 25"
        },
        {
            image: product3,
            name: "Sandwich",
            price: "Rs 20"
        },
        {
            image: product4,
            name: "Cake",
            price: "Rs 50"
        }
    ];
    return (
        <Section id = "products">
            <div className='title'>
                <h1>
                    <span>Favourites</span> All the time!
                </h1>
            </div>
            <div className='products'>
                {data.map((product)=>{
                    return (
                        <div className='product'>
                            <div className='image'>
                                <img src = {product.image} alt = ""/>
                            </div>
                            <h2>{product.name}</h2>
                            <h3>{product.price}</h3>
                            <p>He Printing and Typesetting the industry. Lorem Ipsum has been the Industry's</p>
                            <button>Buy Now</button>
                            </div>
                    );
                })}
               
            </div>
        </Section>
    );
}


const Section = styled.section`
${TitleStyle};
.products{
    display : grid;
    grid-template-columns: repeat(4 , 1fr);
    gap : 3rem;
    margin-top : 3rem;
    .product{
display : flex;
flex-direction: column;
gap: 0.6rem;
justify-content: center;
align-items: center;
h3{
    color: #fc4958;
}
p{
    text-align: center;
    font-size: 1.1rem;
    line-height: 2rem;
    letter-spacing: 0ch.1rem;
}
${imageZoomEffect};
        .image{
            max-height: 20rem;
            overflow: hidden;
            border-radius: 1rem;
            img{
            height: 20rem;
            width : 15rem;
            }
        }
        button{
            border: none;
            padding : 1rem 4rem;
            color : white;
            font-size : 1.4rem;
            border-radius: 4rem;
            cursor: pointer;
            background: linear-gradient(to right, #fc4958, #e85d04);
            text-transform: uppercase;
            &:hover {
              background: linear-gradient(to left, #e85d04, #fc4958);
            }
        }
    }
}
@media screen and (min-width: 280px) and (max-width: 720px) {
    .products {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`