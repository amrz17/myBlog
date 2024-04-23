import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface Props {
  imgMk: string;
  title: string;
  to: string;
}

export const CardLayout = (props: Props) => {
  return (
    <>
      <Link to={props.to}>
        <div className="flex justify-center py-2 ">
          <Card className="flex justify-center items-center flex-col w-[350px] lg:w-[380px] hover:shadow-blue-800 rounded-xl">
            <CardHeader>
              <img
                src={props.imgMk}
                className="w-[490px] h-[158px] lg:h-[220px]"
              />
            </CardHeader>
            <CardTitle>
              <p className="pb-4 text-center text-gray-800">{props.title}</p>
            </CardTitle>
          </Card>
        </div>
      </Link>
    </>
  );
};
