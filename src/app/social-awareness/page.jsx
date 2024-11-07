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
   '672c5466002c2167d092',
   '672c5471001370a69d81',
   '672c54800007e7411329',
   '672c54ae000c7c94b5c1',
   '672c549c001c6375257f',
   '672c54ba001862ee6682',
   '672c54c60014adba94a4',
   '672c54dd00329cbaf729',
   '672c5521001c159520a0',
   '672c552d002c1d772e2e'
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

