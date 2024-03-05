"use client";

import { useQueryClient } from "@tanstack/react-query";

function RefreshButton() {
  const queryClient = useQueryClient();

  const handleClickRefresh = () => {
    queryClient.invalidateQueries({ queryKey: ["products"], exact: true });
  };

  return (
    <button onClick={handleClickRefresh} className="button">
      새로고침
    </button>
  );
}

export default RefreshButton;
