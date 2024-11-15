export const TextInput = ({text, input, setValue}) => {
  const padding = input.type == `text` ? "4px 12px" : 0

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        margin: "16px auto"
      }}
    >
      <div
        style={{
          marginRight: 16,
          height: 48,
          width: 196,
          fontSize: 24
        }}
      >
        {text}
      </div>
      <input
        style={{
          margin: 0,
          border: 0,
          padding: padding,
          height: 48,
          width: 196,
          borderRadius: 16,
          fontSize: 24
        }}
        type={input.type}
        value={input.value}
        placeholder={input.placeholder}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
    </div>
  )
}