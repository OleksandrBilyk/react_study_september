const baseURL = 'https://jsonplaceholder.typicode.com'

const users = '/users';
const posts = '/posts';
const comments = '/comments';

const urls = {
    users,
    posts: {
        byUserId: (userId) => `${users}/${userId}/posts`
    },
    comments: {
        byPostId: (postId) => `${posts}/${postId}${comments}`
    }
}

export {
    urls,
    baseURL
}