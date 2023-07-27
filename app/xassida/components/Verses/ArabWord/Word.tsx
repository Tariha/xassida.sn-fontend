const Word = ({ text }: { text: string }) => {
  return (
    <span
      className="mb-1 text-slate-800 dark:text-white"
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    />
  )
}

export default Word
