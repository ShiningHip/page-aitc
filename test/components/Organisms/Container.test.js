import Container from 'components/Organisms/Container'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('Container test', () => {
  const props = {
    containerType: 'test',
    subtitle: 'test'
  }

  it('表示が正しいこと', () => {
    const tree = shallow(<Container {...props} />).toJSON
    expect(tree).toMatchSnapshot()
  })

  it('subtitleを指定するとサブタイトルが出力されること', () => {
    const wrapper = shallow(<Container {...props} />)
    expect(wrapper.find('.subtitle')).isTruthy
    expect(wrapper.find('.subtitle').text()).toBe('test')
  })
})
