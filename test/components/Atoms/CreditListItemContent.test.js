import CreditListItemContent from 'components/Atoms/CreditListItemContent'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('CreditListItemContent test', () => {
  const props = {
    name: 'test',
    url: 'test'
  }

  it('表示が正しいこと', () => {
    const tree = shallow(<CreditListItemContent {...props} />).toJSON
    expect(tree).toMatchSnapshot()
  })
})
