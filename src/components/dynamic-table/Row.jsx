import React from "react";
import { Link } from "react-router-dom";

const Row = ({ columns, data }) => {
  return (
    <tr className="bg-white border-b  dark:bg-secondary-dark-bg dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      {columns.map((col, index) => (
        <td className="px-6 py-4" key={index}>
          {typeof data[col.accessor] == "boolean" ? (
            data[col.accessor] === true ? (
              <span className="text-green-600">completed</span>
            ) : (
              <span className="text-red-600">not completed</span>
            )
          ) : (
            data[col.accessor]
          )}
        </td>
      ))}
      <td className="px-6 py-4">
        <a
          href={`/#${data.id}`}
          type="button"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </a>
        <a
          href={`/#${data.id}`}
          type="button"
          className="font-medium text-red-600 dark:text-red-400 hover:underline mr-1"
        >
          delete
        </a>
      </td>
    </tr>
  );
};

export default Row;
