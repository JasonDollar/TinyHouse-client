import React from 'react'

interface Props {
  title?: string;
}

export const Listings: React.FC<Props> = ({ title }) => (
  <h2>
    TinyHouse Listings{title}
  </h2>
)

