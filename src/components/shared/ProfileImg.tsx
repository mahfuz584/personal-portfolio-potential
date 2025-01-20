import Image from "next/image";

const ProfileImg = ({
  src,
  className,
}: {
  src: string;
  className?: string;
}) => {
  return (
    <div>
      <Image
        src={src}
        alt="hero"
        width={1000}
        height={1000}
        className={`size-full object-cover  ${className}`}
      />
    </div>
  );
};

export default ProfileImg;
