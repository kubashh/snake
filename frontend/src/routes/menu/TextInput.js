export const TextInput = ({text, input, setValue}) => {
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
          width: 256
        }}
      >
        {text}
      </div>
      <input
        style={{
          margin: 0,
          border: 0,
          padding: 0,
          height: 48,
          width: 128
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