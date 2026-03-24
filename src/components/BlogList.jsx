import React, { useState } from 'react'
import {blogs} from '../data/blog'
import BlogCard from '../pages/BlogCard'


export default function BlogList() {

  let [search, setSearch] = useState("")
  let [category, setCategory] = useState("All")
  let [sortOrder, setSortOrder] = useState("newest")

  let [currentPage, setCurrentPage] = useState(1)
  let postsPerPage = 6

  let categories = ["All", ...new Set(blogs.map(p => p.category))]

  let filtered = blogs.filter(post =>
    (category === "All" || post.category === category) &&
    post.title.toLowerCase().includes(search.toLowerCase())
  )

  filtered = filtered.sort((a, b) => {
    if (sortOrder === "newest") return new Date(b.date) - new Date(a.date)
    if (sortOrder === "oldest") return new Date(a.date) - new Date(b.date)
  })

  let totalPages = Math.ceil(filtered.length / postsPerPage)

  let start = (currentPage - 1) * postsPerPage
  let paginatedPosts = filtered.slice(start, start + postsPerPage)

  let nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  let prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  return (
    <div className='max-w-6xl mx-auto px-3 py-15 '>

      <h1 className='text-center text-red-700 text-xl sm:text-2xl md:text-3xl'>Our Latest Blogs</h1>

      <div className='flex flex-col gap-4 my-8'>

        <input
          type="text"
          className='px-4 py-3 w-full rounded-lg border border-gray-600'
          placeholder='Search articles.......'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className='flex gap-4  overflow-x-scroll py-2'>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat)
                setCurrentPage(1)
              }}
              className={`px-4 py-2 rounded-full cursor-pointer whitespace-nowrap transition ${
                category === cat ? "bg-red-700  text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <select
          className='px-2 py-2 cursor-pointer rounded-lg w-full  sm:w-64 border border-gray-600'
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>

      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {paginatedPosts.length ? (
          paginatedPosts.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))
        ) : (
          <p>No articles found.</p>
        )}
      </div>

      {/* Pagination Buttons */}

      <div className='flex justify-center items-center gap-4 mt-10'>

        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className='px-4 py-2 bg-gray-200 rounded disabled:opacity-50'
        >
          Prev
        </button>

        <span className='font-semibold'>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className='px-4 py-2 bg-indigo-600 text-white rounded disabled:opacity-50'
        >
          Next
        </button>

      </div>

    </div>
  )
}