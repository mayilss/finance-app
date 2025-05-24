import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

interface SelectProps<T extends FieldValues = FieldValues>
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  control: Control<T>;
  name: FieldPath<T>;
  label?: string;
  options: Array<{ value: string; label: string }>;
}

function Select<T extends FieldValues>(props: SelectProps<T>) {
  return (
    <Controller
      control={props.control}
      name={props.name}
      render={({ field, fieldState }) => (
        <div className="flex flex-col">
          {props.label && (
            <label
              htmlFor={props.name}
              className={
                fieldState.error?.message
                  ? "text-error"
                  : "text-text-primary dark:text-text-primary-dark"
              }
            >
              {props.label}
            </label>
          )}
          <select
            className={`${fieldState.error?.message ? "border-error focus:ring-error" : "border-border focus:ring-primary"} border-[1px] rounded-lg p-2 focus:outline-none focus:ring-[1px] text-text-primary dark:text-text-primary-dark`}
            id={props.name}
            {...props}
            {...field}
          >
            {props.options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="text-text-primary dark:text-text-primary-dark bg-bg dark:bg-bg-dark"
              >
                {option.label}
              </option>
            ))}
          </select>
          {fieldState.error && (
            <span className="text-error text-xs">
              {fieldState.error.message}
            </span>
          )}
        </div>
      )}
    />
  );
}

export default Select;
