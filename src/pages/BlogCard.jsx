import { Link } from "react-router-dom";

export default function BlogCard({ post, isFeatured = false }) {
  if (!post) return null;

  return (
    <div className={`bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all 
      ${isFeatured ? "flex flex-col" : "flex flex-row gap-4 p-4 items-center"}
    `}>

      {/* IMAGE */}
      <div className={`relative ${isFeatured ? "w-full h-72" : "w-32 h-24 shrink-0"}`}>
        <img
          src={post.thumbnail}
          alt={post.title}
          className="w-full h-full object-cover rounded-xl"
        />

        {/* DATE ONLY FOR BIG CARD */}
        {isFeatured && (
          <div className="absolute bottom-2 left-2">
            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
              {new Date(post.createdAt || Date.now()).toLocaleDateString('en-US', {
                month: 'short',
                day: '2-digit',
                year: 'numeric'
              })}
            </span>
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className={`${isFeatured ? "p-5" : "flex flex-col justify-center w-full"}`}>
        
        {/* DATE FOR SMALL CARD */}
        {!isFeatured && (
          <div className="flex justify-end mb-1">
            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
              {new Date(post.createdAt || Date.now()).toLocaleDateString('en-US', {
                month: 'short',
                day: '2-digit',
                year: 'numeric'
              })}
            </span>
          </div>
        )}

        <h2 className={`font-bold text-gray-900 mb-2 
          ${isFeatured ? "text-xl" : "text-sm leading-snug"}`}>
          {post.title}
        </h2>

        <p className="text-gray-500 text-sm line-clamp-2">
          {post.metaDescription?.slice(0, 100)}...
        </p>

        <Link
          to={`/blogs/${post.slug}`}
          className="text-blue-600 text-sm font-semibold mt-2 inline-block"
        >
          Read More →
        </Link>

      </div>
    </div>
  );
}