import React from "react";

export type LineItem = {
  title: string;
  id: string;
};

export interface CartProps {
  items: LineItem[];
  ItemComponent: React.FC<{ item: LineItem; className: string }>;
}
