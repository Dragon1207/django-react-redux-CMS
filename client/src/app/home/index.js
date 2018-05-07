import React from 'react';
import hybridImg from '../../assets/images/hybrid-app-image.svg';
import allDevicesImg from '../../assets/images/djudo-tech-devices-image.svg';
import { config } from './config';
import { Row, RowText, TimeLapseImg } from './components/rows';


export function Home() {
  return (
    <section className={'home'} >
      <div className={'home-text'}>
        <h1>rafay.io</h1>
        <h2>Tech. Music. Life.</h2>
      </div>
    </section>
  )
}