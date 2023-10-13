"use client";

import { useRouter } from "next/navigation";
import React from "react";

const DeleteBtn = ({ slug, id }) => {
  const router = useRouter();
  return (
    <button
      className="text-blue-500 hover:text-blue-700"
      onClick={async () => {
        const deleteItem = await fetch(
          `http://localhost:3000/api/${slug}/${id}`,
          {
            cache: "no-store",
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        const res = await deleteItem.json();
        router.refresh()
      }}
    >
      Delete
    </button>
  );
};

export default DeleteBtn;
