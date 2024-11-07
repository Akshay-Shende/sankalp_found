'use client'
import React, { useEffect, useState } from 'react'
import useFiles from '../fileService/fileService'
import conf from '../config'

const Page = () => {
  const { getFilePreview } = useFiles()
  const [fileIds, setFileIds] = useState([])
  const [imageUrls, setImageUrls] = useState({})
  const bucketId = conf.appwriteBucketId

  const fileListIds = [
    "672c4c5900393a72e011",
    "672c4c69001862280849",
    "672c4c780006e8768d54",
    "672c4c87001a9fc9666e",
    "672c4c960035a4385ed2",
    "672c4ca5002af8e45768",
    "672c4cb1001fad72ad3f",
    "672c4cbb00192b8c8490",
    "672c4cc70030a6d442c7"
  ]

  useEffect(() => {
    const fetchFileIds = async () => {
      try {
        const urls = {}
        for (const id of fileListIds) {
          urls[id] = await getFilePreview(id)
        }
        setImageUrls(urls)
        setFileIds(fileListIds) // Set fileIds here
      } catch (error) {
        console.error("Failed to fetch file IDs:", error)
      }
    }

    fetchFileIds()
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {fileIds.map((id) => (
        <div key={id} className="overflow-hidden rounded-lg shadow-md">
          <img src={imageUrls[id]} alt={`Image ${id}`} className="w-full h-auto object-cover" />
        </div>
      ))}
    </div>
  )
}

export default Page
