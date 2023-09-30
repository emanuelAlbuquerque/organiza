import { useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const PagerMonth = () => {
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]

  const currentDate = new Date()
  const [currentMonthIndex, setCurrentMonthIndex] = useState(
    currentDate.getMonth()
  )
  const currentYear = currentDate.getFullYear()

  const goToPreviousMonth = () => {
    setCurrentMonthIndex(
      prevIndex => (prevIndex - 1 + months.length) % months.length
    )
  }

  const goToNextMonth = () => {
    setCurrentMonthIndex(prevIndex => (prevIndex + 1) % months.length)
  }

  const currentMonth = months[currentMonthIndex]

  return (
    <div className="flex items-center gap-4">
      <button onClick={goToPreviousMonth} className="w-6 h-6">
        <BsChevronLeft size={25} />
      </button>
      <p className="text-lg text-dark-title font-semibold">{`${currentMonth} ${currentYear}`}</p>
      <button onClick={goToNextMonth} className="w-6 h-6">
        <BsChevronRight size={25} />
      </button>
    </div>
  )
}

export default PagerMonth
