import TrackListItem from 'components/Molecules/TrackListItem'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('TrackListItem test', () => {
  const props = {
    no: 'test',
    title: 'test',
    artist: 'test'
  }

  it('表示が正しいこと', () => {
    const tree = shallow(<TrackListItem {...props} />).toJSON
    expect(tree).toMatchSnapshot()
  })
})
