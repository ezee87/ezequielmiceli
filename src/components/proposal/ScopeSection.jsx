import Section from '../ui/Section.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import { Fade } from '../ui/Reveal.jsx';
import styles from './ScopeSection.module.css';

/** Alcance: movimiento mínimo, lectura rápida. Solo se muestran las áreas incluidas. */
export default function ScopeSection({ data }) {
  const { eyebrow, title, lead, areas } = data.scope;
  const included = areas.filter((a) => a.enabled !== false);

  const renderItem = (item) => <li key={item}>{item}</li>;

  return (
    <Section id="alcance" labelledBy="alcance-title">
      <SectionHeader id="alcance-title" eyebrow={eyebrow} title={title} lead={lead} className={styles.header} />

      <div className={styles.areas}>
        {included.map((area) => (
          <Fade className={styles.area} key={area.id ?? area.name}>
            <h3 className={styles.name}>{area.name}</h3>
            {area.layout === 'split' ? (
              <div className={`${styles.items} ${styles.publicationItems}`}>
                <ul>{area.items.slice(0, area.splitAt ?? Math.ceil(area.items.length / 2)).map(renderItem)}</ul>
                <ul>{area.items.slice(area.splitAt ?? Math.ceil(area.items.length / 2)).map(renderItem)}</ul>
              </div>
            ) : (
              <ul className={styles.items}>{area.items.map(renderItem)}</ul>
            )}
          </Fade>
        ))}
      </div>
    </Section>
  );
}
