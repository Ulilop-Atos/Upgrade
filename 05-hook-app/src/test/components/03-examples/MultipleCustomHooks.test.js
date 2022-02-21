import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useCounter } from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Tests for <MultipleCustomHooks />', () => { 
  
  test('should display properly before loading', () => {
    useCounter.mockReturnValue({
      state: 1,
      increment: () => {},
    });
    useFetch.mockReturnValue({
      data:null,
      loading:true,
      error:null,
    });
    const wrapper =  shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert').exists()).toBe(true);
   });

  test('should display properly after loading', () => { 
    const quote = 'This is a test quote.';
    const author = 'Test Author';
    useCounter.mockReturnValue({
      state: 1,
      increment: () => {},
    });
    useFetch.mockReturnValue({
      data:[{
        author,
        quote,
      }],
      loading:false,
      error:null,
    });
    const wrapper =  shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert').exists()).toBe(false);
    expect(wrapper.find('.mb-0').text().trim()).toBe(quote);
    expect(wrapper.find('.blockquote-footer').text().trim()).toBe(author);
  });

 });