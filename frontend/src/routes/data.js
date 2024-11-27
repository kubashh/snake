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

export const data = {
  address: `https://verbose-succotash-69gq79965wq6fwgx-4000.app.github.dev`,
  bgColor: `#008`,
  pixelSize: 40,
  inGame: false,
  user: user,
  socket: {},
  ctx: {
    canvas: {}
  }
}