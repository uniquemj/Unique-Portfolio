import { Button } from '@/components/ui/button';


export interface SkillCardType{
    id: number,
    icon: string,
    skill: string
}

const SkillCard = ({id, icon, skill}:SkillCardType) => {
  return (
    <div key={id}>
        <Button className='disabled'>
            <img src={icon} alt={`skill${id}`}/>
            {skill}
        </Button>
    </div>
  )
}

export default SkillCard