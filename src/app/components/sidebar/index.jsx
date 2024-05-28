import { useState, memo, useEffect } from 'react'
import Link from 'next/link'
import { GoHome, GoHomeFill } from 'react-icons/go'
import { RiSearchLine, RiSearchFill } from 'react-icons/ri'
import { LuLibrary } from 'react-icons/lu'
import { FaPlus } from 'react-icons/fa6'
import { TbPinnedFilled } from 'react-icons/tb'
import { LibraryItem } from '@/app/components/common'
import { playlists } from '@/data/playlists'

export const Sidebar = memo(({ path }) => {
  const [activeSection, setActiveSection] = useState(null)
  const [activeLibraryTab, setActiveLibraryTab] = useState(0)

  useEffect(() => {
    if (path === '/search') {
      setActiveSection(1)
    } else {
      setActiveSection(0)
    }
  }, [])

  const LibraryTabs = ['Playlists', 'Artists', 'Albums']

  return (
    <>
      {activeSection === null ? (
        <div className=" bg-light-primary h-full col-span-4 lg:col-span-3 2xl:col-span-2"></div>
      ) : (
        <div className=" h-full grid col-span-4 lg:col-span-3 2xl:col-span-2 grid-rows-6 gap-y-2 overflow-y-scroll">
          <div className=" bg-light-primary rounded-md row-span-1 flex flex-col justify-center sticky top-0 z-10">
            <Link
              href={'/'}
              className={`${
                activeSection === 0 ? ' opacity-100' : ' opacity-40'
              } h-[45%] text-primary flex items-center hover:cursor-pointer hover:opacity-100 transition duration-300`}
              onClick={() => setActiveSection(0)}>
              {activeSection === 0 ? (
                <GoHomeFill className=" text-5xl text-primary px-3 mb-0.5" />
              ) : (
                <GoHome className=" text-5xl text-primary px-3 mb-0.5" />
              )}
              <h3 className=" font-semibold">Home</h3>
            </Link>
            <Link
              href={'/search'}
              className={`${
                activeSection === 1 ? ' opacity-100' : ' opacity-40'
              } h-[45%] text-primary flex items-center hover:cursor-pointer hover:opacity-100 transition duration-300`}
              onClick={() => setActiveSection(1)}>
              {activeSection === 1 ? (
                <RiSearchFill className=" text-5xl text-primary px-3 mb-0.5" />
              ) : (
                <RiSearchLine className=" text-5xl text-primary px-3 mb-0.5" />
              )}
              <h3 className=" font-semibold">Search</h3>
            </Link>
          </div>
          <div className=" bg-light-primary rounded-md row-span-5 overflow-y-scroll">
            <div className=" bg-light-primary sticky top-0 z-20">
              <div className=" flex justify-between items-center">
                <div className=" text-primary flex items-center hover:cursor-pointer opacity-40 hover:opacity-100 transition duration-300">
                  <LuLibrary className=" text-5xl text-primary px-3 mb-0.5" />
                  <h3 className=" font-semibold">Your Library</h3>
                </div>
                <FaPlus className=" text-primary text-4xl opacity-40 px-3 hover:cursor-pointer hover:opacity-100 transition duration-300" />
              </div>
              <div className=" flex gap-x-2 px-3 py-2 overflow-x-scroll">
                {LibraryTabs.map((tab, idx) => (
                  <h4
                    key={idx}
                    className={` text-[13px] font py-1.5 px-2.5 rounded-full hover:cursor-pointer transition duration-300 ${
                      activeLibraryTab === idx
                        ? ' bg-text-primary text-text-highlight'
                        : ' bg-text-highlight text-primary hover:bg-text-highlight-hover'
                    }`}
                    onClick={() => setActiveLibraryTab(idx)}>
                    {tab}
                  </h4>
                ))}
              </div>
            </div>
            <div className=" px-2 pb-2">
              {playlists.map((playlist) => (
                <LibraryItem
                  key={playlist.id}
                  img={playlist.img}
                  title={playlist.title}
                  isPlaylist={true}
                  playlistOwner={playlist.playlistOwner}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
})
