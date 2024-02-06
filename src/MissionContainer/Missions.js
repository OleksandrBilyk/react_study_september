import {useEffect, useState} from "react";
import axios from "axios";

import Launch from "../LaunchContainer/Launch"
const Missions = () => {
    const [launchs, setLaunchs] = useState([])

    useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/launches/').then(({data})=>setLaunchs(data))
    }, []);

    return (
        <div>
            {launchs.map(mission => <Launch key={mission.flight_number} mission={mission} />)}
        </div>
    );
};

export default Missions;