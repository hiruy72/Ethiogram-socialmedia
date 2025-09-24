import React, { useState, useEffect } from 'react'
import { dummyPostsData } from '../assets/assets'
import Loading from '../components/Loading'
import StoriesBar from '../components/StoriesBar'

const Feed = () => {
  const [feeds, setFeeds] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFeeds = async () => {
      setFeeds(dummyPostsData)
      setLoading(false)
    }
    fetchFeeds()
  }, [])

  return !loading ? (
    <div className="h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-start justify-center xl:gap-8">
      {/* Stories and posts */}
      <div>
        <StoriesBar />
        <div className="p-4 space-y-6">
          List of Post
        </div>
      </div>

      {/* Right side bar */}
      <div>
        <div>
          <h1>Sponsered</h1>
        </div>
        <h1>Recent messages</h1>
      </div>
    </div>
  ) : <Loading />
}

export default Feed

