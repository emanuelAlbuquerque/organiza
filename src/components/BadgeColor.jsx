const BadgeColor = props => {
    return (
        <div
        className="w-10 h-10 rounded-full"
        style={{ backgroundColor: props.color }}
      ></div>
    )
  }
  
  export { BadgeColor }