import React, { createContext, useContext, useState } from "react";

type CategoryContextType = {
  category: string;
  setCategory: (value: string) => void;
};

const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

export const useCategory = () => useContext(CategoryContext);

type Props = {
  children: React.ReactNode;
};
export const CategoryProvider = ({ children }: Props) => {
  const [category, setCategory] = useState("");

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
