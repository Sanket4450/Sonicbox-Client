import Image from 'next/image'
import AvaterProfile from '@/assets/images/avatar_profile.jpeg'

export const ArtistCard = ({ img, title }) => {
  return (
    <div className=" p-3 space-y-2 rounded-md hover:cursor-pointer hover:bg-text-highlight-light">
      <div className=" w-[100%] aspect-square">
        <Image
          src={img || AvaterProfile}
          alt={''}
          width={180}
          height={180}
          className=" object-cover w-full h-full rounded-full"
        />
      </div>
      <div>
        <h4 className=" text-primary text-sm">{title}</h4>
        <p className=" text-far-gray text-[12px]">Artist</p>
      </div>
    </div>
  )
}
