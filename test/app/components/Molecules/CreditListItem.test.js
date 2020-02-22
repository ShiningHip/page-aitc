import CreditListItem from 'app/components/Molecules/CreditListItem'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('CreditListItem test', () => {
  const props = {
    role: 'test'
  }

  it('表示が正しいこと', () => {
    const tree = shallow(<CreditListItem {...props} />).toJSON
    expect(tree).toMatchSnapshot()
  })
})
