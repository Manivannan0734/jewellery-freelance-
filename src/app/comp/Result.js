
import React from 'react';
import Image from 'next/image';
import Gold from '../../../public/gold.png';
import Silver from '../../../public/silver.png';
import styles from '../styles/Result.module.css';
import Logo from '../../../public/logo.png';
import '@fortawesome/fontawesome-free/css/all.css';
import Bg from '../../../public/BG.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'; 

const Result = ({ formData }) => {
    const date = Date.now();
    const goldString = "GOLD(1GM)";
    const rupeeSymbol = String.fromCharCode(8377);
    const silverString = "SILVER(1GM)";
    return (
        <div className={styles.container}>
            <Image className={styles.img} src={Bg} alt='loading' />
            <div className={styles.inside} style={{}} >
                <Image className={styles.logo} src={Logo} width={150} height={150} alt='loading' /> 
                <h1  >VAISHNAVI JEWELLERS</h1>
                <h2 className={styles.tdy} >TODAY'S RATE <br/>
                 {(new Intl.DateTimeFormat('en-UK', { year: 'numeric', day: '2-digit', month: '2-digit' }).format(date))} </h2>
               <div className={styles.gs} >
                <Image src={Gold} width={90} height={80} alt='loading' />
                <Image src={Silver} width={90} height={80} alt='loading' />
                </div>
                <div className={styles.rate} >
                <h3 style={{ color: "gold" }} > {goldString}<br/>{rupeeSymbol}:  {formData.gold}</h3>
                <h3 style={{ color: "#989898" }} > {silverString} <br/> {rupeeSymbol}: {formData.silver}</h3> 
                </div>
                <div className={styles.address} >
                <h6>
                <i class="fas fa-phone"> </i> Contact<br/>9487729568<br/>9444316634</h6>
                <h6><FontAwesomeIcon color='red' icon={"faMapMarketAlt"} />
                <i class="fa-solid fa-location-dot"></i> Address <br/> 38/1D, Rukmani <br/> Palayam Road,<br/>Mannargudi.
                </h6>
                    
                </div>
            </div>
           
            
        </div>
                    
    );
};

export default Result;
