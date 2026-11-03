import styles from './styles.module.css';

type DefaultButtonProps = React.ComponentProps<'button'> & {
  color?: 'primary' | 'secondary';
  icon?: React.ReactNode;
};

export function DefaultButton({
  color = 'primary',
  icon,
  ...props
}: DefaultButtonProps) {
  return (
    <button className={`${styles.button} ${styles[color]}`} {...props}>
      {icon}
    </button>
  );
}
