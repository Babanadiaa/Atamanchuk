import { useState, useEffect } from "react"
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
// localStorage.theme === "dark" ||
//     (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
export default function ThemeToggle() {
    

    
    const savedDarkTheme = localStorage.getItem('darkTheme') === 'true' ;

    const [darkTheme, setDarkTheme] = useState(savedDarkTheme);
    const body = document.body;

    useEffect(() => {
        if (darkTheme) {
            body.classList.add('dark');
            body.classList.remove('light');
            document.querySelector("body")?.setAttribute("data-theme", "dark");
        } else {
            body.classList.add('light');
            body.classList.remove('dark');
            document.querySelector("body")?.setAttribute("data-theme", "light");
        }
        localStorage.setItem("darkTheme", darkTheme);
    }, [darkTheme, body.classList]);

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };

    return (
        <div className="dark_mode flex justify-center items-center px-4">
            <button
                id="darktheme-toggle"
                className="dark_theme_input cursor-pointer"
                onClick={toggleTheme}
                aria-label="Toggle Dark Mode" >
                {darkTheme ? <FaMoon className="  text-xl md:pb-1  "/> : <CiSun className="text-3xl md:pb-1" />}
            </button>

        </div>
    )
}
