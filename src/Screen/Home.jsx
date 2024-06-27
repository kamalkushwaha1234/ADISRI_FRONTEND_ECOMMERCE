import React,{useEffect} from "react";
import gsap from 'gsap'
import Navbar from "../Components/Navbar";
import Crousal from "../Components/Crousal";

export default function Home(){
let count=0
const menuopen =()=>{
  
    if (count==0) {
      
      gsap.to('.colors',{
        scale:17,
        delay:0.3,
        duration:0.3
      })
       
   document.querySelector('.row1').style.transform='translate(-20px)'
    document.querySelector('.row2').style.transform='translate(20px)'
      document.querySelector('.navslider').classList.add('navopen')
      document.querySelector('.navslider').classList.remove('navclosed')     
      count++
    }
    else
    {
      
      gsap.to('.colors',{
        scale:0,
        delay:0.3,
        duration:0.3
      })
   
   document.querySelector('.row1').style.transform='translate(0px)'
    document.querySelector('.row2').style.transform='translate(0px)'
      document.querySelector('.navslider').classList.add('navclosed')
      document.querySelector('.navslider').classList.remove('navopen')
      count=0
    }
    
}


useEffect(()=>{
  
  setTimeout(()=>{
    document.querySelector('.imagecontainer').classList.remove('overflow-hidden')
  },2500)
          gsap.fromTo(['.image1','.image2','.image3'],{
            y:1000,
            duration:1,
            stagger:0.1,
          delay:1,
          opacity:0
            
          },{
            y:0,
            stagger:0.1,
            ease:"power2.out",
            duration:1,
            delay:1,
           opacity:1           
          })
        
        let joines='';
        let array=[];
 const text = ()=>{
    let h1,count=0
     h1 =document.querySelector('.companytext')
     array=h1.textContent.split("")
     array.map((e)=>{
        if (count < Math.floor(array.length/2)) {
            count++
            joines+=`<span class="new">${e}</span>`

        }
        else
        {
             joines+=`<span class="new">${e}</span>`
        }
     })
     h1.innerHTML=joines
     gsap.from('.new',{
        y:300,
        ease:"elastic.out",
        opacity:0,
        stagger:0.1,
        duration:0.2,
       
      })
   
    
 }
 text()
},[])
// sh21: " 0 0 5px white, 0 0 25px white, 0 0 50px white, 0 0 100px white, 0 0 200px white",
    return(
        <>
       
         {/* <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="20vw" width="20vw" version="1.1" id="Layer_1" viewBox="0 0 512.001 512.001" xml:space="preserve">
<path style={{fill:"#36A9E1"}} d="M430.751,223.448c0.067-1.356,0.204-2.693,0.204-4.066c0-44.942-36.433-81.374-81.374-81.374  c-8.933,0-17.505,1.493-25.547,4.152c-23.713-32.081-61.696-52.976-104.653-52.976c-71.907,0-130.199,58.293-130.199,130.199  c0,0.684,0.093,1.345,0.103,2.028c-46.478,9.387-81.477,50.446-81.477,99.691c0,56.178,45.54,101.718,101.718,101.718h292.949  c56.178,0,101.718-45.541,101.718-101.718C504.192,274.746,473.155,235.709,430.751,223.448z"/>
<path style={{fill:"#5EBAE7"}} d="M324.035,142.159c-23.713-32.081-61.696-52.976-104.653-52.976  c-71.907,0-130.199,58.293-130.199,130.199c0,0.684,0.093,1.345,0.103,2.028c-46.479,9.387-81.478,50.446-81.478,99.691  c0,56.178,45.54,101.718,101.718,101.718"/>
<path style={{fill:"#1D1D1B"}} d="M402.474,430.626H109.526C49.133,430.626,0,381.493,0,321.101c0-49.761,33.878-93.29,81.437-105.875  c2.202-74.185,63.237-133.851,137.945-133.851c22.248,0,43.489,5.158,63.134,15.332c17.069,8.839,32.332,21.374,44.434,36.445  c7.431-1.961,15.02-2.952,22.633-2.952c48.652,0,88.331,39.16,89.168,87.616c20.006,7.049,37.887,20.002,50.827,36.932  c14.67,19.193,22.424,42.137,22.424,66.352C512,381.493,462.867,430.626,402.474,430.626z M219.381,96.99  c-67.487,0-122.392,54.904-122.392,122.392c0,0.174,0.02,0.345,0.031,0.515c0.033,0.459,0.062,0.918,0.07,1.385l0.107,6.495  l-6.368,1.286c-43.582,8.803-75.215,47.51-75.215,92.039c0,51.782,42.128,93.91,93.91,93.91h292.949  c51.782,0,93.91-42.128,93.91-93.91c0-20.759-6.645-40.424-19.215-56.87c-12.168-15.921-29.425-27.741-48.587-33.281l-5.93-1.716  l0.3-6.165c0.025-0.514,0.059-1.024,0.094-1.537c0.052-0.777,0.102-1.511,0.102-2.15c0-40.565-33.001-73.567-73.567-73.567  c-7.787,0-15.557,1.264-23.096,3.757l-5.369,1.776l-3.361-4.547C294.357,115.144,258.501,96.99,219.381,96.99z"/>
<path style={{fill:"#FFFFFF"}} d="M151.219,193.408h-15.615c0-35.251,28.679-63.929,63.929-63.929v15.615  C172.892,145.095,151.219,166.768,151.219,193.408z"/>
</svg> */}
       
        
        
        
       
         <div className=" absolute w-full max-h-1.5">
       <img className="imgelogo float-start" src="logo 1.jpg" alt="" />
          <div onClick={menuopen} className="float-end cursor-pointer menu z-30">
               <span className="row1    bg-white inline-block"></span>
               <br />
               <span className="row2 "></span>
          </div>
        </div>
         <div className=" home relative overflow-x-hidden ">
         <div className="navslider navclosed transition-all duration-500  absolute  right-0   "> 
          
          <Navbar/>
          </div>
         
        
            <div className="textcontainer t  ">
          <h1 className="companytext    ">
            Adisri&nbsp;Publications
          </h1>
          </div>
          <div>
            
             <Crousal/>
          </div>
          </div>
         
        </>
    )
}