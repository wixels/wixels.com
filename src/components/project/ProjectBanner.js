import React from 'react'
import { useParams } from 'react-router-dom'

export const ProjectBanner = (props) => {
  const { name } = useParams()
  return (
    <div>
      This is the Project Baner {name}
    </div>
  )
}
