const baseURL = 'https://jsonplaceholder.typicode.com'

const todos = '/todos';
const albums = '/albums';
const comments = '/comments';

const urls = {
    todos,
    albums,
    comments,
    byPostId: (postId) => `posts/${postId}/`

}

export {
    baseURL,
    urls
}