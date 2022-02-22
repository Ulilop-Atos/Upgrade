import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { SearchScreen } from "../../../components/search/SearchScreen";

const mockNavigate = jest.fn()

jest.mock('react-router-dom', 
  ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,   
  })
);

describe('Tests for <SearchScreen />', () => {

  test('should display properly', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <SearchScreen />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert').text().trim()).toBe(`Search a hero`);
  });

  test('should use the query value as input and display a hero', () => {

    const hero = 'Spider Man';
    const wrapper = mount(
      <MemoryRouter initialEntries={[`/search?q=${hero}`]}>
        <SearchScreen />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('input').prop('value')).toBe(hero);
    expect(wrapper.find('.card-title').text().trim()).toBe(hero);
  });

  test('should use the query value as input and display a not found message', () => {

    const hero = 'Crazy hero name';
    const wrapper = mount(
      <MemoryRouter initialEntries={[`/search?q=${hero}`]}>
        <SearchScreen />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('input').prop('value')).toBe(hero);
    expect(wrapper.find('.alert-danger').text().trim()).toBe(`No results for: ${hero}` );
  });

  test('should update the path on search submit', () => { 
    
    const hero = 'Spider Man';

    const wrapper = mount(
      <MemoryRouter initialEntries={[`/search`]}>
        <SearchScreen />
      </MemoryRouter>
    );
    
    wrapper.find('input').simulate('change', {
      target: {
        name: 'searchText',
        value: hero,
      },
    });

    wrapper.find('form').prop('onSubmit')({preventDefault(){}});
 
    expect(mockNavigate).toHaveBeenCalledWith(`?q=${hero}`);
  });
});