import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifSearcher from '../../components/GifSearcher';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Tests for <GifSearcher />', () => {
  const category = 'Test';

  test('should display properly', () => {
    
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifSearcher category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should display images after loading hook', () => {

    const imgs =  [{
      id: 'ABC',
      url: 'https://localhost.test.url/abc.gif',
      title: 'Test gif ABC' 
    }, 
    {
      id: 'DEF',
      url: 'https://localhost.test.url/def.gif',
      title: 'Test gif DEF' 
    }];

    useFetchGifs.mockReturnValue({
      data: imgs,
      loading: false,
    });

    const wrapper = shallow(<GifSearcher category={category} />);

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('p').exists() ).toBe(false);
    expect( wrapper.find('GifItem').length ).toBe( imgs.length );
  });


});