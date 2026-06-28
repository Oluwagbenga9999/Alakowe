import { Routes, Route } from 'react-router-dom'
import HowItWorks from './components/howitworks'
import TopicPage from './components/howitworks/TopicPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HowItWorks />} />
      <Route path="/how-it-works/:topicId" element={<TopicPage />} />
    </Routes>
  )
}

export default App