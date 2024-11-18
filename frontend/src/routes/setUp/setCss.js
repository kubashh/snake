//import "./index.css"

// body
document.body.style.margin = 0
document.body.style.fontFamily = "sans-serif"
document.body.style.backgroundColor = "black"
document.body.style.color = "white"

// Your CSS as text
const styles = `
input[type="text"], input[type="button"] {
  background-color: black;
  color: white;
}

input:hover {
  cursor: pointer;
}
`

const styleSheet = document.createElement("style")
styleSheet.textContent = styles
document.head.appendChild(styleSheet)