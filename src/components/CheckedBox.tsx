import React from 'react'
import "./CheckedBox.sass"

export default function CheckedBox ({ name, id }) {
    return (
        <div className="checked-box-container" data-testid="checkbox">
            <fieldset>
                <label className="check-box-container" htmlFor={id}>
                    <input type="checkbox" id={id}/>
                    <span className="checkmark"></span>
                {name}
                </label>
            </fieldset>
        </div>
    )
}