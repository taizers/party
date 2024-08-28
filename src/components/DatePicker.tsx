import { Calendar } from 'primereact/calendar';
import { FC } from 'react';

interface DatePickerProps {
  date: string;
  minDate?: Date;
  setDate: (date: string) => void;
}

const DatePicker: FC<DatePickerProps> = ({
  date,
  setDate,
  minDate = new Date(),
}) => {
  return (
    <div className="inline-flex flex-column gap-2">
      <label
        htmlFor="calendar"
        style={{ marginBottom: '5px' }}
        className="text-primary-50 font-semibold"
      >
        {'Choose Date of Party'}
      </label>
      <Calendar
        style={{ width: '100%' }}
        id="calendar"
        value={new Date(date)}
        onChange={(e) => e.value && setDate(e.value.toString())}
        minDate={minDate}
        readOnlyInput
      />
    </div>
  );
};

export default DatePicker;
