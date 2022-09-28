//Preloading the json data from the api folder with all our notices
export const load = async ({ fetch }) => {
  const response = await fetch(`/api/notices`)
  const notices = await response.json()

  return {
    notices
  }
}