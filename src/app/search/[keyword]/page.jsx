'use client'

import { useEffect, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import { changeKeyword } from '@/store/slices/search'
import {
  SongSimpleColumn,
  PlaylistCard,
  AlbumCard,
  ArtistCard,
} from '@/app/components/common'
import { songs } from '@/data/songs'
import { playlists } from '@/data/playlists'
import { albums } from '@/data/albums'
import { artists } from '@/data/artists'

export default memo(({ params }) => {
  const { keyword } = params
  const dispatch = useDispatch()

  const currentKeyword = useSelector((state) => state.search.keyword)
  const isLgScreen = useMediaQuery({ query: '(min-width: 1024px)' })
  const isXlScreen = useMediaQuery({ query: '(min-width: 1280px)' })
  const is2xlScreen = useMediaQuery({ query: '(min-width: 1536px)' })

  useEffect(() => {
    if (currentKeyword !== keyword) {
      dispatch(changeKeyword(keyword))
    }
  }, [keyword, currentKeyword, dispatch])

  return (
    <div className="px-4">
      <section className=" pt-8 pb-12">
        <h2 className=" text-primary text-2xl font-semibold p-3">Songs</h2>
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
        <h2 className=" text-primary text-2xl font-semibold p-3">Playlists</h2>
        <div className=" grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {playlists
            .slice(0, is2xlScreen ? 6 : isXlScreen ? 5 : isLgScreen ? 4 : 3)
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
        <h2 className=" text-primary text-2xl font-semibold p-3">Albums</h2>
        <div className=" grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {albums
            .slice(0, is2xlScreen ? 6 : isXlScreen ? 5 : isLgScreen ? 4 : 3)
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
        <h2 className=" text-primary text-2xl font-semibold p-3">Artists</h2>
        <div className=" grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {artists
            .slice(0, is2xlScreen ? 6 : isXlScreen ? 5 : isLgScreen ? 4 : 3)
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
  )
})
