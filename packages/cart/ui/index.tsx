import clsx from "clsx";
import s from "./cart.module.css";
import React from "react";
import { CartProps } from "../app/cart";

// $1 ItemComponent may dynamically be resolved to ChecklistItem. For example, this information may come from server API.
/**
 * $1
 * CSS: Столбцы обладают фиксированной шириной, или равной ширине `ItemComponent`, что больше.
 */
export function Cart({
  className,
  ItemComponent,
  items,
}: { className: string } & CartProps) {
  return (
    // $2 `display: grid; grid-template-columns: repeat(auto-fit, …)` may arrange it's children in different number of rows, depending on grid items' width.
    <div className={clsx(className, s.root)}>
      {items.map((item) => (
        <div className={s.lineItem} key={item.id}>
          {/* $1 It may overflow `.lineItem`, or `.lineItem` - `.root`, depending on `.root` `grid-template-columns`. And even horizontal overflow of viewport may appear. */}
          <ItemComponent item={item} className={s.lineItemComponent} />
        </div>
      ))}
    </div>
  );
}
