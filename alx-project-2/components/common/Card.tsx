import { CardProps } from "@/interfaces"

const Card = ({title, content}: CardProps) => {
  return (
    <div className="flex flex-col h-44 w-44 bg-gray-300 shadow-md gap-4 p-4 rounded-md">
        <p className="font-semibold text-lg">{title}</p>
        <p className="font-mono text-gray-600">{content}</p>

    </div>
  )
}

export default Card