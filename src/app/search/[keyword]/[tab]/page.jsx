'use client'

import { useEffect, memo } from 'react'
import { useDispatch } from 'react-redux'
import { changeKeyword } from '@/store/slices/search'
import {
  SongHeader,
  SongColumn,
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
  const ContentTabs = ['tracks', 'playlists', 'albums', 'artists']

  useEffect(() => {
    dispatch(changeKeyword(keyword))
  }, [keyword])

  return (
    <>
      {ContentTabs.indexOf(params.tab) === 0 && (
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
      {ContentTabs.indexOf(params.tab) === 1 && (
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
      {ContentTabs.indexOf(params.tab) === 2 && (
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
      {ContentTabs.indexOf(params.tab) === 3 && (
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
    </>
  )
})
