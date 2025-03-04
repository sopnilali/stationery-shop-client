import { Form, Input } from 'antd';
import { Controller } from 'react-hook-form';

type TInputProps = {
  type: string;
  name: string;
  defaultValue?: string;
  label?: string;
  disabled?: boolean;
};

const SSInput = ({ type, name, label, defaultValue, disabled }: TInputProps) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input
              {...field}
              type={type}
              id={name}
              defaultValue={defaultValue}
              placeholder={name}
              size="large"
              disabled={disabled}
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default SSInput;