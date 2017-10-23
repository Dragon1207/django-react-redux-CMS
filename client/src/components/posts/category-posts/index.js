import React from 'react';

function CategoryPosts(props) {
  return (
    <section className={'post-list-container'}>
      {props.categories.map(category => (
        <div key={category.id}>
          <div>
            <h1>{category.title}</h1>
            <div>{category.posts.map(post => post)}</div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default CategoryPosts