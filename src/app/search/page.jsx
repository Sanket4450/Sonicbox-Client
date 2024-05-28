'use client'

import { useState, useRef } from 'react'
import { IoSearch } from 'react-icons/io5'
import { useMediaQuery } from 'react-responsive'
import {
  CategoryCard,
  Options,
  SongHeader,
  SongColumn,
  SongSimpleColumn,
  PlaylistCard,
  AlbumCard,
  ArtistCard,
} from '@/app/components/common'
import { categories } from '@/data/categories'
import { songs } from '@/data/songs'
import { playlists } from '@/data/playlists'
import { albums } from '@/data/albums'
import { artists } from '@/data/artists'
import { profiles } from '@/data/profiles'

export default () => {
  const searchBarRef = useRef(null)
  const [searchValue, setSearchValue] = useState('s')
  const [activeContentTab, setActiveContentTab] = useState(0)

  const isLgScreen = useMediaQuery({ query: '(min-width: 1024px)' })
  const isXlScreen = useMediaQuery({ query: '(min-width: 1280px)' })
  const is2xlScreen = useMediaQuery({ query: '(min-width: 1536px)' })

  const ContentTabs = ['All', 'Songs', 'Playlists', 'Albums', 'Artists']

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  const handleFocus = () => {
    searchBarRef.current.className +=
      ' outline outline-[3px] outline-theme-purple outline-offset-[-2px]'
  }

  const handleBlur = () => {
    searchBarRef.current.classList.remove('outline')
  }

  return (
    <div className=" h-full col-span-8 lg:col-span-9 2xl:col-span-10 bg-light-primary rounded-md overflow-y-scroll">
      <section className=" bg-light-primary flex justify-between items-center px-4 py-4 sticky top-0 z-10">
        <div
          ref={searchBarRef}
          className=" bg-theme-white text-theme-black border-[2px] border-theme-black rounded-full flex items-center w-[70%] lg:w-[60%]">
          <div className=" px-3 py-2.5">
            <IoSearch className=" text-xl" />
          </div>
          <input
            id="artists-search"
            type="text"
            name="artists-search"
            searchValue={searchValue}
            placeholder="What do you want to play?"
            onChange={handleChange}
            className=" w-full pr-3 py-2.5 focus:outline-none bg-transparent"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <Options />
      </section>
      {!searchValue ? (
        <section className=" pt-6">
          <h2 className=" text-primary text-2xl font-semibold mx-4 my-2">
            Browse all
          </h2>
          <div className=" grid gap-6 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-4 py-2">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                img={category.img}
                title={category.title}
              />
            ))}
          </div>
        </section>
      ) : (
        <section>
          <div className=" flex gap-x-2 px-4">
            {ContentTabs.map((tab, idx) => (
              <h4
                key={idx}
                className={` text-[13px] font py-1.5 px-3 rounded-full hover:cursor-pointer transition duration-300 ${
                  activeContentTab === idx
                    ? ' bg-text-primary text-text-highlight'
                    : ' bg-text-highlight text-primary hover:bg-text-highlight-hover'
                }`}
                onClick={() => setActiveContentTab(idx)}>
                {tab}
              </h4>
            ))}
          </div>
          <div className={` ${activeContentTab === 0 ? '' : 'px-4'}`}>
            {activeContentTab === 0 && (
              <div>
                <section className=" pt-8 pb-12">
                  <h2 className=" text-primary text-2xl font-semibold p-3">
                    Songs
                  </h2>
                  {songs.slice(0, 5).map((song) => (
                    <SongSimpleColumn
                      key={song.id}
                      img={song.img}
                      title={song.title}
                      artists={song.artists}
                      minutes={song.minutes}
                      seconds={song.seconds}
                      isSaved={song.isSaved}
                    />
                  ))}
                </section>
                <section className=" pb-12">
                  <h2 className=" text-primary text-2xl font-semibold p-3">
                    Playlists
                  </h2>
                  <div className=" grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                    {playlists
                      .slice(
                        0,
                        is2xlScreen ? 6 : isXlScreen ? 5 : isLgScreen ? 4 : 3
                      )
                      .map((playlist) => (
                        <PlaylistCard
                          key={playlist.id}
                          img={playlist.img}
                          title={playlist.title}
                          owner={playlist.playlistOwner}
                        />
                      ))}
                  </div>
                </section>
                <section className=" pb-12">
                  <h2 className=" text-primary text-2xl font-semibold p-3">
                    Albums
                  </h2>
                  <div className=" grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                    {albums
                      .slice(
                        0,
                        is2xlScreen ? 6 : isXlScreen ? 5 : isLgScreen ? 4 : 3
                      )
                      .map((album) => (
                        <AlbumCard
                          key={album.id}
                          img={album.img}
                          title={album.title}
                          owner={album.albumOwner}
                          year={album.releaseYear}
                        />
                      ))}
                  </div>
                </section>
                <section className=" pb-12">
                  <h2 className=" text-primary text-2xl font-semibold p-3">
                    Artists
                  </h2>
                  <div className=" grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                    {artists
                      .slice(
                        0,
                        is2xlScreen ? 6 : isXlScreen ? 5 : isLgScreen ? 4 : 3
                      )
                      .map((artist) => (
                        <ArtistCard
                          key={artist.id}
                          img={artist.image}
                          title={artist.name}
                        />
                      ))}
                  </div>
                </section>
              </div>
            )}
            {activeContentTab === 1 && (
              <section className=" pt-8 pb-12">
                <SongHeader />
                {songs.map((song, idx) => (
                  <SongColumn
                    key={song.id}
                    index={idx + 1}
                    img={song.img}
                    title={song.title}
                    artists={song.artists}
                    album={song.album}
                    minutes={song.minutes}
                    seconds={song.seconds}
                    isSaved={song.isSaved}
                  />
                ))}
              </section>
            )}
            {activeContentTab === 2 && (
              <section className=" grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 pt-8 pb-12">
                {playlists.map((playlist) => (
                  <PlaylistCard
                    key={playlist.id}
                    img={playlist.img}
                    title={playlist.title}
                    owner={playlist.playlistOwner}
                  />
                ))}
              </section>
            )}
            {activeContentTab === 3 && (
              <section className=" grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 pt-8 pb-12">
                {albums.map((album) => (
                  <AlbumCard
                    key={album.id}
                    img={album.img}
                    title={album.title}
                    owner={album.albumOwner}
                    year={album.releaseYear}
                  />
                ))}
              </section>
            )}
            {activeContentTab === 4 && (
              <section className=" grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 pt-8 pb-12">
                {artists.map((artist) => (
                  <ArtistCard
                    key={artist.id}
                    img={artist.image}
                    title={artist.name}
                  />
                ))}
              </section>
            )}
          </div>
        </section>
      )}
    </div>
  )
}
