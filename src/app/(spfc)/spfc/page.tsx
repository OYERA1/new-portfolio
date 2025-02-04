'use client'

import Image from "next/image"
import spfc from '../spfc.gif'

export default function SPFCPage() {
    return <div className="flex h-full w-full flex-col items-center justify-center">
        <Image src={spfc} width={200} height={200} alt="TRICOLOSSO" />

        <div className="bg-gradient-to-r from-red-800 to-black bg-clip-text pt-10 text-7xl text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.6)]">
            <p className="font-[westwood]">
                SÃO PAULO FUTEBOL CLUBE
            </p>
        </div>
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-16">
            <div className="h-52 w-full bg-red-600" />
            <iframe className="absolute aspect-video " width="560" height="315" id="ytplayer" src="https://www.youtube.com/embed/CI2Nz_3gSNI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            <div className="h-52 w-full bg-black" />
        </div>
    </div >
}