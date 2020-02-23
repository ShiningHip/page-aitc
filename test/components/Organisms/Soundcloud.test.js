import Soundcloud from 'components/Organisms/Soundcloud'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('Soundcloud test', () => {
  it('表示が正しいこと', () => {
    const tree = shallow(<Soundcloud />).toJSON
    expect(tree).toMatchSnapshot()
  })
})
