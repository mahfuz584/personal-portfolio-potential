import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "w-full mx-auto 2xl:max-w-[75%] lg:max-w-[92.5%] max-w-[95%]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
