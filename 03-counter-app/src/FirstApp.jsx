import { PropTypes } from "prop-types";


const FirstApp = ({ hiFrom, subtitle }) => {
    
    let hi = `Hello World`;
    hi += hiFrom? `, I'm ${hiFrom}`: '';
    
    // <> is a shortcut for fragments 
    return <>
        <h1>{hi}</h1>
        {/* <p>{ JSON.stringify({ name:'Fer'}, null, 3) }</p> */}
        <p>{subtitle}</p>
    </>;
}

FirstApp.propTypes = {
    hiFrom: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
}

FirstApp.defaultProps = {
    subtitle: 'This is a Subtitle',
}

export default FirstApp;

