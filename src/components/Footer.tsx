const WDAFooter = () => {
    return (
        <div
            className="
            fixed
            bottom-0
            bg-inherit
            w-full
            justify-center
            text-stone-900
            dark:text-slate-300
            text-xxs
            overflow-y-hidden
            ">
            <a className="flex justify-center" href="https://github.com/gxjakkap/wordle-ans" target="_blank">
                <svg
                    className="w-6 h-6 text-gray-600 hover:text-gray-800 button--github"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    width="32"
                    height="32"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.104 2.104 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688a3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 0 1 .1 2.65a3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 0 1 .675 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247z"
                        fill="currentColor"
                    />
                </svg>
            </a>
            <a
                className="flex justify-center hover:underline hover:text-blue-500"
                href="https://www.nytimes.com/games/wordle/index.html/"
            >Play NYT Wordle</a>
            <a
                className="flex justify-center hover:underline hover:text-blue-500"
                href="https://twitter.com/messages/compose?recipient_id=1338534842447798274"
            >Answer&apos;s not matching up?</a>
            <a
                className="flex justify-center hover:underline hover:text-blue-500"
                href="https://twitter.com/guntxjakka"
                target="_blank"
            >Made by GuntxJakka</a>
        </div>
    )
}

export default WDAFooter