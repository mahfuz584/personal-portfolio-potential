import Image from "next/image";

const ProfileImg = ({
  src,
  className,
}: {
  src: string;
  className?: string;
}) => {
  return (
    <>
      <Image
        src={src}
        alt="hero"
        width={1000}
        height={1000}
        className={`size-full object-cover  ${className} mx-auto`}
      />
    </>
  );
};

export default ProfileImg;
