import PropTypes from 'prop-types';
import s from 'components/statistics/statistics.module.css';
import Stat from 'components/statistics/stat';
export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      <div className={s.titleBox}>
        {title && <h2 className={s.title}>{title}</h2>}
      </div>
      <ul className={s.statList}>
        {stats.map(item => (
          <li key={item.id} className={s.item}>
            <Stat label={item.label} percentage={item.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};
