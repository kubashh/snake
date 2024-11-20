export const setDirection = () => {
  document.addEventListener(`keydown`, (e) => {
    const key = e.target.value

    console.log(key)
  })
}