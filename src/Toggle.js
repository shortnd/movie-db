import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Toggle = () => {
  const { messageVisibility } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  return (
    <div>
      {messageVisibility
        && <div> Message to toggle </div>}
      <button type="button" onClick={() => dispatch({ type: 'TOGGLE_MESSAGE' })}>Toggle Me</button>
    </div>
  );
};

export default Toggle;
