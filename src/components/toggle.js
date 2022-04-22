import React from 'react';
import '../css/Switch.css'
import { useModalStore } from '../store';

const Switch = () => {
    
    const completeSwitch = useModalStore((state) => state.completeSwitch)
    const setCompleteSwitch = useModalStore((state) => state.setCompleteSwitch)

    return (
        <div>
            <input
                className="react-switch-checkbox"
                id={ `react-switch-new` }
                type="checkbox"
                checked={ completeSwitch}
                onChange={setCompleteSwitch}
            />
            <label
                className="react-switch-label"
                htmlFor={ `react-switch-new` }
            >
                <span className={ `react-switch-button` } />
            </label>
        </div>
    );
};

export default Switch;