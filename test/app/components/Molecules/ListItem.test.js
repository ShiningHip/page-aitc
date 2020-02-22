import ListItem from 'app/components/Molecules/ListItem'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('ListItem test', () => {
  const props = {
    containerType: 'test'
  }

  it('表示が正しいこと', () => {
    const tree = shallow(<ListItem {...props} />).toJSON
    expect(tree).toMatchSnapshot()
  })
})
