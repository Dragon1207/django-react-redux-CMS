import React from 'react';
import DjudoComments from '../../components/comments';
import { Card } from 'material-ui/Card';
import * as moment from 'moment';

export default function PostDetailComponent({ post }) {
  return (
    <section className='post-detail-container'>
      <Card>
        <div className='post-body'>
          <div className='flex post-header-container '>
            <div className='flex-9'>
              <h1 className='post-title'>{post.title}</h1>
            </div>
            <div className='flex-3 post-info flex flex-column'>
              <div className='flex-row'>
                <span className='flex-3'>Published:</span>
                <p>{moment(post.created).format('L')}</p>
              </div>
              <div className='flex-row'>
                <span className='flex-3'>Category:</span>
                <p>{post.category_obj !== undefined ? post.category_obj.title : ''}</p>
              </div>
            </div>
          </div>
          <p>{post.body}</p>
        </div>
      </Card>
      <div className='post-detail-comments'>
        <DjudoComments id={post.id} />
      </div>
    </section>
  )
}