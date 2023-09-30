import React from "react";

import {Progress} from "@nextui-org/react";

const LimitList  = props => {
    return props.items.map(item => (
        <div className="border-b-1 border-gray-200 last:border-none">
          <div className="flex justify-between items-center p-3 rounded-xl">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <p className="text-dark-title">{item.title}</p>
            </div>
            <div className="flex flex-col gap-6 w-full max-w-md">
              {item.bar}  <Progress size="lg" aria-label="Loading..." value={50} />
            </div>
          </div>
        </div>
      ))
    }
    
    export { LimitList }