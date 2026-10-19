import { Info } from "lucide-react";

import { Button } from "@/components";

type Props = {
  title: string;
}

const ModalInfo = ({ title }: Props) => {

  return (

    <Button
      className="cursor-pointer p-1"
      title={title}
    >
      <Info 
        size={18}
        className="text-yellow-500"
      />
    </Button>
  );
}

export default ModalInfo;