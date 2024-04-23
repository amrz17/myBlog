import { aMer } from "@/assets/images";

interface Prop {
  img: string;
  title: string;
  date: string;
  article: React.ReactNode;
}

const Body = (props: Prop) => {
  return (
    <div className="flex justify-center">
      <div
        className="flex flex-col items-center  
        w-[95%] lg:w-[60%] xl:w-[50%] my-4 gap-2"
      >
        <h1 className="text-center text-4xl font-bold">{props.title}</h1>
        <div>
          <img src={props.img} className="rounded-xl md:h-[426px]" />
        </div>
        <div
          className="flex justify-between w-full p-2 
          font-bold underline underline-offset-4"
        >
          <div className="flex gap-2">
            <img src={aMer} width={35} className="h-[35px] rounded-full" />
            <div>
              <h3 className="flex items-center h-full">Muhammad Amer</h3>
            </div>
          </div>
          <div>
            <span className="flex items-center h-full">{props.date}</span>
          </div>
        </div>
        <div>
          <div className="text-lg text-justify p-1">{props.article}</div>
        </div>
      </div>
    </div>
  );
};

export default Body;
