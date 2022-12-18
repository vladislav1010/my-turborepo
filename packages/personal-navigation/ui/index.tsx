import * as React from "react";
import s from "./index.module.css";
import { Cart } from "cart";
import clsx from "clsx";
import { ChecklistItem } from "checklist";

export function PersonalNavigation({ className }: { className: string }) {
  return (
    <div className={clsx(className, s.root)}>
      <Cart className={""} items={[]} ItemComponent={ChecklistItem} />
    </div>
  );
}
