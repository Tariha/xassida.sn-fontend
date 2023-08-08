/* eslint-disable tailwindcss/no-contradicting-classname */
"use client"

import { useRef } from "react"
import { Xassida } from "@/types"
import { navbarSelector } from "@/zustand/slices/navbar"
import { useStore } from "@/zustand/store"
import { Download } from "lucide-react"
import { Virtuoso } from "react-virtuoso"

import { BASE_URL } from "@/lib/api"
import { unslugify } from "@/lib/utils"
import Bismillah from "@/components/Bismillah"

import Chapter from "./Chapter"
import ChapterSelect from "./ChapterSelect"

interface Props {
  xassida: Xassida
}

const Reader = ({ xassida }: Props) => {
  // add xassida to reading history
  const { visible } = useStore(navbarSelector)
  const virtuoso = useRef(null)

  return (
    <div>
      <div
        className={`sticky bg-background shadow-md dark:bg-muted ${
          visible ? "top-[56px]" : "top-0"
        } z-30 flex w-full items-center justify-between p-1 px-4 transition duration-75 ease-in-out`}
      >
        <ChapterSelect virtuoso={virtuoso} chapters={xassida.chapters} />
        <div>
          <a
            target="_blank"
            href={`${BASE_URL}pdf/${xassida.id}`}
            rel="noreferrer"
          >
            <Download size={20} />
          </a>
        </div>
      </div>
      <div className="container">
        <header className="flex flex-col items-center justify-center py-3">
          <h3 className="text-3xl capitalize">{unslugify(xassida.name)}</h3>
          <div className="relative h-[150px] w-[250px]">
            <Bismillah />
          </div>
        </header>
        <div className="font-amiri font-hafs font-lateef font-scheherazade font-warsh">
          <Virtuoso
            ref={virtuoso}
            useWindowScroll
            increaseViewportBy={1000}
            data={xassida.chapters}
            itemContent={(i, chap) => <Chapter chap={chap} />}
          />
        </div>
      </div>
    </div>
  )
}

export default Reader
