import style from "./Launch.module.css"
const Launch = ({mission}) => {
    const {mission_name, launch_year, links} = mission;
    if (launch_year !== '2020'){
        return (
            <div>
                <div className={style.Launch}>
                    <div className={style.info}>
                        <h4>mission_name: {mission_name}</h4>
                        <p>launch_year: {launch_year}</p>
                    </div>
                    <div className={style.picture}><img src={links.mission_patch_small} alt={mission_name}/></div>
                </div>
                <hr/>
            </div>
        );
    }

};

export default Launch;