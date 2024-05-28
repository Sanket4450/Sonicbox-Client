export const LibraryItem = ({
  img,
  title,
  isArtist,
  isPlaylist,
  isAlbum,
  playlistOwner,
  albumOwner,
}) => {
  return (
    <div className=" h-14 flex gap-x-3 p-2 rounded-md hover:cursor-pointer hover:bg-text-highlight-light">
      <div className=" w-10 h-10">
        <img
          src={img}
          alt=""
          className={` object-cover w-full h-full ${isArtist ? 'rounded-full' : 'rounded-sm'}`}
        />
      </div>
      <div>
        <h3 className=" text-primary">{title}</h3>
        <p className=" text-far-gray text-[12px] overflow-hidden">
          {isArtist
            ? 'Artist'
            : isPlaylist
            ? 'Playlist • ' + playlistOwner
            : isAlbum
            ? 'Album • ' + albumOwner
            : ''}
        </p>
      </div>
    </div>
  )
}
