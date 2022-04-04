import React from 'react';
import '../css/Switch.css'
import { useModalStore } from '../store';

const Switch = () => {
    
    const toggleSwitch = useModalStore((state) => state.toggleSwitch)
    const setToggleSwitch = useModalStore((state) => state.setToggleSwitch)

    return (
        <div>
            <input
                className="react-switch-checkbox"
                id={ `react-switch-new` }
                type="checkbox"
                checked={toggleSwitch}
                onChange={setToggleSwitch}
                //onClick={() => setToggleSwitch(!toggleSwitch)}
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