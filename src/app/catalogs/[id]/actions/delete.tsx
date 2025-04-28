'use client';

import { Button } from "@/components/ui/button";
import APIClient from "@/lib/api";
import React from "react";
import { useRouter } from "next/navigation";

type DeleteCatalogButtonProps = {
  id: string;
  label?: string;
};

export const DeleteCatalogButton: React.FC<DeleteCatalogButtonProps> = ({ id, label = "削除" }) => {
  const router = useRouter();
  const handleClick = async () => {
    try {
      await new APIClient().Catalog().Delete(id);
      router.push("/catalogs");
    } catch (error) {
      console.error('削除に失敗しました', error);
      alert('削除に失敗しました');
    }
  };

  return (
    <Button variant="destructive" onClick={handleClick}>
      {label}
    </Button>
  );
};
