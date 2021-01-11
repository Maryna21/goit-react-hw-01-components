import s from 'components/statistics/statistics.module.css';
const Stat = ({ label, percentage }) => {
  return (
    <div>
      <span className={s.label}>{label}</span>
      <p className={s.percentage}>{percentage}%</p>
    </div>
  );
};
export default Stat;
