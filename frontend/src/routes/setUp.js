export const setUp = () => {
  if(!global.data) {
    global.data = {}
  }

  if(!global.data.user) {
    global.data.user = {}
  }
}