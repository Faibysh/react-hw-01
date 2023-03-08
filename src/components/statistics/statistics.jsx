import React from 'react';
import styles from './statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title = undefined, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles['stat-list']}>
        {stats.map(stat => (
          <li key={stat.id} className={styles.item}>
            <span className={styles.label}>{stat.label} </span>
            <span className={styles.percentage}>{stat.percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object),
};

export default Statistics;
