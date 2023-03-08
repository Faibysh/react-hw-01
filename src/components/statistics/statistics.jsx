import React from 'react';
import styles from './statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = (
  {
stats 
  }) => {
  return (
<section className={styles.statistics}>
  <h2 className={styles.title}>Upload stats</h2>

    <ul className={styles.statList}>
       {stats.map(stat => (
         <li className={styles.item}>
         <span className={styles.label}>{stat.label} </span>
      <span className={styles.percentage}>{stat.percentage} %</span>
         </li>
      ))}
    </ul>
</section>
)
}

Statistics.propTypes = {
stats: PropTypes.arrayOf(PropTypes.object)
}

export default Statistics