import clsx from "clsx";
import { ChecklistItem } from "../data-access/types";
import s from "./item.module.css";

// $3 Props like these shouldn't be here
interface Props {
  item: ChecklistItem;
}

export function ChecklistItem({
  className,
  item,
}: { className: string } & Props) {
  return (
    <div className={clsx(className)}>
      <h1 className={s.title}>{item.title}</h1>
    </div>
  );
}
