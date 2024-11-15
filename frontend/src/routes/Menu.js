const TextInput = ({text, input}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: 100
      }}
    >
      <div
        style={{
          marginRight: 16
        }}
      >
        {text}
      </div>
      <input
        type={input.type}
        value={input.value}
        placeholder={input.placeholder}
      />
    </div>
  )
}

export const Menu = () => {
  let connected = false
  let lastNick = "Your nick"
  let lastColor = "red"

  return (
    <div>
      <div>
        {connected ? <div>connected</div> : <div style={{color: "red"}}>not connected</div>}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 100
        }}
      >
        <h1>Menu</h1>
        <TextInput
          text="Nick"
          input={{
            type: "text",
            value: lastNick,
            placeholder: "Your nick"
          }}
        />
        <TextInput
          text="color"
          input={{
            type: "color",
            value: lastColor
          }}
        />
      </div>
    </div>
  )
}