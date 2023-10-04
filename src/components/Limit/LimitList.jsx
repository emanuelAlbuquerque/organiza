import React from "react"
import { Progress } from "@nextui-org/react"
import { BadgeColor } from "../BadgeColor"
import { PopoverRegisterLimit } from '../Popovers/PopoverRegisterLimit'
import { parceValueToBRL } from '@/services/format'

const LimitList = props => {
  return props.items.map(item => (
    <div className="flex items-center gap-2 mb-5 last:mb-0">
      <BadgeColor color={item.color} />
      <div className="w-full">
        <div className="flex justify-between items-center mb-1">
          <h2 className="text-sm font-semibold text-dark-title">{item.name}</h2>
          {
            item.limit > 0 && (
              <p className="text-sm text-dark-title font-semibold">{parceValueToBRL(item.spending)}
                <span className="text-gray-subtitle"> de {parceValueToBRL(item.limit)}</span>
              </p>
            )
          }
        </div>
        <div className='flex items-center gap-2'>
          <Progress size="md" aria-label="Loading..." value={item.spending} maxValue={item.limit}/>
          <PopoverRegisterLimit item={item} callback={ props.callback } />
        </div>
      </div>
    </div>

  ))
}

export { LimitList }