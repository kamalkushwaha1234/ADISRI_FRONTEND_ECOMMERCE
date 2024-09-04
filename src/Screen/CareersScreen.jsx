import React, {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCareers } from '../actions/careerActions';
import CareerItem from '../Components/CareerItem'
import { Helmet } from 'react-helmet';
import '../Css/CAREER.css'
import Loader from '../Components/Loader';
function CareersScreen() {
  const dispatch = useDispatch();
  const careerList = useSelector(state => state.careerList);
  const { error, loading, careers = [] } = careerList;

  useEffect(() => {
    
    dispatch(listCareers());
    
  }, [dispatch]);
 
  return (
    <div>
      {loading ? (
       <Loader/>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className=' career-section realtive '>
          <div className="application">
      <Helmet>
        <title>Careers at Adisri Publications - Join Our Team</title>
        <meta 
          name="description" 
          content='Explore job openings and career opportunities at Adisri Publications. Join our team and grow with us. Learn about our company culture, benefits, and the hiring process.'
        />
        <meta 
          name="keywords" 
          content="Careers, Jobs, Employment, Hiring, Job Openings, Work with Us, Company Culture,Adisri Publications"
    
        />
      </Helmet></div>
      
          {/* <img className='w-1/5 absolute opacity-55' src="Job offers-cuate (1).png" alt="" /> */}
          {/* <svg className='m-auto absolute left-[20%] ' xmlns="http://www.w3.org/2000/svg" version="1.0" width="60vw"viewBox="0 0 1280.000000 640.000000" preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)" fill="#a7e7d8" stroke="none">
<path d="M5668 4220 c-29 -29 -30 -34 -26 -94 6 -95 34 -132 147 -190 82 -42 116 -49 75 -16 -8 8 -27 33 -41 57 -23 40 -25 49 -18 122 8 89 0 113 -45 136 -42 22 -58 19 -92 -15z"/>
<path d="M7033 4231 c-41 -25 -46 -45 -38 -139 8 -87 -1 -117 -49 -161 -47 -44 -27 -43 65 5 113 58 141 95 147 190 4 60 3 65 -26 94 -35 35 -55 37 -99 11z"/>
<path d="M5930 4018 c-22 -24 -28 -97 -11 -140 14 -37 62 -78 133 -114 68 -34 86 -34 47 2 -41 37 -52 72 -45 149 6 67 5 73 -18 98 -31 34 -77 36 -106 5z"/>
<path d="M6782 4033 c-28 -11 -41 -58 -35 -134 5 -74 5 -74 -31 -116 -20 -22 -36 -44 -36 -47 0 -15 138 66 170 98 30 32 35 44 38 99 3 53 1 65 -18 85 -20 21 -57 28 -88 15z"/>
<path d="M4955 4007 c-65 -31 -137 -109 -159 -172 -10 -28 -21 -59 -26 -71 -7 -17 -23 -22 -101 -32 -212 -28 -566 -108 -874 -197 -85 -25 -159 -45 -164 -45 -15 0 16 116 49 180 40 79 92 135 154 168 42 22 64 27 126 26 64 0 85 -4 140 -31 36 -17 80 -41 98 -53 48 -33 39 -8 -15 40 -84 74 -135 95 -233 95 -76 0 -93 -4 -151 -32 -134 -66 -239 -218 -247 -355 -2 -38 -5 -68 -6 -68 -1 0 -76 -25 -167 -56 -151 -51 -309 -93 -351 -94 -15 0 -18 10 -18 64 0 72 -22 115 -79 153 -45 31 -132 32 -179 3 -53 -32 -81 -130 -49 -170 43 -55 130 -68 172 -25 33 32 33 78 0 110 -25 25 -85 35 -85 14 0 -5 5 -7 11 -4 14 9 55 -2 73 -21 40 -39 -1 -114 -62 -114 -47 0 -100 32 -108 66 -9 36 11 95 41 124 18 17 40 25 79 28 98 8 165 -45 174 -139 8 -90 5 -94 -100 -113 -51 -9 -138 -23 -193 -31 l-99 -14 -36 26 c-19 15 -71 56 -115 91 -139 112 -267 158 -364 132 -59 -16 -123 -81 -140 -143 -12 -41 -12 -122 0 -167 3 -13 -13 -15 -101 -15 -58 0 -168 3 -245 6 -79 4 -112 3 -75 -1 36 -4 97 -8 135 -9 133 -3 97 -18 -72 -30 -376 -27 -649 -40 -838 -41 -147 0 -196 -3 -188 -11 17 -17 893 21 1081 46 23 4 42 4 42 2 0 -3 -24 -22 -53 -43 -46 -34 -58 -38 -102 -36 -37 2 -66 -4 -105 -22 -76 -34 -212 -72 -290 -80 -59 -6 -146 2 -207 20 -33 9 -31 -26 3 -60 35 -34 86 -49 161 -44 34 1 59 0 57 -3 -2 -4 -49 -26 -104 -49 -89 -38 -107 -50 -160 -108 -33 -36 -60 -69 -60 -73 0 -13 153 -11 186 1 15 6 57 33 93 59 36 27 79 57 96 67 28 18 28 17 -12 -36 -65 -86 -77 -134 -48 -190 16 -32 35 -40 35 -16 0 28 38 102 85 164 26 34 105 113 176 175 103 90 130 118 135 145 5 25 21 43 75 82 l69 50 120 12 119 12 38 -41 c81 -86 223 -130 456 -140 l148 -6 -116 -34 c-149 -42 -239 -80 -315 -132 -38 -26 -71 -41 -90 -41 -66 0 -120 -49 -120 -107 0 -23 -5 -33 -15 -33 -10 0 -15 10 -15 28 0 34 -37 72 -69 72 -13 0 -51 -18 -85 -41 -60 -40 -62 -41 -128 -36 -39 3 -68 2 -68 -3 0 -6 13 -24 29 -42 28 -31 34 -33 113 -38 81 -5 83 -6 83 -30 0 -23 -5 -26 -50 -31 -65 -8 -76 -13 -101 -52 -16 -24 -23 -54 -27 -117 -3 -47 -9 -96 -13 -109 -6 -21 -5 -22 14 -12 12 6 59 15 104 20 46 4 94 13 106 20 27 14 48 54 57 106 11 66 16 76 33 73 14 -3 17 -17 17 -81 l0 -78 42 -40 c23 -21 47 -39 53 -39 6 0 10 34 10 88 0 78 3 91 21 108 33 29 51 78 40 108 -12 30 -48 56 -78 56 -36 0 -27 16 17 29 54 16 80 58 80 128 0 47 3 54 32 76 106 80 269 133 719 236 279 64 369 90 565 162 89 32 166 59 171 59 5 0 26 -22 48 -50 22 -27 42 -50 45 -50 3 -1 24 -18 47 -38 l43 -37 -90 -91 c-77 -79 -95 -92 -130 -97 -31 -4 -54 -18 -101 -61 -139 -129 -315 -216 -436 -216 -31 0 -33 -2 -23 -20 28 -53 120 -64 214 -25 l60 24 -96 -92 c-87 -84 -97 -98 -122 -166 -15 -40 -25 -76 -22 -78 7 -7 73 16 127 43 51 25 69 45 144 152 50 72 78 96 51 45 -20 -41 -37 -128 -30 -162 3 -16 21 -44 40 -62 l34 -33 0 60 c0 32 5 79 11 104 11 48 81 196 154 325 31 57 45 91 45 119 0 42 29 80 137 179 l52 48 48 -24 c152 -77 389 -85 616 -23 86 24 263 91 285 108 20 17 14 3 -24 -53 -66 -99 -161 -313 -151 -343 2 -6 14 21 27 59 35 108 75 190 135 281 59 88 104 131 198 187 l57 35 62 -25 c96 -39 215 -56 348 -50 98 4 133 11 240 45 130 41 248 68 338 75 28 2 52 3 52 2 0 -1 -28 -13 -62 -25 -110 -40 -210 -117 -248 -190 -30 -58 -144 -154 -208 -174 -16 -6 -30 -1 -52 17 -52 44 -106 43 -172 -5 -26 -19 -33 -3 -9 21 50 50 7 131 -68 131 -59 0 -91 16 -143 72 l-47 51 -6 -37 c-11 -55 1 -83 55 -135 52 -50 62 -74 34 -85 -18 -7 -34 1 -52 25 -6 10 -28 23 -46 29 -51 17 -107 -4 -159 -57 -23 -24 -57 -53 -75 -65 l-34 -21 29 -13 c16 -8 53 -35 83 -59 84 -70 122 -72 211 -10 84 58 97 22 19 -53 -49 -48 -50 -49 -50 -110 0 -34 4 -62 8 -62 5 0 21 14 38 31 44 47 104 89 119 83 22 -9 83 15 100 39 21 30 19 70 -5 100 -23 29 -9 48 18 24 31 -27 60 -29 106 -9 24 11 52 32 61 46 10 14 43 40 74 56 31 17 75 48 97 70 l42 39 -1 -72 c-2 -175 101 -297 249 -297 46 0 130 37 161 71 96 105 51 289 -75 306 -80 11 -172 -59 -172 -130 0 -55 53 -117 100 -117 24 0 81 33 92 54 11 21 11 21 -13 -1 -55 -50 -107 -49 -148 3 -46 59 -12 137 75 170 80 30 149 -7 175 -96 29 -96 -33 -205 -134 -235 -28 -8 -60 -15 -71 -15 -74 0 -159 58 -198 134 -29 57 -36 177 -14 243 31 93 116 168 246 217 89 33 147 40 215 26 52 -11 58 -15 72 -48 16 -40 122 -192 133 -192 11 0 117 152 133 193 9 20 18 37 20 37 2 0 28 4 57 10 154 29 380 -79 443 -212 87 -185 -24 -408 -204 -408 -73 0 -167 61 -195 127 -31 72 -3 176 58 213 41 25 71 25 124 1 79 -36 107 -109 63 -165 -41 -52 -94 -53 -146 -4 -13 12 -23 17 -23 10 0 -14 50 -49 82 -57 55 -14 118 47 118 112 0 71 -92 141 -172 130 -102 -14 -161 -153 -109 -255 25 -48 55 -76 111 -101 88 -40 180 -22 251 49 58 58 83 127 82 227 l-1 72 42 -39 c22 -22 66 -53 97 -70 31 -16 64 -42 74 -56 9 -14 37 -35 61 -46 46 -20 75 -18 106 9 27 24 41 5 18 -24 -24 -30 -26 -70 -5 -100 17 -24 78 -48 100 -39 15 6 75 -36 119 -83 17 -17 33 -31 38 -31 4 0 8 28 8 62 0 61 -1 62 -50 110 -47 46 -60 71 -42 82 8 5 24 -5 101 -56 53 -36 103 -23 185 50 21 18 52 40 69 47 l30 13 -24 12 c-13 8 -49 37 -79 65 -66 63 -114 82 -165 65 -19 -6 -41 -19 -47 -29 -18 -24 -34 -32 -52 -25 -28 11 -18 35 34 85 54 52 66 80 55 135 l-6 37 -47 -51 c-52 -56 -84 -72 -143 -72 -75 0 -118 -81 -68 -131 24 -24 17 -40 -9 -21 -9 7 -33 20 -52 28 -40 19 -95 7 -125 -26 -25 -28 -42 -25 -105 16 -71 46 -127 100 -150 144 -38 74 -153 161 -257 195 -29 9 -53 18 -53 20 0 7 115 -6 185 -21 39 -8 119 -30 180 -49 60 -19 116 -35 125 -34 23 1 -112 46 -245 82 -105 28 -135 32 -240 31 -66 -1 -137 -6 -157 -12 -44 -12 -44 -11 -25 73 l12 50 70 18 c39 10 124 23 190 29 254 24 617 -51 871 -180 l59 -30 -40 -16 c-89 -38 -167 -50 -324 -50 -90 -1 -138 -4 -115 -8 119 -21 321 0 432 45 l62 25 57 -35 c94 -56 139 -99 197 -186 59 -89 100 -173 135 -280 13 -38 25 -66 28 -64 7 8 -45 153 -81 225 -19 37 -50 91 -70 121 -20 29 -36 54 -36 56 0 2 23 -8 52 -22 89 -43 278 -101 383 -119 170 -28 359 -7 478 53 27 13 51 23 53 21 2 -2 44 -43 94 -93 83 -82 90 -91 84 -120 -5 -27 7 -53 70 -165 108 -190 137 -266 144 -368 l5 -83 32 31 c18 18 36 45 39 61 7 34 -10 121 -30 162 -27 51 1 27 51 -45 82 -120 107 -143 191 -174 41 -15 77 -25 80 -22 7 8 -35 116 -61 158 -12 19 -57 66 -99 104 -42 38 -75 70 -73 72 2 2 23 -5 47 -17 88 -43 191 -33 220 21 10 18 8 20 -23 20 -18 0 -60 7 -92 15 -121 32 -226 92 -339 196 -52 48 -75 62 -106 66 -35 5 -53 19 -130 97 l-90 91 43 37 c23 20 44 37 47 38 3 0 23 23 45 50 22 28 43 50 48 50 5 0 82 -27 171 -59 196 -72 286 -98 565 -162 452 -103 613 -156 719 -237 29 -22 32 -30 32 -76 0 -69 26 -111 80 -127 44 -13 53 -29 17 -29 -30 0 -66 -26 -77 -56 -11 -29 1 -65 35 -106 22 -26 25 -39 25 -114 0 -46 4 -84 9 -84 17 0 71 51 87 81 10 19 14 51 12 92 -3 56 -1 62 16 62 16 0 22 -11 31 -60 20 -109 44 -129 165 -138 41 -3 86 -9 99 -13 21 -6 23 -5 16 12 -4 10 -10 57 -12 104 -4 65 -10 93 -26 117 -26 39 -37 44 -102 52 -45 5 -50 8 -50 31 0 24 2 25 83 30 79 5 85 7 113 38 16 18 29 36 29 42 0 5 -29 6 -67 3 -67 -5 -69 -4 -129 36 -34 23 -73 41 -86 41 -32 0 -68 -39 -68 -73 0 -17 -5 -27 -15 -27 -9 0 -15 9 -15 24 0 64 -53 116 -118 116 -21 0 -52 14 -92 41 -76 52 -166 90 -315 132 l-116 34 148 6 c232 10 375 54 456 140 l37 40 120 -11 120 -12 67 -48 c50 -35 70 -57 77 -81 6 -22 38 -58 100 -114 192 -173 260 -255 288 -344 7 -24 16 -43 20 -43 12 0 38 57 38 84 0 38 -17 76 -63 136 -40 53 -40 54 -12 36 17 -10 60 -40 96 -67 36 -26 78 -53 93 -59 33 -12 186 -14 186 -1 0 4 -27 37 -60 73 -53 58 -71 70 -160 108 -55 23 -102 45 -104 49 -2 3 23 4 57 3 75 -5 126 10 161 44 34 34 36 69 4 60 -62 -18 -149 -26 -208 -20 -78 8 -214 46 -290 80 -39 18 -68 24 -105 22 -44 -2 -56 2 -102 36 -29 21 -53 40 -53 43 0 2 19 2 43 -2 79 -10 471 -34 770 -46 225 -9 301 -9 309 -1 9 9 -37 12 -188 12 -272 1 -1020 46 -992 60 7 4 69 11 138 14 316 18 596 77 706 149 96 64 123 154 65 219 -25 28 -36 33 -72 32 -35 -1 -48 -8 -71 -33 -35 -39 -36 -74 -2 -107 19 -20 31 -24 52 -19 58 14 78 57 42 90 -21 19 -70 14 -70 -7 0 -9 3 -9 12 0 18 18 46 14 58 -7 14 -27 3 -48 -32 -60 -26 -9 -33 -7 -55 15 -46 46 -6 114 68 114 63 0 99 -51 85 -123 -7 -39 -63 -96 -123 -126 -139 -69 -449 -119 -857 -137 -154 -7 -159 -7 -151 12 15 37 17 125 4 171 -16 57 -79 125 -134 143 -110 36 -235 -20 -480 -217 l-40 -32 -100 14 c-180 26 -280 47 -287 58 -16 25 -8 109 13 147 59 104 222 106 265 3 19 -43 12 -93 -16 -118 -10 -9 -39 -20 -64 -22 -38 -5 -48 -2 -70 20 -14 14 -26 37 -26 51 0 31 46 69 77 63 13 -2 23 0 23 4 0 20 -62 8 -85 -16 -54 -53 -15 -135 66 -135 126 0 161 128 59 214 -43 35 -131 37 -181 3 -57 -38 -79 -81 -79 -153 0 -54 -3 -64 -17 -64 -46 1 -211 45 -358 96 l-163 56 -4 66 c-8 137 -113 289 -247 355 -58 28 -75 32 -151 32 -77 0 -91 -3 -146 -33 -57 -31 -143 -106 -133 -116 2 -2 33 14 69 35 81 49 128 64 210 63 114 0 205 -66 270 -194 33 -64 64 -180 49 -180 -5 0 -79 20 -164 45 -308 89 -662 169 -874 197 -78 10 -94 15 -101 32 -5 12 -16 42 -25 68 -22 63 -97 145 -160 174 -159 75 -359 -21 -389 -187 l-6 -36 -127 -7 c-235 -12 -489 -63 -663 -131 -50 -20 -92 -35 -93 -33 -1 1 -13 25 -26 51 -22 44 -121 147 -141 147 -20 0 -119 -103 -141 -147 -13 -26 -25 -50 -26 -52 -1 -2 -33 9 -70 24 -201 80 -431 128 -686 141 l-126 7 -11 48 c-6 26 -18 56 -26 66 -11 15 -11 11 1 -19 8 -21 15 -50 15 -66 l0 -29 -162 -5 c-90 -3 -164 -4 -166 -3 -8 7 30 66 50 76 29 16 95 5 131 -21 16 -13 28 -17 25 -10 -7 21 -70 50 -109 50 -41 0 -82 -27 -104 -70 -15 -30 -28 -34 -147 -46 l-66 -6 9 42 c15 64 44 114 93 157 106 93 269 96 376 6 33 -27 38 -29 20 -9 -49 55 -106 79 -194 83 -70 4 -88 1 -131 -20z m2857 3 c83 -23 177 -131 199 -227 l7 -35 -66 6 c-119 12 -132 16 -147 46 -22 43 -63 70 -104 70 -39 0 -102 -29 -109 -50 -3 -7 9 -3 25 10 36 26 102 37 131 21 20 -10 58 -69 50 -76 -2 -1 -77 0 -167 3 l-163 5 5 44 c15 133 186 225 339 183z m-1345 -268 c27 -27 57 -67 68 -91 l19 -43 -22 -16 c-12 -10 -47 -30 -77 -46 l-55 -28 -55 28 c-30 16 -65 36 -77 46 l-22 16 19 43 c24 51 108 139 135 139 10 0 41 -22 67 -48z m-1139 -4 c-3 -37 15 -31 -203 -63 -103 -15 -110 -15 -122 1 -7 10 -13 32 -13 50 0 33 0 33 58 37 31 2 108 4 170 5 l113 2 -3 -32z m362 6 c191 -25 182 -29 -68 -30 -130 -1 -247 -4 -259 -8 -19 -6 -23 -4 -23 13 0 52 5 54 122 47 61 -3 163 -13 228 -22z m1764 10 c3 -9 6 -25 6 -35 0 -17 -4 -19 -22 -13 -13 4 -130 7 -260 8 -251 1 -261 6 -59 31 250 30 326 32 335 9z m274 9 l82 -6 0 -32 c0 -17 -6 -39 -13 -49 -12 -16 -19 -16 -122 -1 -218 32 -200 26 -203 63 l-3 32 88 0 c48 0 125 -3 171 -7z m-2748 -42 c0 -22 5 -43 10 -46 6 -3 10 -9 10 -13 0 -9 -199 -46 -206 -39 -3 3 -8 30 -11 60 l-6 55 94 9 c52 6 97 11 102 12 4 0 7 -17 7 -38z m2959 24 l84 -7 -6 -55 c-3 -30 -8 -57 -11 -60 -7 -7 -206 30 -206 39 0 4 5 10 10 13 6 3 10 24 10 46 0 34 3 40 18 35 9 -2 55 -8 101 -11z m-3166 -72 c3 -32 5 -59 3 -60 -1 -2 -58 -17 -127 -34 -253 -62 -621 -175 -895 -274 l-95 -35 -15 36 c-8 20 -18 64 -21 98 l-6 63 64 21 c293 95 906 235 1055 241 31 1 31 0 37 -56z m3451 32 c288 -49 644 -135 895 -217 l64 -21 -6 -63 c-3 -34 -13 -78 -21 -98 l-15 -36 -95 35 c-274 99 -642 212 -895 274 -69 17 -126 32 -127 34 -2 1 0 28 3 60 7 68 -7 66 197 32z m-2364 -7 c87 -1 149 -16 277 -65 l93 -36 -6 -41 c-4 -22 -8 -42 -9 -44 -1 -1 -18 4 -37 12 -77 33 -233 56 -371 56 -279 0 -540 -73 -781 -218 l-60 -36 -42 48 c-44 48 -128 200 -121 220 5 14 206 55 214 43 12 -19 110 -57 148 -57 57 0 118 31 144 73 20 33 26 36 84 41 113 11 181 13 287 10 58 -2 139 -5 180 -6z m1552 -4 c52 -5 59 -9 79 -41 26 -42 87 -73 144 -73 38 0 136 38 148 57 8 12 209 -29 214 -43 7 -20 -77 -172 -121 -220 l-42 -48 -60 36 c-151 91 -300 150 -475 190 -91 20 -129 23 -309 22 -189 -1 -212 -3 -290 -26 -47 -14 -93 -28 -102 -33 -14 -6 -18 -2 -18 16 0 13 -3 33 -6 45 -5 18 5 25 88 56 141 54 195 66 324 67 65 1 121 4 124 7 5 6 201 -2 302 -12z m-2102 -15 c0 -6 -15 -26 -33 -44 -41 -41 -93 -53 -157 -36 -46 12 -95 39 -87 47 4 4 228 41 265 43 6 1 12 -4 12 -10z m2360 -15 c51 -8 96 -16 98 -19 7 -7 -44 -34 -88 -46 -64 -17 -116 -5 -157 36 -18 18 -33 38 -33 44 0 12 6 11 180 -15z m-2866 -114 c22 -60 80 -153 124 -197 l32 -32 -60 -57 c-33 -31 -62 -64 -65 -74 -7 -21 -92 -68 -200 -110 -232 -89 -522 -97 -730 -19 l-58 22 24 19 c52 41 310 209 404 263 184 106 449 229 506 234 3 1 13 -22 23 -49z m3326 12 c83 -32 269 -125 396 -197 93 -54 350 -221 403 -263 l24 -19 -58 -22 c-207 -78 -499 -70 -730 19 -108 42 -193 89 -200 110 -3 10 -32 43 -65 74 l-60 57 32 32 c44 44 102 137 124 197 20 57 20 57 134 12z m-1768 -38 l36 -23 78 44 c84 48 94 47 94 -11 0 -26 -6 -34 -30 -44 -17 -7 -55 -28 -85 -46 l-55 -33 -55 33 c-30 18 -68 39 -85 46 -23 10 -30 19 -30 40 0 57 7 62 53 38 23 -11 58 -31 79 -44z m-1752 30 c0 -3 -16 -12 -36 -20 -130 -55 -485 -261 -636 -370 l-101 -73 -43 29 c-47 33 -124 116 -124 135 0 18 675 238 915 298 11 2 21 5 23 6 1 0 2 -1 2 -5z m3835 -65 c187 -53 685 -223 685 -234 0 -19 -77 -102 -124 -135 l-43 -29 -101 73 c-151 109 -506 315 -636 370 -86 36 -9 20 219 -45z m-2452 10 c49 -6 119 -18 155 -27 l67 -17 12 -50 c19 -84 19 -85 -24 -72 -59 17 -247 13 -343 -7 -46 -10 -141 -37 -210 -59 -123 -40 -127 -41 -270 -41 -147 0 -231 13 -317 50 l-38 16 60 30 c151 77 388 148 577 173 132 16 221 18 331 4z m-3743 -35 c63 -20 124 -57 234 -144 58 -45 90 -77 83 -81 -7 -3 -39 -9 -72 -13 -33 -4 -152 -18 -265 -32 -265 -31 -256 -31 -269 7 -31 91 5 204 82 254 54 35 116 37 207 9z m8468 10 c104 -43 158 -166 121 -273 -13 -38 -4 -38 -269 -7 -113 14 -232 28 -265 32 -33 4 -66 10 -73 13 -8 5 16 30 71 73 102 82 166 121 243 153 69 28 120 31 172 9z m-7112 -205 c4 -12 -29 -28 -163 -77 -202 -73 -246 -86 -523 -153 l-215 -51 -190 -1 c-255 0 -392 31 -483 109 -60 51 -56 60 36 69 42 4 180 19 305 35 l229 28 48 -28 c58 -34 130 -60 167 -60 62 0 127 49 178 134 7 12 47 25 120 41 61 13 182 48 270 78 l160 54 28 -81 c15 -45 30 -88 33 -97z m6077 46 c116 -23 115 -23 136 -63 33 -64 104 -112 165 -112 37 0 114 28 167 60 l47 28 228 -28 c126 -16 264 -31 307 -35 91 -9 95 -18 35 -69 -91 -79 -228 -109 -483 -109 -184 1 -195 2 -340 37 -82 20 -179 44 -215 52 -119 29 -203 55 -373 116 -135 49 -167 64 -163 77 3 9 18 52 33 97 l27 81 174 -58 c95 -32 210 -65 255 -74z m-3354 89 l71 -35 71 35 c70 35 99 44 99 29 0 -5 -6 -30 -13 -57 -14 -53 -13 -52 -99 -90 l-58 -25 -57 25 c-87 38 -86 37 -100 90 -7 27 -13 52 -13 57 0 15 29 6 99 -29z m28 -134 c41 -18 42 -18 103 7 34 13 64 22 67 20 11 -12 -108 -197 -127 -197 -15 0 -130 170 -130 193 0 10 28 2 87 -23z m-3377 7 c0 -27 -70 -96 -115 -112 -38 -15 -52 -16 -92 -5 -51 12 -146 60 -138 68 4 4 158 32 338 61 4 0 7 -5 7 -12z m7010 -17 c202 -31 193 -27 145 -56 -113 -69 -198 -65 -272 12 -45 46 -57 79 -25 70 9 -2 78 -14 152 -26z"/>
<path d="M864 3554 c-86 -42 -69 -169 31 -235 90 -60 315 -120 495 -133 60 -5 50 -2 -50 14 -256 40 -411 93 -480 165 -31 32 -35 42 -35 91 0 47 4 59 24 75 26 21 81 25 112 8 30 -15 42 -57 28 -91 -9 -23 -18 -28 -44 -28 -19 0 -41 7 -49 16 -19 18 -19 20 -6 45 12 21 40 25 58 7 9 -9 12 -9 12 0 0 21 -49 26 -70 7 -36 -33 -16 -76 42 -90 21 -5 33 -1 52 19 34 33 33 68 -1 105 -35 37 -78 46 -119 25z"/>
<path d="M313 3313 c-7 -3 -13 -18 -13 -34 0 -76 84 -156 183 -174 31 -6 37 -4 37 9 0 20 -34 89 -64 129 -34 46 -110 83 -143 70z"/>
<path d="M12395 3290 c-16 -10 -38 -30 -48 -42 -29 -36 -78 -143 -67 -146 5 -2 34 4 65 12 88 26 155 97 155 166 0 28 -2 30 -37 30 -21 0 -51 -9 -68 -20z"/>
<path d="M73 3129 c-55 -16 -86 -74 -67 -124 9 -24 58 -45 102 -45 74 0 269 78 265 105 -2 15 -150 63 -213 69 -30 3 -69 1 -87 -5z"/>
<path d="M12603 3129 c-62 -10 -174 -51 -176 -64 -5 -27 192 -105 265 -105 44 0 93 21 102 45 22 58 -7 111 -69 125 -46 11 -51 11 -122 -1z"/>
<path d="M452 3024 c-59 -29 -95 -71 -110 -127 -11 -41 -1 -87 18 -87 28 0 80 32 104 63 30 39 66 125 66 157 0 26 -16 25 -78 -6z"/>
<path d="M12270 3030 c0 -34 39 -124 70 -162 33 -39 95 -67 112 -50 31 31 -2 135 -55 175 -73 55 -127 71 -127 37z"/>
<path d="M8149 2675 c-108 -38 -179 -102 -179 -162 0 -41 27 -51 86 -28 52 20 95 67 119 128 24 64 19 77 -26 62z"/>
<path d="M4485 2662 c-72 -30 -115 -63 -136 -104 -29 -57 -23 -82 21 -86 57 -5 121 43 159 119 17 34 31 68 31 76 0 17 -26 16 -75 -5z"/>
<path d="M4610 2663 c0 -28 45 -116 71 -140 34 -31 97 -56 125 -49 30 8 32 48 5 92 -46 75 -201 149 -201 97z"/>
<path d="M8246 2653 c14 -59 55 -123 93 -149 50 -33 118 -44 127 -20 19 50 -65 150 -151 180 -68 23 -77 21 -69 -11z"/>
<path d="M4551 2480 c-33 -70 -61 -168 -61 -211 0 -103 105 -158 157 -81 36 54 14 209 -47 322 l-18 35 -31 -65z"/>
<path d="M8183 2474 c-89 -200 -52 -362 71 -310 66 28 71 121 15 266 -47 123 -50 124 -86 44z"/>
</g>
</svg> */}
          
          
          <div className='space sm:h-36 max-sm:h-5 ' style={{backgroundColor:'#E3FEF7'}}>

          </div>
            <div className='working-with-container max-sm:text-xl  z-20 relative sm:leading-loose max-sm:leading-normal'>
           <h1>Working With Us !</h1>
           <p  className=' w-4/5 m-auto text-xs max-sm:w-full max-sm:p-2 sm:text-lg'>
"At ADISRI Publications, we pride ourselves on fostering a dynamic and <b className='  rounded-xl sm:p-1'> supportive working environment </b> where creativity and innovation thrive. Joining our team means not only gaining access to exciting opportunities in the publishing industry but also enjoying a range of benefits designed to support your <b className=' rounded-xl sm:p-1 text2'> professional growth</b> and well-being. From competitive compensation packages to flexible work arrangements and ongoing learning opportunities, we are committed to nurturing talent and empowering our employees to reach their full potential."</p>
           </div>
           
           <div className='p-3 opening-text text-center relative z-30  leading-loose '>

            <h1>Current Opening </h1>
           </div>
           <hr />
           <br />
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-10 z-20 relative">
        
          {careers.map(career => (
            <div key={career.Carrer_Job_Id} className="col-span-1 w-3/5 m-auto ">
              <CareerItem career={career} />
            </div>
          ))}
        </div>
        </div>
      )}
    </div>
  );
}
export default CareersScreen