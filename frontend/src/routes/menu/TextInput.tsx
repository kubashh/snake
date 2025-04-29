export const TextInput = ({
  text,
  input,
  setValue,
  className,
}: TextInputType) => (
  <div className="flex flex-row mx-auto my-8">
    <div className="mr-8 my-auto px-8 text-2xl">{text}</div>
    <input
      className={`w-48 h-12 border-2 border-black text-2xl rounded-2xl ${className}`}
      type={input.type}
      value={input.value}
      placeholder={input.placeholder}
      onChange={(e) => setValue(e.target.value)}
    />
  </div>
)
