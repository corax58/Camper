import { useState } from "react";

const Test = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return <div className="w-full h-screen grid place-content-center"></div>;
};

export default Test;
