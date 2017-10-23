import React from 'react';

export function Post(props) {
  return (
    <div key={props.post.id}>
      <div className={'flex'}>
        <section className={'flex-row flex10'}>
          <div className={'flex-column post-column'}>
            <div className={'post-container flex-12'}>
              <div className={'post'}>
                <h2>{props.post.title}</h2>
                <h3>{props.post.description}</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}