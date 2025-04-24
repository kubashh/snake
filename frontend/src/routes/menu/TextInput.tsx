export const TextInput = ({ text, input, setValue, style }: TextInputType) => (
  <div className="flex flex-row" style={{ margin: `16px auto` }}>
    <div style={{ marginRight: 16, height: 48, width: 196, fontSize: 24 }}>
      {text}
    </div>
    <input
      style={{
        height: 48,
        width: 196,
        borderRadius: 32,
        fontSize: 24,
        ...style,
      }}
      type={input.type}
      value={input.value}
      placeholder={input.placeholder}
      onChange={(e) => setValue(e.target.value)}
    />
  </div>
)
