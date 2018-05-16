import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadPosts } from '../post-actions';
import { Post } from './post-list.component';
import {loadCategories} from "../category-actions";

class PostList extends React.Component {

	initialState = {
		posts: []
	};

	constructor(props) {
		super(props);
		this.setPost = this.setPost.bind(this);
		this.state = this.initialState;
	}

  componentWillMount() {
    this.props.dispatch(loadPosts());
    this.props.dispatch(loadCategories());
  }

  componentDidMount() {
		this.setState({ posts: this.props.list });
  }

  componentWillUpdate(nextProps) {
  	console.log(nextProps);
  }

  setPost(posts) {
  	this.setState({ posts: posts });
  }

  render() {
    const { list, categoryList } = this.props
    return (
	    <section className='flex'>
		    <div className='flex-10'>
          {
	          this.state.posts.map(post => (
		          <Link key={post.id} to={`/posts/${post.id}`}>
			          <Post post={post} />
		          </Link>
	          ))
          }
		    </div>
		    <div className='flex-2'>
			    <div onClick={() => this.setPost(list)}>
				    All
			    </div>
			    {
				    categoryList.map(category => (
					    <div onClick={() => this.setPost(category.posts)} key={category.id}>
					      { category.title }
					    </div>
				    ))
			    }
		    </div>
	    </section>
    )
  }
}

const mapStateToProps = state => {
  const { posts, categories } = state;
  const { loading, list } = posts;
  const { categoryList } = categories;
  return {
    loading,
    list,
	  categoryList
  }
}

export default connect(mapStateToProps)(PostList)