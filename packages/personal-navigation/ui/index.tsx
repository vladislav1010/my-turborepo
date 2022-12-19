import * as React from "react";
import s from "./index.module.css";
import { Cart } from "cart";
import clsx from "clsx";
import { ChecklistItem } from "checklist";

/**
 * $1
 * CSS: Фиксированной ширины.
 */
export function PersonalNavigation({ className }: { className: string }) {
  return (
    <div className={clsx(className, s.root)}>
      {/* $4 В этом мне помогают явные зависимости / знание, какие динамические зависимости могут быть. Например, в типах ответа серверного API есть тип, подразумевающий альтернативу ChecklistItem как ItemComponent. Другой вопрос, что мне нужно читать больше легко обнаруживаемого и понятного (Discoverability and understanding) кода. */}
      <Cart className={""} items={[]} ItemComponent={ChecklistItem} />
    </div>
  );
}
