import { content1 } from "@/const";
import { dataMining } from "../assets/images";

const Body = () => {
  return (
    <main className="flex justify-center">
      {content1.map((content) => {
        return (
          <div
            key={content.id}
            className="flex flex-col items-center h-screen  
        w-[95%] lg:w-[75%] my-12 gap-2"
          >
            <div>
              <h1 className="text-center text-4xl font-bold">
                {content.title}
              </h1>
            </div>
            <div>
              <img src={dataMining} />
            </div>
            <div>
              <p className="text-lg">{content.article}</p>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Body;
