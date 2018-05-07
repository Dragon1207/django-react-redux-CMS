import React from 'react';


export function Home() {
  return (
    <section className={'home flex'} >
      <div className={'home-text flex-6'}>
        <h1>rafay</h1>
        <h2>
          <i>tech enthusiast. musician. <br/>
            your friendly neighborhood silicon-man.
          </i>
        </h2>
        <div className={'home-about-text'}>
          I like to build things that make people's lives easier. Web developer for over 9 years, wizard of style. Contact me if you would like to get started on a project or consulting.

          <div>
            <a href={'mailto:rafay826@gmail.com'}><i className={'material-icons'}>email</i>rafay826@gmail.com</a>
            <a href={'https://github.com/rafay826'}>github</a>
          </div>
        </div>
      </div>
    </section>
  )
}