'use client'
import React, { useEffect, useState } from 'react'
import useFiles from '../fileService/fileService'
import conf from '../config'

const Page = () => {
  const { getFilePreview } = useFiles()
  const [fileIds, setFileIds] = useState([])
  const [imageUrls, setImageUrls] = useState({})
  const fileListIds = [
    "672ba45c0009b608bb44",
    "672ba46a001ab5a5c466",
    "672ba4820010b7e80ce2",
    "672ba48f002ab524d14f",
    "672ba49e000548377ffa",
    "672ba4ab003abb789a81",
    "672ba4b900367c7648ec",
    "672ba4c6001732934340",
    "672ba4d4001282062f6d",
    "672ba4de0032bba8441d",
    "672ba4ec0006fd80dbc9"
  ]

  useEffect(() => {
    const fetchFilePreviews = async () => {
      try {
        // Set file IDs
        setFileIds(fileListIds)
        
        // Fetch image URLs for each file ID
        const urls = {}
        for (const id of fileListIds) {
          urls[id] = await getFilePreview(id)
        }
        setImageUrls(urls)
      } catch (error) {
        console.error("Failed to fetch file previews:", error)
      }
    }

    fetchFilePreviews()
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
