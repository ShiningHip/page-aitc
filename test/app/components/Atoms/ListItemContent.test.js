import ListItemContent from 'app/components/Atoms/ListItemContent'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('ListItemContent test', () => {
  const props = {
    containerType: 'test',
    contentName: 'test',
    fontSize: 'test',
    isBold: true,
    text: 'test',
    linkDestination: 'test'
  }

  it('表示が正しいこと', () => {
    const wrapper = shallow(<ListItemContent {...props} />)
    const tree = wrapper.toJSON
    expect(tree).toMatchSnapshot()
  })

  it('リンク先を指定するとaタグが生成されること', () => {
    const wrapper = shallow(<ListItemContent {...props} />)
    expect(wrapper.find('.a')).isTruthy
  })
})
