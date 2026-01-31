const arr = ["http://192.168.0.109:3000/", "http://localhost:3000/"]
const IPadd = arr[0]
export const postingMessage = async (what) => {
  const response = await fetch(`${IPadd}contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(what),
    credentials: "include"
  })
  return response.json()
}

export const viewCount = async () => {
  const response = await fetch(`${IPadd}views`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include"
  })
  return response.json();
}