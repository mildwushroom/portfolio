import React from 'react'
import { styles } from '../styles';

const Footer = () => {
  return (
    <div>
        <p class="mt-8 text-base leading-6 text-center text-gray-100">
            © 2021 SomeCompany, Inc. All rights reserved.
        </p>
        <i className={styles.sectionSubText}>"Kirby" (https://skfb.ly/ozDoq) by sheamkennedy is licensed under Creative Commons Attribution-NonCommercial.<br></br></i>
        <i>"Takis Fuego - México" (https://skfb.ly/oGSpu) by Luiss Maker is licensed under Creative Commons Attribution</i>
    </div>
  )
}

export default Footer