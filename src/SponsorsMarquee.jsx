import React from 'react';
import './SponsorsMarquee.css';

/**
 * SponsorsMarquee — an infinitely scrolling sponsor banner.
 *
 * Props:
 *  - sponsors:     array of strings ("Acme Co") or objects { name, logo?, url? }
 *  - scrollSpeed:  seconds for one full loop (lower = faster). If omitted, it scales with list length.
 *  - title:        optional heading above the banner (pass "" to hide)
 *  - direction:    "left" | "right"
 *  - pauseOnHover: boolean (default true)
 */
const SponsorsMarquee = ({
  sponsors = [],
  scrollSpeed,
  title = '',
  direction = 'left',
  pauseOnHover = true,
}) => {
  if (!sponsors.length) return null;

  const items = sponsors.map((s) => (typeof s === 'string' ? { name: s } : s));

  // Repeat short lists so each half of the track is wider than the screen,
  // which keeps the loop seamless.
  let base = items;
  while (base.length < 10) base = base.concat(items);

  const speed =
    Number(scrollSpeed) > 0
      ? Number(scrollSpeed)
      : Math.max(20, base.length * 3.5);

  const renderItem = (s, i, hidden) => {
    const content = s.logo ? (
      <img className="sm-logo" src={s.logo} alt={hidden ? '' : s.name} />
    ) : (
      <span className="sm-name">{s.name}</span>
    );

    return (
      <li
        className="sm-item"
        key={`${hidden ? 'b' : 'a'}-${i}`}
        aria-hidden={hidden || undefined}
      >
        {s.url ? (
          <a
            className="sm-card"
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={hidden ? -1 : undefined}
          >
            {content}
          </a>
        ) : (
          <span className="sm-card">{content}</span>
        )}
        <span className="sm-sep" aria-hidden="true">
          ✦
        </span>
      </li>
    );
  };

  return (
    <section className="sm-wrapper" aria-label={title || 'Sponsors'}>
      {title && <h2 className="sm-title">{title}</h2>}
      <div
        className={`sm-viewport ${pauseOnHover ? 'sm-pausable' : ''}`}
        style={{
          '--sm-duration': `${speed}s`,
          '--sm-direction': direction === 'right' ? 'reverse' : 'normal',
        }}
      >
        <ul className="sm-track">
          {base.map((s, i) => renderItem(s, i, i >= items.length))}
          {base.map((s, i) => renderItem(s, i + base.length, true))}
        </ul>
      </div>
    </section>
  );
};

export default SponsorsMarquee;
