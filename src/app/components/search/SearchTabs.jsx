'use client'

import { useState, useEffect, memo } from 'react'
import { useSelector } from 'react-redux'

export const SearchTabs = memo(({ router }) => {
  const keyword = useSelector((state) => state.search.keyword)
  const [activeContentTab, setActiveContentTab] = useState(0)

  const ContentTabs = ['All', 'Songs', 'Playlists', 'Albums', 'Artists']

  console.log('keyword', keyword)

  useEffect(() => {
    if (keyword) {
      switch (activeContentTab) {
        case 0:
          router.push(`/search/${keyword}`)
          break

        case 1:
          router.push(`/search/${keyword}/tracks`)
          break

        case 2:
          router.push(`/search/${keyword}/playlists`)
          break

        case 3:
          router.push(`/search/${keyword}/albums`)
          break

        case 4:
          router.push(`/search/${keyword}/artists`)
          break

        default:
          router.push(`/search/${keyword}`)
      }
    }
  }, [keyword, activeContentTab, router])

  return (
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
  )
})
