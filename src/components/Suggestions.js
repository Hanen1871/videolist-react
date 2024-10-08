import React from 'react'
import Iframe from '../Iframe'

function Suggestions() {
  const videoList = [
    {
      src:"https://www.youtube.com/embed/e6MxJbYyB5E",
      name:"“Sia - Unstoppable"
  },
  {
      src:"https://www.youtube.com/embed/EjWAdKWEVUE",
      name:"“Radiohead - Creep (Acoustic Cover)"

  },
  {
      src:"https://www.youtube.com/embed/UyaZmFGyuMg",
      name:"“Jonathan Roy - Keeping Me Alive"

  },
  {
      src:"https://www.youtube.com/embed/NxUkJpdgZLA",
      name:"“Sia - UnstoppStand By Me - Ben E. Kingable"
  }
  ];

  return (
    <div>{videoList.map((el) =><Iframe el={el} />)}</div>
  )
}

export default Suggestions