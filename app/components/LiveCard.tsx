import Image from "next/image";
import { LiveItem } from "../types/app";

type LiveProps = LiveItem;

const LiveCard = ({ title, img }: LiveProps) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={img} alt="liveCard-Img" fill className="rounded-lg" />
      </div>
      <h3 className="text-xl mt-2">{title}</h3>
    </div>
  );
};

export default LiveCard;
