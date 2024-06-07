import { useTs } from "@terai/react"

export function Example () {
  const { ts } = useTs()

  return (
    <div>
      <span>
        {ts`Hello world!`}
      </span>
      <span>
        {ts`Just focus on your messages and Terai will take of the rest!`}
      </span>
    </div>
  )
}