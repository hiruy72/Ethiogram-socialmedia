import React, { useState, useEffect } from 'react';
import { dummyPostsData, assets } from '../assets/assets';
import Loading from '../components/Loading';
import StoriesBar from '../components/StoriesBar';
import PostCard from '../components/PostCard';

const Feed = () => {
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeeds = async () => {
      setFeeds(dummyPostsData);
      setLoading(false);
    };
    fetchFeeds();
  }, []);

  return !loading ? (
    <div className="h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-start justify-center xl:gap-8">
      {/* Stories and posts */}
      <div className="flex-1 max-w-xl">
        <StoriesBar />
        <div className="p-4 space-y-6">
          {feeds.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>

      {/* Right side bar */}
      <div className="hidden xl:flex flex-col sticky top-4 gap-6">
        <div className="max-w-xs bg-white text-xs p-4 rounded-md flex flex-col gap-2 shadow">
          <h3 className="text-slate-800 font-semibold">Sponsored</h3>
          <img
            src={assets.sponsored_img}
            className="w-full h-48 object-cover rounded-md"
            alt="Sponsored"
          />
          <p className="text-slate-600 font-medium">Email marketing</p>
          <p className="text-slate-500 text-sm">
            Supercharge your marketing with a powerful, easy-to-use platform built for results.
          </p>
        </div>

        <div className="bg-white p-4 rounded-md shadow max-w-xs">
          <h3 className="text-slate-800">Recent messages</h3>
          {/* You can add recent message items here */}
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Feed;
