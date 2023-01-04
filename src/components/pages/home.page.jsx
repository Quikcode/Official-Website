import s from "./styles/home.module.scss"
import {GitPullRequest} from "react-feather";

export default () => {
    return (
        <>
            <header className={s.Header}>
                <div className={s.Container}>
                    <div className={s.Content}>
                        <h2>For the Community</h2>
                        <h1>For the World</h1>
                        <div className={s.ButtonWithP}>
                            <a rel={"noreferrer nofollow"} target={"_blank"} href="https://github.com/Quikcode">
                                <GitPullRequest/>
                                Start collaborating
                            </a>
                            <p>Collaborate in one of our projects</p>
                        </div>
                    </div>
                    <div className={s.Video}>
                        <video src="/Vídeo sin título ‐ Hecho con Clipchamp (1).mp4" loop={true} autoPlay={true} muted={true}></video>
                    </div>
                </div>
            </header>
        </>
    )
}