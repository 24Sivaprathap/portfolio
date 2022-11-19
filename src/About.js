import React from 'react';
import './About.css';
import aboutImg from '../src/img/about.jpg';

function About()  {
  // up to top btn
  window.addEventListener("scroll", function(){
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0)
  });
  return (
    <div className='about component__space' id='About'>
      <div className='container'>
        <div className='row'>
            <div className='col__2'>
                <img src={aboutImg} alt='' className='about__img'></img>
            </div>
            <div className='col__2'>
                <h1 className='about__heading'>
                    About Me
                </h1>
                <div className='about__meta'>
                    <p className='about__text p__color'>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    <br></br>
                    <br></br>
                    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
                    </p>
                    <div className='about__button d__flex align__items__center'>
                      <a href ='#bth'><button className='about btn pointer'>Download CV</button></a>
                      <a href ='#btn'><button className='about btn pointer'>Hire Me</button></a>
                    </div>
                    
                </div>
            </div>
        </div>
      </div>
      {/* up to top btn */}
      <div className='up__to__top__btn'>
        <a href='#' className='bottom__to__top'>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up white" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
</svg>
</a>
      </div>
    </div>
  )
}

export default About;
