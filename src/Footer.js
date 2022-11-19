import React from 'react'
import './Footer.css'
import footerImg from '../src/img/logo (1).png'

export default function Footer() {
  return (
    <div className='footer d__flex align__items__center justify__content__space__between pz-10'>
        <img src={footerImg} alt='' className='footer__img pointer'></img>
        <span className='copyright'>Copyright @ 2022 programmer SivaPrathap.All Rights Reserved</span>
      
    </div>
  )
}
