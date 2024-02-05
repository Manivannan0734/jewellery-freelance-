'use client'
import React, { useEffect, useState } from 'react';
import ParentComponent from './comp/ParentComponent';
import styles from '../app/styles/Result.module.css'
const Page = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    setIsMobile(mobileRegex.test(userAgent));
  }, []);

  if (isMobile) {
    return (
      <div>
        <h1>Please open this application on a PC or On desktop site in chrome.</h1>
      </div>
    );
  }

  return (
    <div className={styles.page} >
      <h1>Welcome to VAISHNAVI JEWELLERS AND BANKERS</h1>
      <ParentComponent/>
    </div>
  );
};

export default Page;
