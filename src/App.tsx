import { Routes, Route } from 'react-router-dom'
import HowItWorks from './components/HowItWorks'
import TopicPage from './components/Howitworks/TopicPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HowItWorks />} />
      <Route path="/how-it-works/:topicId" element={<TopicPage />} />
    </Routes>
  )
}

export default App