import styles from './DarkChapter.module.css';

/** Capítulo oscuro. Las bandas de gradiente en los bordes hacen la transición (M10). */
export default function DarkChapter({ as: Tag = 'div', last = false, children, ...rest }) {
  return (
    <Tag className={`${styles.chapter} ${last ? styles.last : ''}`} data-atmosphere="dark" {...rest}>
      {children}
    </Tag>
  );
}
