import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {EpisodesPage, PersonsPage} from "./pages"

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'episodes'}/>},
            {path: 'episodes', element: <EpisodesPage/>},
            {path: 'character/:idcharacter', element: <PersonsPage/>}
        ]
    }
]);

export {
    router
}