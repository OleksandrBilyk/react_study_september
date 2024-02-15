import {Outlet, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../services/userService";
import {UserDetail} from "../components/UserContainer/UserDetail";

const UserDetailsPage = () => {
    const {userId} = useParams();
    const [user, setUser] = useState(null)
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setUser(state)
        } else {
            userService.getByUserId(userId).then(({data}) => setUser(data))
        }
    }, [userId])

    return (
        <div>
            {user && <UserDetail user={user}/>}
            <Outlet/>
        </div>
    );
};


export {UserDetailsPage};