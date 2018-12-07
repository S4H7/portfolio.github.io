import React from 'react';
import dr from './dr.png';
import bg from './bg.png';
import lw from './lw.png';
import robofriends from './robofriends.png';
import sb from './sb.png';


const Portfolio=()=>{
  return(
    <div>

    <article className='center'>
<h2 className="f2 fw4 pa3 mv0">Portfolio</h2>
<div className="cf pa2">
 <div className="fl w-100 w-50-m w-third-l pa2">
   <a href="https://bellalo12.github.io/dancing_robot/" className="db link dim tc animated fadeInDown">
     <img src={dr} alt="dr-screenshot" className="w-100 db outline black-10"/>
     <dl className="mt2 f6 lh-copy">
       <dt className="clip">Title</dt>
       <dd className="ml0 black truncate w-100">{'ROBOT JANE'}</dd>
       <dt className="clip">Intro</dt>
       <dd className="ml0 gray truncate w-100">{'An animated robot that can able to play with'}</dd>
     </dl>
   </a>
 </div>
 <div className="fl w-100 w-50-m w-third-l pa2">
   <a href="https://bellalo12.github.io/github_page/" className="db link dim tc animated fadeInUp">
     <img src={lw} alt="lw-screenshop" className="w-100 db outline black-10" />
     <dl className="mt2 f6 lh-copy">
       <dt className="clip">Title</dt>
       <dd className="ml0 black truncate w-100 ttu">Landing Website</dd>
       <dt className="clip">Intro</dt>
       <dd className="ml0 gray truncate w-100">{'A responsive landing site for small business'}</dd>
     </dl>
   </a>
 </div>

 <div className="fl w-100 w-50-m w-third-l pa2">
   <a href="https://bellalo12.github.io/background_generator" className="db link dim tc animated fadeInDown">
     <img src={bg} alt="bg-screenshop" className="w-100 db outline black-10"/>
     <dl className="mt2 f6 lh-copy">
       <dt className="clip">Title</dt>
       <dd className="ml0 black truncate w-100 ttu">Background Generator</dd>
       <dt className="clip">Intro</dt>
       <dd className="ml0 gray truncate w-100">{'A JavaScript app to help web developer generate background'}</dd>
     </dl>
   </a>
 </div>

 <div className="fl w-100 w-50-m w-third-l pa2">
   <a href="https://search-robofriends.herokuapp.com/" className="db link dim tc animated fadeInUp">
     <img src={robofriends} alt="sb-screenshop" className="w-100 db outline black-10"/>
     <dl className="mt2 f6 lh-copy">
       <dt className="clip">Title</dt>
       <dd className="ml0 black truncate w-100 ttu">{'Robofriends'}</dd>
       <dt className="clip">Intro</dt>
       <dd className="ml0 gray truncate w-100">{'A React/Redux based application with API'}</dd>
     </dl>
   </a>
 </div>

 <div className="fl w-100 w-50-m w-third-l pa2">
   <a href="https://smart-brain-demo.herokuapp.com/" className="db link dim tc animated fadeInDown">
     <img src={sb} alt="sb-screenshop" className="w-100 db outline black-10"/>
     <dl className="mt2 f6 lh-copy">
       <dt className="clip">Title</dt>
       <dd className="ml0 black truncate w-100 ttu">{'Face Recognition'}</dd>
       <dt className="clip">Intro</dt>
       <dd className="ml0 gray truncate w-100">{'Use a RESTful API to detect face in given images'}</dd>
     </dl>
   </a>
 </div>

</div>
</article>
    </div>
  );
}




export default Portfolio;
