const { Select, Chip, Avatar, SelectItem } = require('@nextui-org/react')

const SelectInput = (props) => {
  return (
    <Select
      items={props.listItems}
      label={props.label}
      variant="bordered"
      placeholder={props.placeholder}
      labelPlacement="outside"
      classNames={{
        base: 'max-w-xs',
        trigger: 'min-h-unit-12 py-2'
      }}
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
            <Avatar
              alt={item.name}
              className="flex-shrink-0"
              size="sm"
              src={item.avatar}
            />
            <div className="flex flex-col">
              <span className="text-small">{item.name}</span>
              <span className="text-tiny text-default-400">{item.email}</span>
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