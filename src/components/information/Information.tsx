import { useState } from "react";
import { Info } from "lucide-react";

import { Button } from "@/components";
import ModalInfo from "./ModalInfo";

type Props = {
  title: string;
}


const Information = ({ title }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        className="cursor-pointer p-1"
        title={title}
        onClick={() => setIsOpen(true)}
      >
        <Info 
          size={18}
          className="text-yellow-500"
        />
      </Button>

      <ModalInfo 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div>
          <h1>HOLA</h1>
        </div>
      </ModalInfo>

    </>
  );
}

export default Information;