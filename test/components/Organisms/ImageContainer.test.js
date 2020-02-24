import ImageContainer from 'components/Organisms/ImageContainer'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('ImageContainer test', () => {
  const props = {
    containerType: 'test'
  }

  it('表示が正しいこと', () => {
    const tree = shallow(<ImageContainer {...props} />).toJSON
    expect(tree).toMatchSnapshot()
  })
})
