import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

interface InputProps<T extends FieldValues = FieldValues>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  control: Control<T>;
  name: FieldPath<T>;
  label?: string;
}

function Input<T extends FieldValues>(props: InputProps<T>) {
  return (
    <div>
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      <Controller
        control={props.control}
        name={props.name}
        render={({ field, fieldState }) => (
          <div>
            <input {...props} {...field} />
            {fieldState.error && <span>{fieldState.error.message}</span>}
          </div>
        )}
      />
    </div>
  );
}

export default Input;
