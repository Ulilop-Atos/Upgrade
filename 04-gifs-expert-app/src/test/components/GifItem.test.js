import { shallow } from "enzyme";
import GifItem from "../../components/GifItem";

describe('Test for <GifItem />', () => {

  const [url, title] = [`https//localhost.app/Image.jpg`, `Title of image`];
  const wrapper = shallow(<GifItem url={url} title={title} />);

  test('should render', () => {

    expect(wrapper).toMatchSnapshot();

  });

  test('should have a paragraph with the title ', () => {
    const p = wrapper.find('span');
    expect(p.text().trim()).toBe(title);
  });

  test('should have an image with the url and title as alt ', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('should have the class card', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');
    expect(className).toContain(`card`);
  });

});