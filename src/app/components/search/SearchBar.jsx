'use client'

import { useState, useEffect, useRef, useCallback, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { debounce } from 'lodash'
import { IoSearch } from 'react-icons/io5'
import { changeKeyword } from '@/store/slices/search'
import { Options } from '../common'

export const SearchBar = memo(({ router }) => {
  const dispatch = useDispatch()
  const searchBarRef = useRef(null)
  const keyword = useSelector((state) => state.search.keyword)
  const [inputValue, setInputValue] = useState('')
  const [isKeywordSet, setIsKeywordSet] = useState(false)

  const debounceDuration = 500

  const debouncedSave = useCallback(
    debounce((value) => {
      console.log('search bar value', value)
      dispatch(changeKeyword(value))
      router.push(`/search/${value}`)
    }, debounceDuration),
    [dispatch, router]
  )

  useEffect(() => {
    setInputValue(keyword)
    setIsKeywordSet(true)
  }, [keyword])

  useEffect(() => {
    isKeywordSet && debouncedSave(inputValue)
  }, [inputValue, debouncedSave, isKeywordSet])

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleFocus = () => {
    searchBarRef.current.className +=
      ' outline outline-[3px] outline-theme-purple outline-offset-[-2px]'
  }

  const handleBlur = () => {
    searchBarRef.current.classList.remove('outline')
  }

  return (
    <section className=" bg-light-primary flex justify-between items-center px-4 py-4 sticky top-0 z-10">
      <div
        ref={searchBarRef}
        className=" bg-theme-white text-theme-black border-[2px] border-theme-black rounded-full flex items-center w-[70%] lg:w-[60%]">
        <div className=" px-3 py-2.5">
          <IoSearch className=" text-xl" />
        </div>
        <input
          id="artists-search"
          type="text"
          name="artists-search"
          value={inputValue}
          placeholder="What do you want to play?"
          onChange={handleChange}
          className=" w-full pr-3 py-2.5 focus:outline-none bg-transparent"
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete="off"
        />
      </div>
      <Options />
    </section>
  )
})
