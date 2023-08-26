import React from "react"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

interface Props {
  title: string
  subtitle: string
}

// Ce composant est utilisé pour afficher le titre et le sous-titre
// de la page de contribution.

const TitleTile = ({ title, subtitle }: Props) => {
  return (
    <>
      <div className="mb-6 text-4xl">{title}</div>
      <ReactMarkdown className="mb-8" linkTarget="_blank">{subtitle}</ReactMarkdown>
    </>
  )
}

export default React.memo(TitleTile)
