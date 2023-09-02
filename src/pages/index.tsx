
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useEffect, useState } from 'react'
import Modal from '@/components/FrontModal'
import NavBar from '@/components/NavBar'
import WDAFooter from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
const karnak = localFont({ src: '../font/karnakcondensed.otf' })

interface WdData {
   word: string,
   day: number

}

interface DictData {
   pronunciation: string,
   definition: string,
   pos: string,
   link: string,
   audioLink: string,
   audioAvailable: boolean
}

export const getServerSideProps: GetServerSideProps<WdData> = async() => {
    const date = new Date()
    const nytRes = await fetch(`https://www.nytimes.com/svc/wordle/v2/${date.toISOString().substring(0, 10)}.json`)

    if (nytRes.status !== 200){
        throw Error('Failed API Res')
    }

    else {
        const nytWordleData = await nytRes.json()
        return {
            props: {
                word: nytWordleData['solution'] as string,
                day: nytWordleData['days_since_launch'] as number,
            }
        }
    }

    
}

export default function Home({word, day}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [showModal, setShowModal] = useState(true)
    const [pronunAudio, setPronunAudio] = useState<HTMLAudioElement | null>(null)
    const [dictAvailable, setDictAvailable] = useState(false)
    const [dictData, setDictData] = useState<DictData>({
        pronunciation: '',
        definition: '',
        pos: '',
        link: '',
        audioLink: '',
        audioAvailable: false
    })


    useEffect(() => {
        const fetchDictData = async() => {
            const dictApiRes = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            if (dictApiRes.status !== 200){
                return {}
            }
            setDictAvailable(true)
            const dictData = await dictApiRes.json()
            const meanings = dictData[0].meanings[0]
            let pronunciation = ''
            let audioLink = ''
            let audioAvailable = false

            const phoneticnoS = dictData[0]['phonetic'] || null
            const phoneticswithS = dictData[0]['phonetics'] || null

            if (phoneticnoS && !phoneticswithS){
                pronunciation = phoneticnoS
            }
            else if (!phoneticnoS || phoneticswithS) {
                pronunciation = phoneticswithS[0]['text']
                phoneticswithS.forEach((x: any) => {
                    if (x['audio']){
                        audioLink = x['audio']
                        pronunciation = x['text']
                        audioAvailable = true
                    }
                })
            }
            else {
                // fallback block
                console.log('fallback')
            }
            setDictData({
                pronunciation,
                audioLink,
                audioAvailable,
                definition: meanings['definitions'][0]['definition'],
                pos: meanings['partOfSpeech'],
                link: dictData[0]['sourceUrls'][0]
            })
            setPronunAudio(new Audio(audioLink))
        }
        fetchDictData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const playAudio = () => {
        console.log(dictData.audioLink)
        console.log(dictData)
        if (pronunAudio){
            pronunAudio.play()
        }
    }

    return (
        <main
        className={`flex justify-center overflow-y-scroll ${inter.className}`}
        >
        {showModal ? (<Modal setModalState={setShowModal} />) : (
            <div
            className="
        fixed
        items-top
        text-center
        h-screen
        w-screen
        bg-white
        dark:bg-slate-800
        "
        >
            <NavBar />
            <div className="flex text-center justify-center">
                <h1 className={`text-5xl text-center flex py-5 dark:text-white ${karnak.className}`}>
                    Wordle Answer
                </h1>
            </div>
            <hr className="h-5" />
            <p className="flex justify-center text-center text-xl dark:text-slate-300">
                { day }
            </p>
            <h2
                className="
            flex
            justify-center
            text-center
            mt-5
            text-2xl
            dark:text-slate-300
        "
            >
                <b>Today&apos;s Answer:</b>
            </h2>
            <h2
                className="
            text-4xl
            mt-3
            flex
            justify-center
            text-center
            dark:text-slate-300
        "
            >
                { word }
            </h2>
            <br />
            {dictAvailable ? (<div className="justify-center text-center items-center">
                <h2 className="text-xl mt-3 justify-center ml-5 dark:text-slate-300">
                    <b>Pronunciation:</b> { dictData.pronunciation }
                    {dictData.audioAvailable ? (<FontAwesomeIcon icon={faVolumeHigh} onClick={() => {playAudio()}} className='cursor-pointer ml-2' />) : (<></>)}
                </h2>
                <h2
                    className="
                    text-xl
                    mt-3
                    justify-center
                    break-words
                    ml-5
                    dark:text-slate-300
                    "
                >
                    <b>Definition:</b> <i>{ dictData.pos }</i>
                    <br />
                    { dictData.definition }
                </h2>
                <h2 className="text-lg mt-3 justify-centerml-5 dark:text-slate-300">
                    see more <a href={dictData.link} className="text-lg underline text-blue-500 hover:text-blue-400">here</a>
                </h2>
            </div>) : (<></>)}
        </div>
        )}
        
            <br />
            {showModal ? (<></>) : (<WDAFooter />)}
        </main>
    )
}
