import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/UserPage";
import {PostsPage} from "./pages/PostPage";
import {postService} from "./services/postService";
import {UserDetailsPage} from "./pages/UserDetailPage";
import {PostDetailPage} from "./pages/PostDetailPage";

const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'users'}/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'users/user-details/:userId', element: <UserDetailsPage/>, children:[
                    {path: ':userId', element: <PostsPage/>, loader: ({params:{userId}})=>postService.getByUserId(userId)}
                ]},
            {path: 'post-details/:postId', element: <PostDetailPage/>, loader: ({params:{postId}})=>postService.getByPostId(postId)}

        ]
    }
]);

export {router}