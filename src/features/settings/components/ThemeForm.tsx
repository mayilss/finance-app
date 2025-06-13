import Button from "@components/ui/Button";
import Select from "@components/ui/Select";
import { THEME_MODES, type ThemeState } from "@features/settings/types";
import { capitalizeFirstLetterLocale } from "@lib/format";
import { useForm } from "react-hook-form";
import { useSetTheme } from "../useSetTheme";
import { useTheme } from "../useTheme";

export default function ThemeForm() {
  const theme = useTheme();
  const setTheme = useSetTheme();
  const form = useForm<ThemeState>({
    defaultValues: {
      mode: theme.mode,
    },
  });
  const onSubmit = (data: ThemeState) => {
    setTheme(data.mode);
  };
  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col mt-8 space-y-4 max-w-lg mx-auto"
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
      <Button aria-label="Apply theme mode">Apply</Button>
    </form>
  );
}
