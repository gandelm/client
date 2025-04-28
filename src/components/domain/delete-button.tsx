'use client';

import React from "react";
import { Button } from "../ui/button";

type DeleteButtonProps = {
  onDeleteAction: () => Promise<void>;
  label?: string;
};

export const DeleteButton: React.FC<DeleteButtonProps> = ({ onDeleteAction, label = "削除" }) => {
  const handleClick = async () => {
    if (!confirm('本当に削除しますか？')) {
      return;
    }

    try {
      await onDeleteAction();
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
