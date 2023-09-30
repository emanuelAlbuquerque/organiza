import React from "react";
import { Progress } from "@nextui-org/react";
import { BadgeColor } from "../BadgeColor";

const LimitList = props => {
  return props.items.map(item => (
    <div className="flex items-center gap-2 mb-5 last:mb-0">
      <BadgeColor color={item.color} />
      <div className="w-full">
        <div className="flex justify-between items-center mb-1">
          <h2 className="text-sm font-semibold text-dark-title">Alimentação</h2>
          <p className="text-sm text-dark-title font-semibold">10,00 <span className="text-gray-subtitle">de 30,00</span></p>
        </div>
        <Progress size="md" aria-label="Loading..." value={50} />
      </div>
    </div>

  ))
}

export { LimitList }