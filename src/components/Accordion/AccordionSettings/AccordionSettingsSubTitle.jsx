const AccordionSettingsSubTitle = props => {
  return (
    <p className="text-xl text-gray-subtitle font-normal">
      R$ <span className="font-bold text-dark-title">{props.value}</span>
    </p>
  )
}

export {
  AccordionSettingsSubTitle
}