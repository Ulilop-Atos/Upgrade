import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe('Test <CounterApp />', ()=>{

    let wrapper = shallow(<CounterApp />);
    
    beforeEach( () =>        
        wrapper = shallow(<CounterApp />)
    );

    test(`Should show <CounterApp /> correctly`, () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test(`Should show <CounterApp value=n /> correctly`, () => {
        const value = 100;
        expect(shallow(<CounterApp value={value} />).find('h3').text().trim()).toBe(`${value}`);

    });

    test(`Should button +1 increment value in <CounterApp />`, () => {
        wrapper.find('button').at(0).simulate('click');
        expect(wrapper.find('h3').text().trim()).toBe(`${1}`);

    });

    test(`Should button -1 decrement value in <CounterApp />`, () => {
        wrapper.find('button').at(2).simulate('click');
        expect(wrapper.find('h3').text().trim()).toBe(`${-1}`);

    });
    
    test(`Should button Reset restore the original value in <CounterApp />`, () => {
        wrapper.find('button').at(1).simulate('click');
        expect(wrapper.find('h3').text().trim()).toBe(`${0}`);
        
        for (let i = 0; i < 5; i++) {
            wrapper.find('button').at(0).simulate('click');
        }

        wrapper.find('button').at(1).simulate('click');
        expect(wrapper.find('h3').text().trim()).toBe(`${0}`);
    });
});