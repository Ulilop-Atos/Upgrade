import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import FirstApp from "../FirstApp";

describe('Test <FirstApp ></FirstApp >', ()=>{

    // Test using vanilla Jest
    test(`Should show the message "Hello World, I'm, Goku"`, () => {
        const content = `Hello World, I'm Goku`;
        // This is a wrapper
        const {getByText} = render(<FirstApp hiFrom={'Goku'}/>);
        expect( getByText(content) ).toBeInTheDocument();

    });

    // Test using Enzime
    test(`Should show <FirstApp /> correctly`, () => {
        
        const title = `Hello World, I'm Goku`;
        const subtitle = `I'm a strong warrior!`;

        const wrapper = shallow(<FirstApp 
            hiFrom={`Goku`}
            subtitle={subtitle}
            />);
            
        expect( wrapper ).toMatchSnapshot();

        expect(wrapper.find('h1').text()).toBe(title);
        expect(wrapper.find('p').text()).toBe(subtitle);
    });
});