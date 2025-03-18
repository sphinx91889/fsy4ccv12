import CountdownTimer from '../components/CountdownTimer'
import MainContent from '../components/home/MainContent'

export default function Home() {
  return (
    <div className="pt-28">
      <CountdownTimer />
      <MainContent />
    </div>
  )
}
