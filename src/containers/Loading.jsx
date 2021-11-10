import React from 'react'
import ItemLoad from '../components/ItemLoad'

export default function Loading() {
  const ItemsLoad = []
  // eslint-disable-next-line no-plusplus
  for(let i=0; i<10; i++){
    ItemsLoad.push(<ItemLoad key={`item-${i}`} />)
  }
  return (
    <>
    <div className="border border-gray-600 shadow rounded-md p-4 w-screen">
      <ItemLoad />
    </div>
    <main className="grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1">
      {ItemsLoad.map(item =>(
        item
      ))
      }
    </main>
    </>
  )
}
