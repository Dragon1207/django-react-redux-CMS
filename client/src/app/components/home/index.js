import React from 'react';
import timelapseFrameImg from '../../../assets/images/built-for-speed-image/timelapse-frame.svg';
import hybridImg from '../../../assets/images/hybrid-app-image.svg';
import allDevicesImg from '../../../assets/images/djudo-tech-devices-image.svg';

const config = {
  speed: {
    label: 'Built for Speed',
    description: 'Made for flexibility and performance',
    img: '../../../assets/images/built-for-speed-image/built-for-speed-image@1x.png 1x',
    img2x: '../../../assets/images/built-for-speed-image/built-for-speed-image@2x.png 2x',
    timelapseImg: '../../../assets/images/built-for-speed-image/timelapse-icon.svg',
    timelapseFrameImg: '../../../assets/images/built-for-speed-image/timelapse-frame.svg'
  },
  hybrid: {
    label: 'Hybrid App',
    description: 'Django handles the engine, Angular handles the beauty',
    img: '../../../assets/images/hybrid-app-image.svg'
  },
  allDevices: {
    label: 'Mobile to Desktop',
    description:
    'Develop applications for all devices in a sinch',
    img:
    '../../../assets/images/djudo-tech-devices-image.svg'
  }
}

export function Home() {
  return (
    <section className={"home"} >
      <div className={"row-container flex flex-row"}>
        <div>
          <div className={"speed-text label"} >{ config.speed.label }</div>
          <div className={"speed-text description"} >{ config.speed.description }</div>
        </div>
        <div className={"speed-image-container scale"}>
          <img src={timelapseFrameImg} />
          <i className={"material-icons timelapse-icon"}>timelapse</i>
        </div>
      </div>
      <div className={"row-container flex flex-row"}>
        <img className={"scale"} src={hybridImg} />
        <div>
          <div className={"hybrid-text label flex-6"} >{ config.hybrid.label }</div>
          <div className={"hybrid-text description flex-6"} >{ config.hybrid.description }</div>
        </div>
      </div>
      <div className={"row-container"}>
        <div>
          <div className={"allDevices-text label flex-6"} >{ config.allDevices.label }</div>
          <div className={"allDevices-text description flex-6"} >{ config.allDevices.description }</div>
        </div>
        <img className={"allDevices-img"} src={allDevicesImg} />
      </div>
    </section>
  )
}