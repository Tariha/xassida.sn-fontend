import React from 'react'

interface Props {
  title: string
  subtitle: string
}

const TitleTile = ({ title, subtitle }: Props) => {
  return (
    <div className="flex flex-col gap-4 mb-8">
      <div className='text-4xl mb-6'>{title}</div>
      <div dangerouslySetInnerHTML={{ __html: subtitle }}></div>
    </div>
  )
}

export default React.memo(TitleTile)