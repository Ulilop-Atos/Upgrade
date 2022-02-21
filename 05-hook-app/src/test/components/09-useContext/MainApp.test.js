import { shallow } from 'enzyme';
import MainApp from '../../../components/09-useContext/MainApp';

describe('Tests for <MainApp />', () => { 
  
  test('should display properly', () => { 
    const wrapper =  shallow(<MainApp />);
    expect(wrapper).toMatchSnapshot();
   });

 });