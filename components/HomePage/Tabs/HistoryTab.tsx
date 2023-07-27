"use client"

import { historySelector } from "@/zustand/slices/history"
import { useStore } from "@/zustand/store"

import XassidaList from "@/components/XassidaList"

const HistoryTab = () => {
  const { history, clearHistory } = useStore(historySelector)
  return (
    <div>
      <div className="flex justify-end">
        <button className="border-b border-gray-500" onClick={clearHistory}>
          Effacer Historique
        </button>
      </div>
      <div className="scrollbar-hide flex space-x-3 overflow-x-scroll p-2">
        <XassidaList grid={false} data={history} />
      </div>
    </div>
  )
}

export default HistoryTab
