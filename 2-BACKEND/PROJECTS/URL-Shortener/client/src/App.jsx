import Navbar from './components/Navbar'
import IssueHeader from './components/IssueHeader'
import Hero from './components/Hero'
import ShortenForm from './components/ShortenForm'
import ResultCard from './components/ResultCard'
import LinksLedger from './components/LinksLedger'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <IssueHeader />
      <Hero />
      <ShortenForm />
      <ResultCard />
      <LinksLedger />
      <Footer />
    </div>
  )
}

export default App