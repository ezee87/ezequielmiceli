import styles from './Section.module.css';

export default function Section({ id, labelledBy, children, className = '', innerClassName = '', ...rest }) {
  return (
    <section id={id} className={`${styles.section} ${className}`} aria-labelledby={labelledBy} {...rest}>
      <div className={`${styles.inner} ${innerClassName}`}>{children}</div>
    </section>
  );
}
