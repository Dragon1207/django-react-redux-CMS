import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadPosts } from '../post-actions';
import { Post } from './post-list.component';
import {loadCategories} from "../category-actions";

class PostList extends React.Component {

	initialState = {
		posts: [],
		categoryPostTitle: 'All'
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

  setPost(posts, title) {
  	this.setState({ posts: posts });
  	this.setCategoryPostTitle(title);
  }

  setCategoryPostTitle(title) {
		this.setState({ categoryPostTitle: title });
  }

  render() {
    const { list, categoryList } = this.props
    return (
	    <div className='flex posts-container'>
		    <section className='flex-10'>
			    <h1>{this.state.categoryPostTitle} Posts</h1>
          {
	          this.state.posts.length >= 1 ?
		          this.state.posts.map(post => (
			          <Link key={post.id} to={`/posts/${post.id}`}>
				          <Post post={post} />
			          </Link>
		          )) :
		          'no posts available'
          }
		    </section>
		    <section className='flex-2'>
			    <h1>Categories</h1>
			    <div className='category-title'
			         onClick={() => this.setPost(list)}>
				    All
			    </div>
			    {
				    categoryList.map(category => (
					    <div className='category-title'
					         onClick={() => this.setPost(category.posts, category.title)}
					         key={category.id}>
					      { category.title }
					    </div>
				    ))
			    }
		    </section>
	    </div>
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