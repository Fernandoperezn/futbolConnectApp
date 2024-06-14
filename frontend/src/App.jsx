import RoutesIndex from './routes/RoutesIndex'
import { BrowserRouter } from 'react-router-dom'

function App () {
  return (
    <>
      <BrowserRouter>
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App
