'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { IoSearch } from 'react-icons/io5'
import { FaCheck } from 'react-icons/fa6'
import { Button } from '../components/ui'
import { artists } from '@/data'

export default () => {
  const searchBarRef = useRef(null)
  const [searchValue, setSearchValue] = useState('')
  const [selectedArtists, setSelectedArtists] = useState([])

  const handleChange = (e) => {
    setSearchValue(e.target.searchValue)
  }

  const handleFocus = () => {
    searchBarRef.current.className +=
      ' outline outline-[3px] outline-theme-purple outline-offset-[-2px]'
  }

  const handleBlur = () => {
    searchBarRef.current.classList.remove('outline')
  }

  const handleArtistClick = (artistId) => {
    if (selectedArtists.includes(artistId)) {
      setSelectedArtists(
        selectedArtists.filter(
          (selectedArtistId) => selectedArtistId !== artistId
        )
      )
    } else {
      setSelectedArtists([...selectedArtists, artistId])
    }
  }

  return (
    <>
      <h2 className=" text-primary font-semibold text-center py-2">
        Choose 3 or more artists you like.
      </h2>
      <div className=" px-[2vw] my-2 flex justify-between">
        <div
          ref={searchBarRef}
          className=" bg-theme-white text-theme-black border-[2px] border-theme-black rounded-md flex items-center w-[75%] sm:w-[85%] xl:w-[88%]">
          <div className=" px-3 py-3">
            <IoSearch className=" text-xl" />
          </div>
          <input
            id="artists-search"
            type="text"
            name="artists-search"
            searchValue={searchValue}
            placeholder="Search for artists..."
            onChange={handleChange}
            className=" w-full px-3 py-3 focus:outline-none bg-transparent"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <Button className=" bg-theme-purple text-theme-white w-[24%] sm:w-[14%] xl:w-[11%] font-semibold text-lg rounded-md transition duration-200 hover:bg-theme-light-purple">
          Done
        </Button>
      </div>
      <section className=" my-6 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {artists.map((artist) => (
          <div
            key={artist.id}
            className=" text-primary flex flex-col items-center justify-center select-none">
            <div
              className=" w-32 h-32 relative rounded-full flex items-center justify-center overflow-hidden"
              onClick={() => handleArtistClick(artist.id)}>
              <Image
                src={artist.image}
                alt={''}
                width={180}
                height={180}
                className={` object-cover w-full h-full ${
                  selectedArtists.includes(artist.id) ? 'opacity-40' : ''
                }`}
              />
              {selectedArtists.includes(artist.id) && (
                <FaCheck className="absolute text-primary text-4xl top-[36%] left-[36%]" />
              )}
            </div>
            <p className=" w-32 h-10 font-semibold text-center py-2">
              {artist.name}
            </p>
          </div>
        ))}
      </section>
    </>
  )
}
