import { useAppDispatch, useAppSelector } from "@app/hooks";
import { THEME_MODES, type ThemeState } from "@app/types/settings";
import Button from "@components/ui/Button";
import Select from "@components/ui/Select";
import { capitalizeFirstLetterLocale } from "@lib/format";
import { useForm } from "react-hook-form";
import { setTheme } from "../theme/slice";
import { selectTheme } from "../theme/selectors";

export default function ThemeForm() {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  const form = useForm<ThemeState>({
    defaultValues: {
      mode: theme.mode,
    },
  });
  const onSubmit = (data: ThemeState) => {
    dispatch(setTheme(data.mode));
  };
  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="mt-8 space-y-4 max-w-lg mx-auto"
    >
      <Select
        control={form.control}
        name="mode"
        options={THEME_MODES.map((mode) => ({
          label: capitalizeFirstLetterLocale(mode),
          value: mode,
        }))}
        label="Theme mode"
      />
      <Button>Apply</Button>
    </form>
  );
}
