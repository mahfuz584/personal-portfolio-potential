import { cn } from "@/lib/utils";
type TBtnProps = {
  className?: string;
  children: React.ReactNode;
};
const CustomBtn: React.FC<TBtnProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "lg:w-[188px] sm:w-[150px] w-[120px] lg:h-[52px] sm:h-[40px] h-[30px] text-center bg-brandColor text-white lg:text-text-lg sm:text-text-md text-text-sm flex items-center justify-center rounded-md",
        className
      )}
    >
      {children}
    </div>
  );
};

export default CustomBtn;
