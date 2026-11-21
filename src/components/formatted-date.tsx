import { parseISO, format } from "date-fns";

type FormattedDateProps = {
  /** ISO date string, e.g. "2026-01-21" */
  dateString: string;
};

export default function FormattedDate({ dateString }: FormattedDateProps) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
