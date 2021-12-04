import React from 'react';
import { editPrintList } from '../../APIs/session';

export default function EditTable({ isEdit, editModeToggle, newData }) {
  const { id } = newData;
  return (
    <td>
      {isEdit ? (
        <input
          type="button"
          value="Save"
          onClick={() => {
            editModeToggle();
            if (newData) editPrintList(id, newData);
          }}></input>
      ) : (
        <input type="button" value="Edit" onClick={editModeToggle}></input>
      )}
    </td>
  );
}
