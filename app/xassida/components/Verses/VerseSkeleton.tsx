const VerseSkeleton = () => {
  return (
    <div className="flex animate-pulse flex-col py-4 md:flex-row">
      <div className="flex flex-row items-center justify-end gap-3 md:flex-col md:items-center md:justify-center">
        <span className="size-5 rounded-full bg-gray-300 dark:bg-gray-800"></span>
        <span className="size-5 rounded-full bg-gray-300 dark:bg-gray-800"></span>
        <span className="size-5 rounded-full bg-gray-300 dark:bg-gray-800"></span>
        <span className="size-5 rounded-full bg-gray-300 dark:bg-gray-800"></span>
      </div>
      <div className="flex-1 space-y-4 md:px-4">
        <div className="mt-2 flex flex-col space-y-3">
          <div
            dir="rtl"
            className="h-4 w-4/5 self-end bg-gray-300 dark:bg-gray-800"
          ></div>
          <div
            dir="rtl"
            className="h-4 w-4/5 self-end bg-gray-300 dark:bg-gray-800"
          ></div>
        </div>
        <div className="h-4 w-4/5 bg-gray-300 dark:bg-gray-800"></div>
      </div>
    </div>
  )
}

export default VerseSkeleton
