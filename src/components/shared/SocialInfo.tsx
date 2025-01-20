import { socialInfo } from "@/data/socialInfo";
import Link from "next/link";

const SocialInfo = () => {
  return (
    <div className="flex justify-center items-center gap-x-4 mt-5">
      {socialInfo?.map(({ icon: Icon, url }, idx) => {
        return (
          <div key={idx}>
            <Link href={url} target="_blank">
              <Icon className="w-8 h-8 dark:text-white " />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SocialInfo;
