import * as React from 'react';
import ExpressionValueText from './ExpressionValueText';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

it('text should show', () => {
    
    let value = 'someString';
    const onChanged = () => undefined;
    
    configure({ adapter: new Adapter() }); 

    const component = shallow(
        <ExpressionValueText 
            value={value}
            readOnly={false}
            onChange={onChanged}
        />          
    );

    expect(component !== null);

});