import React from "react"

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
      <div
        className="mb-8"
        dangerouslySetInnerHTML={{ __html: subtitle }}
      ></div>
    </>
  )
}

export default React.memo(TitleTile)
