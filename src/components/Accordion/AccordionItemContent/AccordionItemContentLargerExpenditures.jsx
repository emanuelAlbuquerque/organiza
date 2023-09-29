const AccordionItemContentLargerExpenditures = props => {
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
        <div className="flex items-center gap-4">
          <p>{item.value} %</p>
        </div>
      </div>
    </div>
  ))
}

export { AccordionItemContentLargerExpenditures }
