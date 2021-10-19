import classes from "./MainVideo.module.css";

const MainVideo = props => {
    return (
            <div className={classes.videoWrapper}>
                <video className={classes.video} autoPlay src={props.videoSrc} muted loop poster="image/main.jpg">
                    Sorry. Your browser doesn't support the video player on this website.
                </video>
            </div>
    );
};

export default MainVideo;