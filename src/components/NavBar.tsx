import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { Dispatch, SetStateAction } from "react"

interface NavbarProps {
    setRetroModalState: Dispatch<SetStateAction<boolean>>
}


const NavBar = ({setRetroModalState}: NavbarProps) => {
    return (
        <div
        className="
        flex
        justify-between
        text-base text-black
        bg-gray-300
        dark:text-white dark:bg-gray-900
        shadow-2xl
        items-left
        "
    >
        <div className="flex items-center justify-end ml-4">
            <Link href="/" className="block px-3 py-2">Home</Link>
            <a href="#" className="block px-3 py-2" onClick={() => {setRetroModalState(true)}}>Past answer</a>
            <a
                href="https://th.wordleans.com"
                target="_blank"
                className="block px-3 py-2"
                >Thwordle Answer</a>
            <a
                href="https://twitter.com/wordleansdotcom"
                target="_blank"
                className="block px-3 py-2"
                >Twitter</a>
            <a
                href="https://github.com/gxjakkap/wordle-ans"
                target="_blank"
                className="block px-3 py-2"
                >GitHub</a>
        </div>
        <button
        id="theme-toggle"
        type="button"
        className="
            text-gray-500
            dark:text-gray-400
            hover:bg-gray-100
            dark:hover:bg-gray-700
            focus:outline-none focus:ring-4 focus:ring-gray-200
            dark:focus:ring-gray-700
            rounded-lg
            text-sm
            px-5
            py-1
        "
        >
        {/* <FontAwesomeIcon icon={faMoon} className="cursor-pointer text-xl" />
        <FontAwesomeIcon icon={faSun} className="cursor-pointer text-xl" /> */}
        </button>
    </div>
    )
}

export default NavBar