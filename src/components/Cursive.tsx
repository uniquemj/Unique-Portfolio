
interface CursiveProps{
    text: string,
    className?: string
}

const Cursive = ({text, className}: CursiveProps) => {
  return (
    <h1 className={`${className} font-seaweed`}>{text}</h1>
  )
}

export default Cursive