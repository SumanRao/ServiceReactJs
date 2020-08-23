import React from "react";

const ListService = (props) => {
  const {
    items,
    textProperty,
    valueProperty,
    selectedItem,
    onItemSelect,
  } = props;

  return (
    <React.Fragment>
      {items.length > 0 && (
        <ul className="list-group">
          {items.map((item) => (
            <li
              className={
                item === selectedItem
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => onItemSelect(item)}
              key={item[valueProperty]}
            >
              {item.attributes[textProperty]}
            </li>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
};

ListService.defaultProps = {
  textProperty: "name",
  valueProperty: "id",
};

export default ListService;
