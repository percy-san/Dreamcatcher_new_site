// importing the helper function (fetchMarkdownPosts)  to return all the markdown posts
import { fetchMarkdownPosts } from '$lib/utils'
//the code below is used to convert JSON data while also setting proper headers automatically
import { json } from '@sveltejs/kit'

export const GET = async () => {
  const allNotices = await fetchMarkdownPosts()

  //Sorting all the posts in descending order by getting only the newest posts to show first
  const sortedNotices = allNotices.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date)
  })

  return json(sortedNotices)
}