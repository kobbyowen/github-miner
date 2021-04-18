import './App.css';
import GitMinerProvider from './GitMinerProvider'
import GitMiner from "./GitMiner"

function App() {
  return <GitMinerProvider>
    <GitMiner />
  </GitMinerProvider>
}

export default App
