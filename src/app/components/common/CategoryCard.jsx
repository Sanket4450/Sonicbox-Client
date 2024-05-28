import DefaultSong from '@/assets/images/default-song.jpeg'

export const CategoryCard = ({ img, title }) => {
  return (
    <div className=" bg-secondary h-36 rounded-md hover:cursor-pointer relative overflow-hidden">
      <h3 className=" ml-4 mt-3 text-white text-[22px] font-semibold">{title}</h3>
      <div className=" w-[100px] h-[100px] absolute rounded-sm bottom-0 -right-4 transform rotate-[25deg]">
        <img
          src={img || DefaultSong}
          alt=""
          className=" object-cover w-full h-full rounded-md"
        />
      </div>
    </div>
  )
}
