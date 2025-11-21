import { ButtonProps } from "@/interfaces"

const buttonSize = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-1 text-base",
    large: "px-5 py-1 text-lg"
}

const buttonShape = {
    "rounded-sm" : "rounded-sm",
    "rounded-md" : "rounded-md",
    "rounded-full" : "rounded-full"
}


const Button = ({title, shape="rounded-sm", size="small"}: ButtonProps) => {
    const B_size = buttonSize[size];
    const B_shape = buttonShape[shape]

  return (
    <div>
        <button className={`border ${B_shape} ${B_size} cursor-pointer hover:bg-gray-50 duration-75`}>{title}</button>
    </div>
  )
}

export default Button