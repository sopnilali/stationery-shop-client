import { Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { Controller } from 'react-hook-form';

type TInputProps = {
  type?: string;
  name: string;
  defaultValue?: string;
  label?: string;
  disabled?: boolean;
};

const SSTextArea = ({ name, label, defaultValue, disabled }: TInputProps) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <TextArea size="large" placeholder={name} defaultValue={defaultValue} {...field} id='name' rows={4} disabled={disabled} />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default SSTextArea;