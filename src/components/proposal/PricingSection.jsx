import Section from '../ui/Section.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import { Fade, RevealChars } from '../ui/Reveal.jsx';
import styles from './PricingSection.module.css';

/** Inversión: un único precio. La tipografía es el evento visual. */
export default function PricingSection({ data }) {
  const { eyebrow, title, currency, amount, label, summary, includes = [], timeline, timelineDetail, payment, paymentDetails = [], note, validity, extras = [], labels = {} } = data.pricing;

  return (
    <Section id="inversion" labelledBy="inversion-title" className={styles.section}>
      <SectionHeader id="inversion-title" eyebrow={eyebrow} title={title} />

      <div className={styles.main}>
        <div className={styles.price}>
          <p className={styles.label}>{label}</p>
          {!data.pricing.hideAmount && <p className={styles.amount}>
            <span className={styles.currency}>{currency}</span>
            <RevealChars className={styles.figure}>{amount}</RevealChars>
          </p>}
          <Fade as="p" className={styles.summary} delay={0.3} style={data.pricing.summaryWidth ? { maxWidth: data.pricing.summaryWidth } : undefined}>
            {summary}
          </Fade>
          {includes.length > 0 && <div className={styles.includes}>
            <h3>{labels.includes ?? 'Incluye'}</h3>
            <ul>{includes.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>}
        </div>

        <dl className={styles.terms}>
          <Fade>
            <dt>{labels.timeline ?? 'Plazo'}</dt>
            <dd>{timeline}{timelineDetail && <span>{timelineDetail}</span>}</dd>
          </Fade>
          <Fade delay={0.06}>
            <dt>{labels.payment ?? 'Forma de pago'}</dt>
            <dd>{payment}{paymentDetails.map((detail) => <span key={detail}>{detail}</span>)}</dd>
          </Fade>
          {validity && (
            <Fade delay={0.12}>
              <dt>{labels.validity ?? 'Validez'}</dt>
              <dd>{validity}</dd>
            </Fade>
          )}
        </dl>
      </div>

      {extras.length > 0 && (
        <div className={styles.extras}>
          <h3 className={styles.extrasTitle}>{labels.extras ?? 'Extras opcionales'}</h3>
          <ul>
            {extras.map((extra) => (
              <Fade as="li" className={styles.extra} key={extra.label}>
                <div>
                  <p className={styles.extraLabel}>{extra.label}</p>
                  {extra.detail && <p className={styles.extraDetail}>{extra.detail}</p>}
                </div>
                <p className={styles.extraPrice}>{extra.price}</p>
              </Fade>
            ))}
          </ul>
        </div>
      )}
      {note && <p className={styles.note}>{note}</p>}
    </Section>
  );
}
