import React from 'react';
import { CheckListIcon } from '../../assets/icons/checklist'

export const Progress = ({ width }) => {
  const precentage = width === null ? 0 : width
  return (
    <div className="w-full flex flex-row items-center gap-2">
      <div className="w-full h-4 bg-gray93 rounded-full">
        <div className={`h-4 ${precentage !== 100 ? "bg-green" : "bg-green-dark"} rounded-full`} style={{ width: precentage + '%' }}></div>
      </div>
      {
        precentage == 100
        ? <CheckListIcon />
        : <span className="font-normal text-xs leading-4 text-grayDark">{precentage == null ? 0 : precentage}%</span>
      }
    </div>
  );
};