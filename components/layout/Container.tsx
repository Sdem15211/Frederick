type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className }: Props) => {
  return (
    <div
      className={`lg:px-24 md:px-12 px-6 max-w-[1400px] mx-auto ${className}`}
    >
      {children}
    </div>
  );
};
