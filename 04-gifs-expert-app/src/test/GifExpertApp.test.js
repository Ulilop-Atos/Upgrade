import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe('Tests for <GifExpertApp />', () => { 
  test('should display properly', () => { 
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should display a list of categories', () => { 
    const categories = ['One Punch Man', 'Naruto', 'Karla'];

    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifSearcher').length).toBe(categories.length);
   })
});