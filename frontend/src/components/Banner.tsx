import React from 'react'


interface BannerProps{
    textButton:string
    srcImage:string
    className:string
}

export const Banner:React.FC<BannerProps> = ({textButton,srcImage, className}) => {
  return (
    <div className={className}>
        <img src={srcImage} alt="" />
        <button>{textButton}</button>
    </div>
  )
}
