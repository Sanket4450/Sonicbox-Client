'use client'

import { useState } from 'react'
import { SongCard, Options } from '@/app/components/common'
import { songs } from '@/data/songs'

export default () => {
  const [activeContentTab, setActiveContentTab] = useState(0)

  const ContentTabs = ['Songs', 'Playlists', 'Albums']

  return (
    <div className=" h-full col-span-8 lg:col-span-9 2xl:col-span-10 bg-light-primary rounded-md overflow-y-scroll">
      <section className=" bg-light-primary flex justify-between items-center px-4 py-4 sticky top-0 z-10">
        <div className=" flex flex-wrap gap-x-2">
          {ContentTabs.map((tab, idx) => (
            <h4
              key={idx}
              className={` text-[13px] font py-1.5 px-2.5 rounded-full hover:cursor-pointer transition duration-300 ${
                activeContentTab === idx
                  ? ' bg-text-primary text-text-highlight'
                  : ' bg-text-highlight text-primary hover:bg-text-highlight-hover'
              }`}
              onClick={() => setActiveContentTab(idx)}>
              {tab}
            </h4>
          ))}
        </div>
        <Options />
      </section>
      <section className=" pt-6">
        <h2 className=" text-primary text-2xl font-semibold mx-4 my-1">
          Songs
        </h2>
        <div className=" grid gap-y-4 grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 px-1">
          {songs.map((song) => (
            <SongCard
              key={song.id}
              img={song.img}
              title={song.title}
              timestamp={song.timestamp}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
