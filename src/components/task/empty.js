import React from 'react';

export const EmptyTask = () => {
  return (
    <div className="w-full relative flex flex-col items-start px-4 py-2 bg-gray98 rounded border border-gray88 mb-3">
      <p className="m-0 text-sm leading-6 text-grayDark">No Task</p>
    </div>
  );
};