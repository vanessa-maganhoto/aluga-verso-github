import './styles.scss';

export function AnimatedButton({ lit, width, children }) {
  return (
    <button className={`animated-button ${lit && 'lit'}`} style={{ width }}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      { children }
    </button>
  );
}