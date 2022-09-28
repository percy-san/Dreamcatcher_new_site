// Exports an async function that will get all out markdown notices
export const fetchMarkdownPosts = async () => {
  const allNoticeFiles = import.meta.glob('/src/routes/notice/*.md')
  const iterableNoticeFiles = Object.entries(allNoticeFiles)
  
  const allNotices = await Promise.all(
    iterableNoticeFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      //removing the /src/routes to end with .md
      const noticePath = path.slice(11, -3)

      return {
        meta: metadata,
        path: noticePath,
      }
    })
  )

  return allNotices
}