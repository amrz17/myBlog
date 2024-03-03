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
        <div className="flex items-center justify-center py-4">
          <Card className="w-[90%]">
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
