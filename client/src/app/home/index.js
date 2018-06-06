import React from 'react';
import githubIcon from 'https://rafayio-assets.nyc3.digitaloceanspaces.com/rafay.io/assets/media/github-icon.svg';

export function Home() {
  return (
    <section className={'home flex'} >
      <div className={'home-text flex-6'}>
        <h1><span className={'dancing-r'}>r</span>afay</h1>
        <h2>
          <i>tech enthusiast. musician.
          </i>
        </h2>
        <div className={'home-about-text'}>
          I like to build things that make people's lives easier. Web developer for over 9 years, wizard of style. Contact me if you would like to get started on a project or consulting.

          <div className={'contact-info'}>
            <div className={'email-icon'}>
              <i className={'material-icons'}>email</i>
              <span><a href={'mailto:rafay826@gmail.com'}>rafay826@gmail.com</a></span>
            </div>
            <a className={'github-icon'}
               target={'blank'}
               href={'https://github.com/rafay826'}>
              <img className={'github-img'} alt={'github'} src={githubIcon}/>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}