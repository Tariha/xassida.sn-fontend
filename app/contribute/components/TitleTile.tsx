import React from 'react'

interface Props {
    title: string
    subtitle: string
}

const TitleTile = ({title, subtitle}: Props) => {
  return (
    <>
        <div className="flex flex-col gap-4">
            <div className='text-4xl'>{title}</div>
            <div>{subtitle}</div>
        </div>
    </>
  )
}

export default React.memo(TitleTile)