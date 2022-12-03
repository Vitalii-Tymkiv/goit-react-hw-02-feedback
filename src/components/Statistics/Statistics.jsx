import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { Notification } from 'components/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      {total > 0 && (
        <ul className={css.statList}>
          <li className={css.statItem}>Good: {good}</li>
          <li className={css.statItem}>Neutral: {neutral}</li>
          <li className={css.statItem}>Bad: {bad}</li>
          <li className={css.statItem}>Total: {total}</li>
          <li className={css.statItem}>
            Positive Percentage: {positivePercentage}%
          </li>
        </ul>
      )}
      {total === 0 && <Notification alert="No Feedback Given!"></Notification>}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
