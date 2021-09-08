import classes from "./MainVideo.module.css";

const MainVideo = props => {
    return (
            <div className={classes.videoWrapper}>
                <video className={classes.video} autoPlay src={props.videoSrc} muted loop/>
            </div>
    );
};

export default MainVideo;