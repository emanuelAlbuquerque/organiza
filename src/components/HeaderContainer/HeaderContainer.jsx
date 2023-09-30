import PagerMonth from '../PagerMonth/PagerMonth'

const HeaderContainer = props => {
  return (
    <div style={{ position: 'relative' }}>
      <h1
        className="font-bold text-xl"
        style={{ position: 'absolute', left: 0 }}
      >
        {props.title}
      </h1>
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          transform: 'translate(-50%, 0)'
        }}
      >
        <PagerMonth />
      </div>
    </div>
  )
}

export { HeaderContainer }
