import type { ReactElement } from "react";

type ContactItemType = {
  text: string;
  icon: ReactElement;
  classname?: string;
};

export const ContactItem = ({ text, icon, classname }: ContactItemType) => (
  <div className={`flex-center items-center gap-3 ${classname}`}>
    {icon}
    <p>{text}</p>
  </div>
);
