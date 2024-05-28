'use client'

import { useState } from 'react'
import moment from 'moment'
import { IoCheckmarkCircleSharp } from 'react-icons/io5'
import { FiPlusCircle } from 'react-icons/fi'
import { BsThreeDots } from 'react-icons/bs'
import { MdOutlineWatchLater } from 'react-icons/md'
import { TbPlayerPauseFilled } from 'react-icons/tb'
import { IoMdPlay } from 'react-icons/io'
import DefaultSong from '@/assets/images/default-song.jpeg'

export const SongCard = ({ img, title, timestamp }) => {
  return (
    <div className=" rounded-md grid grid-cols-1 p-3 hover:cursor-pointer hover:bg-text-highlight">
      <img
        src={img || DefaultSong}
        alt=""
        className=" object-cover w-full h-full rounded-md"
      />
      <div className=" pt-2">
        <h3 className=" text-primary">{title}</h3>
        <p className=" text-far-gray text-sm overflow-hidden">
          {moment(timestamp).format('LL')}
        </p>
      </div>
    </div>
  )
}

export const SongHeader = () => {
  return (
    <div className=" h-10 flex items-center text-far-gray text-[12px] border-b-[0.5px] border-closer-gray">
      <p className=" w-[8%] flex justify-center items-center">#</p>
      <p className=" w-[67%] lg:w-[47%] xl:w-[49%]">Title</p>
      <p className=" max-lg:hidden w-[20%] xl:w-[22%]">Album</p>
      <p className=" w-[8%]"></p>
      <p className=" w-[10%] xl:w-[7%] flex justify-center items-center">
        <MdOutlineWatchLater className=" text-xl" />
      </p>
      <p className=" w-[7%] xl:w-[5%]" />
    </div>
  )
}

export const SongColumn = ({
  index,
  img,
  title,
  artists,
  album,
  isSaved,
  hours,
  minutes,
  seconds,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    isPlaying ? setIsPlaying(false) : setIsPlaying(true)
  }

  return (
    <div
      className=" h-16 rounded-md py-2.5 flex hover:bg-text-highlight select-none"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}>
      <p
        className={`
        w-[8%] flex justify-center items-center ${
          isHovered
            ? 'text-primary'
            : isPlaying
            ? 'text-theme-purple'
            : 'text-far-gray'
        }`}
        onClick={handlePlay}>
        {isPlaying ? (
          <TbPlayerPauseFilled className=" text-lg" />
        ) : isHovered ? (
          <IoMdPlay className=" text-lg" />
        ) : (
          index
        )}
      </p>
      <div className=" w-[12%] lg:w-[8%] xl:w-[7%] flex items-center">
        <div className=" w-11 h-11 flex justify-center items-center rounded-sm">
          <img
            src={img || DefaultSong}
            alt=""
            className=" object-cover w-full h-full rounded-md"
          />
        </div>
      </div>
      <div className=" w-[55%] lg:w-[39%] xl:w-[42%] flex flex-col justify-around">
        <div className=" whitespace-nowrap overflow-hidden overflow-ellipsis">
          <span
            className={` hover:cursor-pointer hover:underline hover:decoration-2' ${
              isPlaying ? 'text-theme-purple' : 'text-primary'
            }`}>
            {title}
          </span>
        </div>
        <div
          className={` text-[13px] whitespace-nowrap overflow-hidden overflow-ellipsis ${
            isHovered ? 'text-primary' : 'text-far-gray'
          }`}>
          {artists?.length === 1 ? (
            <span className=" hover:cursor-pointer hover:underline hover:decoration-1">
              {artists[0]}
            </span>
          ) : (
            artists.map((artist) => (
              <span className=" hover:cursor-pointer hover:underline hover:decoration-1">
                {artist},{' '}
              </span>
            ))
          )}
        </div>
      </div>
      <div className=" max-lg:hidden w-[20%] xl:w-[22%] flex items-center whitespace-nowrap overflow-hidden overflow-ellipsis">
        <span
          className={`text-sm hover:cursor-pointer hover:underline hover:decoration-2 ${
            isHovered ? ' text-primary' : ' text-far-gray'
          }`}>
          {album}
        </span>
      </div>
      <p className=" w-[8%] flex justify-center items-center">
        {isSaved ? (
          <IoCheckmarkCircleSharp className=" text-theme-purple text-xl hover:cursor-pointer" />
        ) : isHovered && !isSaved ? (
          <FiPlusCircle className=" text-xl text-far-gray hover:cursor-pointer hover:text-primary" />
        ) : (
          <></>
        )}
      </p>
      <p className=" text-far-gray w-[10%] xl:w-[7%] flex justify-center items-center">
        {!!hours && hours + ':'}
        {minutes}:{seconds}
      </p>
      <p className=" w-[7%] xl:w-[5%] flex justify-center items-center hover:cursor-pointer">
        {isHovered ? <BsThreeDots className=" text-xl text-primary" /> : <></>}
      </p>
    </div>
  )
}

export const SongSimpleColumn = ({
  img,
  title,
  artists,
  isSaved,
  hours,
  minutes,
  seconds,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    isPlaying ? setIsPlaying(false) : setIsPlaying(true)
  }

  return (
    <div
      className=" h-16 rounded-md py-2.5 flex hover:bg-text-highlight select-none"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}>
      <div className=" w-[14%] lg:w-[11%] xl:w-[8%] flex justify-center items-center">
        <div className=" w-11 h-11 flex justify-center items-center rounded-sm relative">
          <img
            src={img || DefaultSong}
            alt=""
            className={` object-cover w-full h-full rounded-md ${
              isHovered ? 'opacity-40' : 'opacity-100'
            }`}
          />
          {isHovered && isPlaying && (
            <TbPlayerPauseFilled
              className=" text-primary text-lg absolute top-[33%] left-[34%]"
              onClick={handlePlay}
            />
          )}
          {isHovered && !isPlaying && (
            <IoMdPlay
              className=" text-primary text-lg absolute top-[33%] left-[34%]"
              onClick={handlePlay}
            />
          )}
        </div>
      </div>
      <div className=" w-[60%] lg:w-[64%] xl:w-[75%] flex flex-col justify-around">
        <div className=" whitespace-nowrap overflow-hidden overflow-ellipsis">
          <span
            className={` hover:cursor-pointer hover:underline hover:decoration-2' ${
              isPlaying ? 'text-theme-purple' : 'text-primary'
            }`}>
            {title}
          </span>
        </div>
        <div
          className={` text-[13px] whitespace-nowrap overflow-hidden overflow-ellipsis ${
            isHovered ? 'text-primary' : 'text-far-gray'
          }`}>
          {artists?.length === 1 ? (
            <span className=" hover:cursor-pointer hover:underline hover:decoration-1">
              {artists[0]}
            </span>
          ) : (
            artists.map((artist) => (
              <span className=" hover:cursor-pointer hover:underline hover:decoration-1">
                {artist},{' '}
              </span>
            ))
          )}
        </div>
      </div>
      <p className=" w-[8%] flex justify-center items-center">
        {isSaved ? (
          <IoCheckmarkCircleSharp className=" text-theme-purple text-xl hover:cursor-pointer" />
        ) : isHovered && !isSaved ? (
          <FiPlusCircle className=" text-xl text-far-gray hover:cursor-pointer hover:text-primary" />
        ) : (
          <></>
        )}
      </p>
      <p className=" text-far-gray w-[10%] xl:w-[8%] flex justify-center items-center">
        {!!hours && hours + ':'}
        {minutes}:{seconds}
      </p>
      <p className=" w-[8%] xl:w-[6%] flex justify-center items-center hover:cursor-pointer">
        {isHovered ? <BsThreeDots className=" text-xl text-primary" /> : <></>}
      </p>
    </div>
  )
}
