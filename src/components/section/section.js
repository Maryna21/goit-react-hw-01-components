import s from 'components/section/section.module.css';

function Section({ children }) {
  return <section className={s.section}>{children}</section>;
}

export default Section;
