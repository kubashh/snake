export const setDirection = () => {
  document.addEventListener(`keydown`, (e) => {
    const { key } = e

    console.log(key)
  })
}