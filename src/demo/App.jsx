import { useClickOutside } from '../components/useClickOutside'
import './App.css'

const BLOCK_HEIGHT = 55
const BLOCK_WIDTH = 125

function randomIntBetween(min, max) {
  // eslint-disable-next-line no-mixed-operators
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function ClickBlock({ top, left }) {
  const [ref, hasClickedOutside] = useClickOutside()
  return (
    <div
      className="click-block"
      ref={ref}
      style={{
        top,
        left,
      }}
    >
      Click me {hasClickedOutside ? '😲' : '😆'}
    </div>
  )
}

export default function App() {
  return (
    <main>
      <ClickBlock
        top={randomIntBetween(1, window.innerHeight - BLOCK_HEIGHT)}
        left={randomIntBetween(1, window.innerWidth - BLOCK_WIDTH)}
      />
      <ClickBlock
        top={randomIntBetween(1, window.innerHeight - BLOCK_HEIGHT)}
        left={randomIntBetween(1, window.innerWidth - BLOCK_WIDTH)}
      />
      <ClickBlock
        top={randomIntBetween(1, window.innerHeight - BLOCK_HEIGHT)}
        left={randomIntBetween(1, window.innerWidth - BLOCK_WIDTH)}
      />
      <ClickBlock
        top={randomIntBetween(1, window.innerHeight - BLOCK_HEIGHT)}
        left={randomIntBetween(1, window.innerWidth - BLOCK_WIDTH)}
      />
    </main>
  )
}
