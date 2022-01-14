import React from 'react'
import styled from 'styled-components'
import logo from '../Assets/FoodYummy.png'
import {AiFillInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {GrLinkedinOption} from 'react-icons/gr'
export default function Footer() {
    return (
        <div className='footer'>
        <Section>
            <div className='brand container'>
                <img src = {logo} alt = ""/>
                <p>He Printing and Typesetting the industry. Lorem Ipsum has been the Industry's</p>
                <ul>
                    <li><AiFillInstagram/></li>
                    <li><FaFacebookF></FaFacebookF></li>
                    <li><GrLinkedinOption/>  </li>
                    <li><BsTwitter/></li>
                </ul>
            </div>
            <div className='about container'>
                <div className='title'>
                    <h3>About Us</h3>
                </div>
                <p>He Printing and Typesetting the industry. Lorem Ipsum has been the Industry'sHe Printing and Typesetting the industry. Lorem Ipsum has been the Industry's</p>
            </div>
            <div className='contact container'>
                <div className='title'>
                    <h3>Contact Us</h3>
                    </div>         
                  <p>  9131422486</p>
                <p>ravimalakar110@gmailcom</p>
                <p>@foodyummy</p>

                <p>123 Street,Ground Floor,Khilchipur,India</p>
                    
                       </div>
        </Section>
        <LowerFooter className= "lower__footer">
            <h2>
                Copyright ;2022 <span>FoodYummy</span>
            </h2>
        </LowerFooter>
        </div>
    );
}
const Section = styled.footer`
marign: 0;
background: linear-gradient(to right, #fc4958, #e85d04);
color:white;
display : grid;
grid-template-columns: repeat(3 ,1fr);
gap: 10vw;
padding : 4vw;
p{
    font-size: 1.1rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;
}
ul{
    display: flex;
    list-style-type : none;
    gap: 4vw;
    margin-top: 2vw;
    li{
        padding: 0.8rem;
        border-radius: 2rem;
        background-color: white;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        svg{
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fc4958;
            font-size: 1.6rem;
            transition : 0.3s ease-in-out;
        }
        &:hover{
            background-color: black;
            svg{
                transform : scale(1.2);
            }
        }
    }
}
img{
    filter: brightness(0) invert(1);
    width: 10vw;
}
.container{
    display :flex;
    flex-direction: column;
    gap: 0.5rem;
    h3{
        font-size: 2rem;
    }
   
}
@media screen and (min-width : 260px) and (max-width : 1000px){
    grid-template-columns: 1fr;
    .container{
        img{
            heigth: 4rem;
            width: 10rem;
        }
    }
}
`;

const LowerFooter = styled.div`
margin: 0;
text-align: center;
background-color: black;
color: white;
padding : 1rem;
h2{
    span{
        color: #fc4958;
        text-transform: uppercase;
    }
}

@media screen and (min-width : 260px) and (max-width : 1000px){
   h2{
       span{
           display : block;
       }
   }
}

`;