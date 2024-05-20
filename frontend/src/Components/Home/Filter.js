import React, { useEffect, useState } from "react";
import FilterModal from "./FilterModal";
import { useDispatch } from "react-redux";
import { propertyAction } from "../../Store/Property/property-slice";
import { getAllProperties } from "../../Store/Property/property-action";
const Filter = () => {
  //State for conrolling modal visability
    const [isModalOpen, setIsModalOpen] = useState(false);
  //State for storing selected filters
  const [selectedFilters, setSelectedFilters] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(propertyAction.updateSearchParams(selectedFilters));
    dispatch(getAllProperties());
  }, [selectedFilters, dispatch]);

  //Function to handle opening the modal/popupWindow
  const handleOpenModal =() => {
    setIsModalOpen(true); // set isModalOpen to true to open the modal
  };

  //Function to handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false); // sets isModalOpen to false to close the modal

  }

  //Function to handle changes in filters
  const handleFilterChange = (filterName, value) => {
    //Update the selected filters with the new value
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  return (
    <>
      {/*Click event to open the modal */}
     <span class="material-symbols-outlined filter" onClick={handleOpenModal}>
      tune
     </span>
     {isModalOpen && (
      <FilterModal
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
        onClose={handleCloseModal}
      />
     )}
    </>
  );
};

export default Filter;