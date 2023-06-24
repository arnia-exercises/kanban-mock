import { ReactNode } from "react"

type Props = {
  title: string
  children?: ReactNode
}

export default function Column ({ title, children }: Props) {
  return (
    <div className="column">
      <h1>{title}</h1>

      {children}
    </div>
  )
}
