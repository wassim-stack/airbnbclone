import { liveData } from "../types/app";
import { getLive } from "../utils/api";
import LiveCard from "./LiveCard";

const Live = async () => {
  const liveData: liveData = await getLive();
  return (
    <section className="pt-6">
      <div className="container">
        <div className="flex space-x-3 overflow-scroll no-scrollbar p-3 -ml-3">
          {liveData.map((item, i) => (
            <LiveCard key={i} img={item.img} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Live;
