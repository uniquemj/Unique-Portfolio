
interface CursiveProps{
    text: string,
    className?: string
}

const Cursive = ({text, className}: CursiveProps) => {
  return (
    <p className={`${className} font-seaweed`}>{text}</p>
  )
}

export default Cursive