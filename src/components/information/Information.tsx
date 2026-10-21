import { useState } from "react";
import { Info, X } from "lucide-react";

import { Button } from "@/components";
import ModalInfo from "./ModalInfo";

type Props = {
  title: string;
  children: React.ReactNode;
}


const Information = ({ 
  title,
  children,
}: Props) => {
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
          <div className="mb-10 flex justify-between items-center">
            <h2 className="text-black/80">INFORMACIÓN</h2>

            <Button 
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <X 
                color="red"
                size={20}
              />
            </Button>
          </div>
          {children}
        </div>
        
      </ModalInfo>

    </>
  );
}

export default Information;