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
      <Controller
        control={props.control}
        name={props.name}
        render={({ field, fieldState }) => (
          <div className="flex flex-col">
            {props.label && (
              <label
                htmlFor={props.name}
                className={
                  fieldState.error?.message ? "text-error" : "text-text-primary"
                }
              >
                {props.label}
              </label>
            )}
            <input
              className={`${fieldState.error?.message ? "border-error focus:ring-error" : "border-border focus:ring-primary"} border-[1px] rounded-lg p-2 focus:outline-none focus:ring-[1px]`}
              id={props.name}
              {...props}
              {...field}
            />
            {fieldState.error && (
              <span className="text-error text-xs">
                {fieldState.error.message}
              </span>
            )}
          </div>
        )}
      />
    </div>
  );
}

export default Input;
