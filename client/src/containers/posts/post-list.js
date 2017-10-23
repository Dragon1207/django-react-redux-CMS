import { connect } from 'react-redux'
import { PostList } from '../../components/posts/post-list';
import { appStore } from '../../../store';
import { loadPosts } from '../../../actions/post-actions';

mapStateToProps = state => {
  return {
    posts: () => { return state.posts }
  }
}

mapDispatchToProps = dispatch => {
  return {
    getPosts: appStore.dispatch(loadPosts())
  }
}

export const PostList = connect(
  mapStateToProps,
  mapDispatchToProps)(PostList);