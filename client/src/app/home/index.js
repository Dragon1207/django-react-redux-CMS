import React from 'react';
import hybridImg from '../../assets/images/hybrid-app-image.svg';
import allDevicesImg from '../../assets/images/djudo-tech-devices-image.svg';
import { config } from './config';
import { Row, RowText, TimeLapseImg } from './components/rows';


export function Home() {
  return (
    <section className={"home"} >
      <Row class={"flex-row"}>
        <RowText
          label={config.speed.label}
          desc={config.speed.description} />
        <TimeLapseImg/>
      </Row>
      <Row class={"flex-row"}>
        <img className={"scale"} src={hybridImg} />
        <RowText
          label={config.hybrid.label}
          desc={config.hybrid.description}/>
      </Row>
      <Row>
        <RowText
          label={config.allDevices.label}
          desc={config.allDevices.description}/>
        <img className={"allDevices-img"} src={allDevicesImg} />
      </Row>
    </section>
  )
}