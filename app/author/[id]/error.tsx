"use client"

import { useRouter } from "next/navigation"

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) => {
  const router = useRouter()

  // if previous page url exist, go back, otherwise go to home
  const onBackButtonClicked = () => {
    if (document && document.referrer) {
      router.back()
      return
    }
    router.push("/") // go to home
  }
  return (
    <div className="container flex h-screen flex-col items-center justify-center space-y-4">
      <h1 className="text-2xl text-slate-900 dark:text-white md:text-4xl">
        Quelque chose s&#39;est mal passé
      </h1>
      <div className="">
        <button
          className="rounded-md bg-slate-900 px-4 py-2 text-lg font-medium text-white dark:bg-white dark:text-slate-900"
          onClick={onBackButtonClicked}
        >
          Retourner
        </button>
      </div>
      <p className="text-lg">Merci de nous notifier si l&#39;erreur persiste</p>
    </div>
  )
}

export default Error
