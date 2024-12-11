export const setUser = () => {
  const oldData = localStorage.getItem(`data`)
  
  let user = {
    nick: "Nick",
    color: "#ff0000"
  }
  
  if(oldData) {
    const { nick, color } = JSON.parse(oldData)
    if(nick && color) {
      user.nick = nick
      user.color = color
    }
  }

  window.data.user = user
}