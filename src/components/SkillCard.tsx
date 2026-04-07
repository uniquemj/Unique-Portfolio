import React from 'react'
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
            {skill}
        </Button>
    </div>
  )
}

export default SkillCard