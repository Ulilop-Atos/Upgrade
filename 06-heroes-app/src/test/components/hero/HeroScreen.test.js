import { mount } from "enzyme";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { HeroScreen } from "../../../components/hero/HeroScreen";

const mockNavigate = jest.fn()

jest.mock('react-router-dom', 
  ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,   
  })
);

describe('Tests for <HeroScreen />', () => {
  
  test('should display properly', () => {
    
    const hero = 'marvel-spider';

    const wrapper = mount(
      <MemoryRouter initialEntries={[`/hero/${hero}`]}>
        <Routes >
          <Route path={`/hero/:heroId`} element={<HeroScreen />} />
          <Route path="/" element={<h1> No hero </h1>} />
        </Routes>
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('should not display if the heroID is invalid', () => {
    
    const wrapper = mount(
      <MemoryRouter initialEntries={[`/hero/TestNonHero`]}>
        <Routes >
          <Route path="/hero/:heroId" element={<HeroScreen />} />
          <Route path="/" element={<h1> No hero </h1>} />
        </Routes>
      </MemoryRouter>
    );

    expect(wrapper.find('h1').text().trim()).toBe('No hero');
  });

  test('should call redirect to previous screen', () => {
    
    const hero = 'marvel-spider';

    const wrapper = mount(
      <MemoryRouter initialEntries={[`/hero/${hero}`]}>
        <Routes >
          <Route path={`/hero/:heroId`} element={<HeroScreen />} />
          <Route path="/" element={<h1> No hero </h1>} />
        </Routes>
      </MemoryRouter>
    );

    wrapper.find('button').prop('onClick')();
    
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
  

});