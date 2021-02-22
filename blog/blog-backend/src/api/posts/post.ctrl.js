import Post from '../../models/post'
import posts from './index';

/*
  POST / api / posts
  {
    title: '제목',
    body: '내용',
    tags: ['태그1', '태그2']
  }
*/
export const write = async ctx => {
  const {title, body, tags} = ctx.request.body;
  const post = ew Post({
    title,
    body,
    tags,
  });
  try {
    awit post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};
/*
  Get / api/ posts
*/
export const list = async ctx => {
  try {
    const posts = await Post.find().exec();
    ctx.body = posts;
  } catch(e) {
    ctx.throw(500, e);
  }
};
/* 
  Get / api / posts/ :id
*/
export const read = async ctx => {
  const {id} = ctx.params;
  try {
    const post = await Post.findById(id).exec();
    if (!post) {
      ctx.status = 404; // Not Found
      return;
    }
    ctx.body = post;
  } catch(e) {
    ctx.throw(500, e);
  }
};

export const remove = ctx => {};

export const update = ctx => {};