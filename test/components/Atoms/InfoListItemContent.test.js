import InfoListItemContent from 'components/Atoms/InfoListItemContent'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('InfoListItemContent test', () => {
  const props = {
    fontSize: 'test',
    text: 'test'
  }

  it('表示が正しいこと', () => {
    const tree = shallow(<InfoListItemContent {...props} />).toJSON
    expect(tree).toMatchSnapshot()
  })
})
