import { BadgeColor } from '../BadgeColor'

import { Select, Chip, SelectItem } from '@nextui-org/react'

const SelectInput = (props) => {
  return (
    <Select
      items={props.listItems}
      label={props.label}
      onChange={props.handleOnChange}
      variant="bordered"
      placeholder={props.placeholder}
      labelPlacement="outside"
      classNames={{
        trigger: 'min-h-unit-12 py-2'
      }}
      className='w-full'
      renderValue={items => {
        return (
          <div className="flex flex-wrap gap-2">
            {items.map(item => (
              <Chip key={item.key}>{item.data.name}</Chip>
            ))}
          </div>
        )
      }}
    >
      {item => (
        <SelectItem key={item.id} textValue={item.name}>
          <div className="flex gap-2 items-center">
            <BadgeColor color={item.color} />
            <div className="flex flex-col">
              <span className="text-small">{item.name}</span>
            </div>
          </div>
        </SelectItem>
      )}
    </Select>
  )
}

export {
  SelectInput
}