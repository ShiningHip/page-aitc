import ImageListItemContent from 'components/Atoms/ImageListItemContent'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('ImageListItemContent test', () => {
  const props = {
    containerType: 'test',
    contentName: 'test',
    linkDestination: 'test'
  }

  it('表示が正しいこと', () => {
    const wrapper = shallow(<ImageListItemContent {...props} />)
    const tree = wrapper.toJSON
    expect(tree).toMatchSnapshot()
  })

  it('リンク先を指定するとaタグが生成されること', () => {
    const wrapper = shallow(<ImageListItemContent {...props} />)
    expect(wrapper.find('.a')).isTruthy
  })
})
