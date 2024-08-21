type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className }: Props) => {
  return <div className={`lg:px-24 px-12 ${className}`}>{children}</div>;
};
