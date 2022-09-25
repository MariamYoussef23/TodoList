import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Filters({ updateFilter, uncheckAll, checkAll }) {
  return (
    <>
      <DropdownButton
        variant="outline-secondary"
        title="Filter Todos"
        id="input-group-dropdown-1"
      >
        <Dropdown.Item onClick={() => updateFilter("All")}>All</Dropdown.Item>
        <Dropdown.Item onClick={() => updateFilter("Completed")}>
          Completed
        </Dropdown.Item>
        <Dropdown.Item onClick={() => updateFilter("Incomplete")}>
          Incomplete
        </Dropdown.Item>
        <Dropdown.Item onClick={uncheckAll}>
          Mark all as Incomplete{" "}
        </Dropdown.Item>
        <Dropdown.Item onClick={checkAll}>Mark all as Completed </Dropdown.Item>
      </DropdownButton>
    </>
  );
}

export default Filters;
