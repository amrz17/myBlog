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
        <div className="flex justify-center py-2 lg:w-[600px]">
          <Card className="w-[90%] hover:shadow-blue-800 rounded-xl">
            <CardHeader>
              <img src={props.imgMk} />
            </CardHeader>
            <CardTitle>
              <p className="text-center pb-4">{props.title}</p>
            </CardTitle>
          </Card>
        </div>
      </Link>
    </>
  );
};
