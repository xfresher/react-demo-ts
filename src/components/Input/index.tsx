import type { FC } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import '../../index.css';
import './Input.css';

interface InputProps {
  className?: string;
  type?: 'text' | 'hidden' | 'file';
  inputGroup?: 'none' | 'div' | 'span';
}

const Input: FC<InputProps> = ({
  className,
  type,
  inputGroup
}) => {
  return (
    <input
      className="form-control mb-3"
      type={type}
      name="username"
      value=""
      placeholder="Basic usage"
    />
  );
};

export default Input;
