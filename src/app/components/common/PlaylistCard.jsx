'use client'

import SongImage from '@/assets/images/default-song.jpeg'

export const PlaylistCard = ({ img, title, owner }) => {
  return (
    <div className=" p-3 space-y-2 hover:cursor-pointer hover:bg-text-highlight-light rounded-md">
      <div className=" w-[100%] aspect-square">
        <img
          src={img || SongImage}
          alt=""
          className=" object-cover h-full w-full rounded-md"
        />
      </div>
      <div>
        <h4 className=" text-primary">{title}</h4>
        <p className=" text-far-gray text-sm">By {owner}</p>
      </div>
    </div>
  )
}
