import { formatDate } from '../../services/format-date';
import { Container } from './style';

export type DateProps = {
  date: string;
};

export default function Date({ date }: DateProps) {
  return <Container>{formatDate(date)}</Container>;
}
