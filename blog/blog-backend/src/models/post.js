import mongoose from 'mongooose'

const {Schema} = mongoose;

const PostSchema = new Schema({
    title: String,
    body: String,
    tags: [String], // 문자열로 이루어진 배열
    publishedData: {
        type: Data,
        default: Date.now, // 현재 날씨를 기본값으로 지정
    },
});

const Post = mongoose.model('Post', PostSchema)
export defualt Post;