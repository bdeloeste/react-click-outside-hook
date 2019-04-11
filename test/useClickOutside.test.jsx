import { mount } from 'enzyme'
import { act } from 'react-dom/test-utils'
import { useClickOutside } from '../src/components'

function ClickableComponent() {
  const [ref, hasClickedOutside] = useClickOutside()
  return (
    <div id="clickable" ref={ref}>
      {hasClickedOutside.toString()}
    </div>
  )
}

function Container() {
  return (
    <div>
      <ClickableComponent />
      <div id="dummy" />
    </div>
  )
}

function render() {
  return mount(<Container />)
}

describe('useClickOutside', () => {
  const map = {}
  beforeAll(() => {
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb
    })
    document.removeEventListener = jest.fn((event, cb) => {
      map[event] = cb
    })
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })

  it('should click outside of the clickable element and set hasOutsideClicked to `true`', () => {
    const wrapper = render()
    const dummy = wrapper.find('#dummy')
    act(() => {
      map.mousedown({
        target: dummy.getDOMNode(),
      })
    })
    const clickable = wrapper.find('#clickable')
    expect(clickable.text()).toEqual('true')
  })

  it('should click inside of the clickable element and set hasOutsideClicked to `false`', () => {
    const wrapper = render()
    const clickable = wrapper.find('#clickable')
    act(() => {
      map.mousedown({
        target: clickable.getDOMNode(),
      })
    })
    expect(clickable.text()).toEqual('false')
  })

  it('should add and remove `mousedown` and `touchstart` event listeners on mount and unmount', () => {
    const wrapper = render()
    expect(map).toHaveProperty('mousedown')
    expect(map).toHaveProperty('touchstart')
    wrapper.unmount()
    expect(map).toHaveProperty('mousedown')
    expect(map).toHaveProperty('touchstart')
  })

  it('should add and remove pointerdown event listener on mount and unmount', () => {
    global.PointerEvent = jest.fn()
    const wrapper = render()
    expect(map).toHaveProperty('pointerdown')
    wrapper.unmount()
    expect(map).toHaveProperty('pointerdown')
    global.PointerEvent.mockClear()
  })
})
