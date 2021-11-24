import styles from './loading.module.scss';

const Loading = () => (
  <div className="mt-16 flex justify-center">
    <div className={styles.balls}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export { Loading };
