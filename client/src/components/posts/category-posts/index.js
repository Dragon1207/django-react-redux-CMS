import React from 'react';

function CategoryPosts(props) {
  return (
    <section className={'post-list-container'}>
      <div>
        {props.categories.map(category => (
          <div>
            <h1>{category.title}</h1>
            <div>{category.posts.map(post => post)}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CategoryPosts