import type { FC, ReactNode } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import '../../index.css';
import './Input.css';

interface InputProps {
  className?: string;
  type?: 'text' | 'hidden' | 'file';
  startGroup?: ReactNode;
}

const Input: FC<InputProps> = ({
  className,
  type,
  startGroup
}) => {
  let element = (
    <input
      className="form-control"
      type={type}
      name="username"
      value=""
      placeholder="Basic usage"
    />
  );

  if (startGroup) {
    element = (<div className="input-group">
      <span className="form-control">
        {startGroup && (
          <span className="input-group-text input-group-text-start">
            {startGroup}
          </span>
        )}

        <input
          className="input-control"
          type={type}
          name="username"
          value=""
          placeholder="Input with affix"
        />
      </span>
    </div>);
  }

  return element;
};

export default Input;
