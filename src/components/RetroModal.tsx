import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import { useRouter } from 'next/router'

interface ModalProps {
    setModalState: Dispatch<SetStateAction<boolean>>,
    day: number
}

const RetroModal = ({setModalState, day}: ModalProps) => {
    const router = useRouter()

    const [dayVal, setDayValue] = useState(0)

    return (
        <div tabIndex={-1} aria-hidden="true" className="w-full overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center items-center">
            <div className="w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-slate-700">
                    <button onClick={() => {setModalState(false)}} type="button" className="top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute">
                        <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="px-6 py-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Check past Wordle Answer</h3>
                        <form className="space-y-6" action="#">
                            <div>
                                <label htmlFor="day" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID (days since launch, e.g. {day})</label>
                                <input value={dayVal} onChange={(e) => {setDayValue(parseInt(e.target.value))}} type="number" name="day" id="day" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder={day.toString()} required />
                            </div>
                            <button onClick={() => {router.push(`/past/${dayVal}`)}} type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Check</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RetroModal