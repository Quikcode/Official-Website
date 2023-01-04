import s from "./styles/navbar.module.scss"
import {GitHub} from "react-feather"
import parseClass from "@/utils/parseClass.js";
import {useEffect, useState} from "react";
import returnClassActive from "@/utils/returnClassActive.js";
import {Link} from "react-router-dom"

const Routes = [
    {
        title: "Home",
        route: "",
    },
    {
        title: "Projects",
        route: "projects",
    },
    {
        title: "About",
        route: "about",
    }
]

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [pathRoute, setPathRoute] = useState("")

    const HandlerClickButtonMenu = (e) => {
        e.preventDefault()
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        window.addEventListener("resize", () => {
            setIsMenuOpen(false)
        })
    }, [])

    return (
        <div className={s.Navbar}>
            <div className={s.Container}>
                <div className={s.Logo}>
                    <img width={50} height={50} src={"/logo_yellow.webp"} alt={"Logo Quikcode"}/>
                    <h1>Quikcode</h1>
                </div>
                <nav className={s.Navegation + returnClassActive(isMenuOpen, parseClass(s.Open)) }>

                    {
                        Routes.map((route, index) => {
                            if(route.route === pathRoute) {
                                return (
                                    <Link key={index} className={s.Active} to={"/"}>
                                        {route.title}
                                    </Link>
                                )
                            }
                            return (
                                <Link key={index} to={"/"+route.route}>
                                    {route.title}
                                </Link>
                            )
                        })
                    }

                    <a className={s.Github} target={"_blank"} rel={"noreferrer nofollow"} href="https://github.com/Quikcode">
                        <GitHub/>
                        Github
                    </a>
                </nav>
                <button onClick={HandlerClickButtonMenu} className={s.ButtonMenu}>
                    <div className={returnClassActive(isMenuOpen, s.Open)}></div>
                </button>
            </div>
        </div>
    )
}