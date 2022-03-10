import { getSecondsDiff } from './getSecondsDiff';
import { getUnitValueDate } from './getUnitAndValueDate';

const timeAgoNote = (timestamp, locale) => {
  const rtf = new Intl.RelativeTimeFormat(locale);

  const secondsElapsed = getSecondsDiff(timestamp);
  const { value, unit } = getUnitValueDate(secondsElapsed);
  return rtf.format(value, unit);
};

export default timeAgoNote;
