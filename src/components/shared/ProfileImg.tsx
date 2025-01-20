import Image from "next/image";

const ProfileImg = ({ src }: { src: string }) => {
  return (
    <div>
      <Image
        src={src}
        alt="hero"
        width={1000}
        height={1000}
        className="size-full object-cover ml-[.65rem]"
      />
    </div>
  );
};

export default ProfileImg;
