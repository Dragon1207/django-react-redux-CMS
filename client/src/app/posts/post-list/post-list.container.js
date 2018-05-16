import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadPosts } from '../post-actions';
import { Post } from './post-list.component';

class PostList extends React.Component {

  componentDidMount() {
    this.props.dispatch(loadPosts());
  }

  render() {
    const { list } = this.props
    return (
	    <section className='flex'>
		    <div className='flex-10'>
          {
	          list.map(post => (
		          <Link key={post.id} to={`/posts/${post.id}`}>
			          <Post post={post} />
		          </Link>
	          ))
          }
		    </div>
		    <div className='flex-2'>
			    categories
		    </div>
	    </section>
    )
  }
}

const mapStateToProps = state => {
  const { posts } = state;
  const { loading, list } = posts;
  return {
    loading,
    list
  }
}

export default connect(mapStateToProps)(PostList)