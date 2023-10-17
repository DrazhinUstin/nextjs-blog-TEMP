import { parseISO, format } from 'date-fns';

export default function Date({ dateStr }: { dateStr: string }) {
    const date = parseISO(dateStr);
    return <time dateTime={dateStr}>{format(date, 'LLLL d, yyyy')}</time>;
}
