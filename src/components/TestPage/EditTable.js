import React from 'react';

export default function EditTable({ isEdit, editModeToggle, newData, editData }) {
    const { id } = newData;
    return (
      <td>
        {isEdit ? (
          <input
            type="button"
            value="Save"
            onClick={() => {
              editModeToggle();
              if (newData) editData(id, newData);
            }}></input>
        ) : (
          <input type="button" value="Edit" onClick={editModeToggle}></input>
        )}
      </td>
    );
  }