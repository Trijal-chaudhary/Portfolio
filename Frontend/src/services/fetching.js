export const postingMessage = async (what) => {
  const response = await fetch("http://localhost:3000/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(what),
    credentials: "include"
  })
  return response.json()
}