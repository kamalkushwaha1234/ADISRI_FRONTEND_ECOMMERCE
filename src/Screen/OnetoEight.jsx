import React, { useEffect, useState } from "react";
import gsap from "gsap";
import CrousalBooks from "../Components/CrousalBooks";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function PrePrimary() {
  useEffect(()=>{
  
    
    
  }
  ,[])
  return (
    <>
  <div className='sm:h-20 new-space-color'>
           
           </div>
     <div className="preprimary-section _sections2  p-4 transition-all duration-500 overflow-hidden">
      <div className="absolute overflow-hidden z-10 opacity-20">
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#a77afa" version="1.1" id="Capa_1" width="30vw"  viewBox="0 0 173.692 173.692" xmlSpace="preserve">
<g>
	<g>
		<path d="M63.732,48.978c-3.357,0-6.853,0.936-10.09,2.219c2.729-2.164,5.283-4.714,6.968-7.645    c5.538-9.582,4.357-16.512-0.448-19.275c-4.796-2.769-11.385-0.342-16.923,9.25c-1.691,2.92-2.632,6.411-3.129,9.869    c-0.506-3.458-1.448-6.949-3.133-9.869c-5.533-9.582-12.126-12.025-16.917-9.25c-4.813,2.763-5.99,9.688-0.45,19.275    c1.68,2.914,4.237,5.481,6.978,7.65c-3.246-1.284-6.747-2.225-10.116-2.225C5.396,48.984,0,53.465,0,59.014    c0,5.546,5.401,10.03,16.473,10.025c3.369,0.005,6.866-0.919,10.116-2.222c-2.741,2.17-5.298,4.748-6.988,7.65    c-5.53,9.598-4.342,16.526,0.459,19.286c4.784,2.772,11.384,0.326,16.917-9.256c1.69-2.919,2.626-6.411,3.133-9.869    c0.509,3.453,1.45,6.95,3.137,9.858c5.529,9.588,12.124,12.039,16.915,9.267c4.805-2.766,5.981-9.699,0.443-19.291    c-1.674-2.92-4.23-5.48-6.969-7.65c3.236,1.291,6.732,2.227,10.095,2.218c11.084,0.009,16.479-4.476,16.479-10.021    C80.212,53.471,74.812,48.978,63.732,48.978z M44.122,65.955c-3.838,2.213-8.743,0.903-10.956-2.93    c-2.218-3.838-0.901-8.741,2.937-10.954c3.837-2.22,8.736-0.904,10.944,2.93C49.264,58.833,47.964,63.747,44.122,65.955z"/>
		<path d="M155.464,116.476c-4.348-1.156-9.209-1.166-13.849-0.635c4.295-1.856,8.488-4.275,11.677-7.47    c10.506-10.506,11.37-19.875,6.117-25.131c-5.253-5.245-14.632-4.38-25.125,6.127c-3.185,3.185-5.616,7.381-7.475,11.677    c0.545-4.646,0.545-9.495-0.626-13.858c-3.847-14.333-11.533-19.772-18.703-17.857c-7.168,1.926-11.108,10.479-7.256,24.826    c1.16,4.355,3.59,8.559,6.371,12.317c-3.744-2.797-7.959-5.215-12.312-6.392c-14.346-3.846-22.891,0.1-24.814,7.278    c-1.922,7.176,3.501,14.861,17.852,18.691c4.354,1.166,9.203,1.184,13.854,0.642c-4.307,1.85-8.493,4.284-11.686,7.469    c-10.494,10.508-11.36,19.875-6.109,25.118c5.245,5.263,14.627,4.387,25.128-6.103c3.195-3.185,5.613-7.387,7.477-11.694    c-0.55,4.652-0.538,9.5,0.635,13.861c3.833,14.338,11.523,19.782,18.7,17.865c7.171-1.926,11.104-10.483,7.27-24.826    c-1.185-4.356-3.592-8.559-6.383-12.312c3.743,2.797,7.946,5.205,12.312,6.376c14.348,3.853,22.889-0.088,24.799-7.26    C175.237,128.01,169.807,120.322,155.464,116.476z M124.186,131.649c-5.739,1.543-11.636-1.865-13.168-7.59    c-1.545-5.734,1.858-11.634,7.604-13.171c5.736-1.542,11.629,1.866,13.166,7.601C133.309,124.209,129.916,130.122,124.186,131.649    z"/>
		<path d="M134.108,9.317c-1.462,1.871-2.474,4.241-3.157,6.604c-0.022-2.465-0.335-5.012-1.231-7.229    c-2.938-7.272-7.321-9.642-10.964-8.161c-3.636,1.467-5.168,6.208-2.224,13.491c0.897,2.208,2.442,4.26,4.143,6.046    c-2.139-1.209-4.515-2.225-6.878-2.55c-7.766-1.091-12.005,1.524-12.554,5.412c-0.534,3.891,2.813,7.571,10.583,8.654    c2.354,0.336,4.908,0.033,7.312-0.55c-2.134,1.236-4.183,2.802-5.654,4.667c-4.832,6.191-4.679,11.174-1.593,13.581    c3.097,2.423,7.967,1.368,12.794-4.823c1.466-1.877,2.474-4.229,3.174-6.607c0.011,2.475,0.339,5.015,1.22,7.24    c2.938,7.274,7.34,9.623,10.968,8.153c3.647-1.456,5.169-6.208,2.214-13.491c-0.896-2.203-2.429-4.265-4.137-6.052    c2.151,1.215,4.51,2.219,6.878,2.556c7.766,1.097,12.012-1.524,12.564-5.415c0.531-3.894-2.812-7.577-10.6-8.674    c-2.353-0.331-4.902-0.016-7.303,0.567c2.126-1.25,4.179-2.791,5.64-4.673c4.843-6.186,4.694-11.168,1.593-13.584    C143.81,2.061,138.94,3.12,134.108,9.317z M135.027,27.678c-0.438,3.116-3.315,5.267-6.414,4.837    c-3.118-0.438-5.291-3.307-4.848-6.421c0.438-3.11,3.306-5.274,6.425-4.837C133.294,21.694,135.476,24.567,135.027,27.678z"/>
	</g>
</g>
</svg>
      </div>
      <div className="w-full leading-loose ">
      <div className="preprimary-text text-center">
          1<sup>th</sup> TO 8<sup>th</sup>
          </div>
          <div className="w-4/5 m-auto">
            <p className="pre-books-description p-3">"Step into a world of wonder at our bookstore, where each book is a key to unlocking boundless imagination and endless learning for young readers. Our curated collection of 1st to 8th grade books is a treasure trove of stories, knowledge, and inspiration, carefully chosen to captivate and enrich young minds at every stage of their reading journey. Whether you're seeking thrilling adventures that transport you to distant realms, insightful stories that teach valuable life lessons, or educational resources that make learning engaging and fun, we have <b className="bg-yellow-400"> something extraordinary </b> waiting for you. Dive into the magic of storytelling with beloved classics, explore new horizons with innovative educational tools, and embark on adventures that ignite a lifelong passion for reading. Join us on this literary adventure and let the pages of our books become your gateway to endless possibilities."</p>
          </div>
          </div>
         <div className="w-5/6 m-auto">
         <div className='h-10 new-space-color'>
           
           </div>
          <CrousalBooks slideshow={4} />
         </div>
     </div>
    </>
  );
}
