import { aMer } from "@/assets/images";

interface Prop {
  img: string;
  title: string;
  article: React.ReactNode;
}

const Body = (props: Prop) => {
  return (
    <main className="flex justify-center">
      <div
        className="flex flex-col items-center  
        w-[95%] lg:w-[75%] my-4 gap-2"
      >
        <h1 className="text-center text-4xl font-bold">{props.title}</h1>
        <div></div>
        <div>
          <img src={props.img} className="" />
        </div>
        <div
          className="flex justify-between w-full p-2 
          font-bold border border-b-black"
        >
          <div className="flex gap-2">
            <img src={aMer} width={35} className="h-[35px] rounded-full" />
            <div>
              <h3 className="flex items-center h-full">Muhammad Amer</h3>
            </div>
          </div>
          <div>
            <span className="flex items-center h-full">04 Maret 2024</span>
          </div>
        </div>
        <div>
          <p className="text-lg text-justify p-1">{props.article}</p>
        </div>
      </div>
    </main>
  );
};

export default Body;
