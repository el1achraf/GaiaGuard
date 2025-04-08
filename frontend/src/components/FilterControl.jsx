import { useState } from 'react';
import Draggable from 'react-draggable';

const FilterControl = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    tornado: true,
    earthquake: true,
    volcano: true
  });

  const handleFilterChange = (type) => {
    const newFilters = { ...filters, [type]: !filters[type] };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <Draggable handle=".handle">
      <div className="h-[25em] absolute top-20 left-10 z-[1000] bg-[#020C1B]/90 p-4 rounded-lg shadow-xl border border-gray-700 min-w-[200px]">
        <div className=" mb-2 text-white/80 text-sm font-medium flex justify-center w-full bg-slate-500 h-[2em] items-center ">
          <span className='handle cursor-move uppercase'>GaiaGuard</span>
          
        </div>
        
        <div className="space-y-2 h-full flex flex-col justify-between ">
          <label className="flex items-center space-x-2 text-white cursor-pointer">
            <input
              type="checkbox"
              checked={filters.seisme}
              onChange={() => handleFilterChange('tornado')}
              className="form-checkbox h-4 w-4 text-blue-500"
            />
            <span>Séismes</span>
          </label>

          <label className="flex items-center space-x-2 text-white cursor-pointer">
            <input
              type="checkbox"
              checked={filters.inondation}
              onChange={() => handleFilterChange('earthquake')}
              className="form-checkbox h-4 w-4 text-blue-500"
            />
            <span>Inondations</span>
          </label>

          <label className="flex items-center space-x-2 text-white cursor-pointer">
            <input
              type="checkbox"
              checked={filters.feu}
              onChange={() => handleFilterChange('volcano')}
              className="form-checkbox h-4 w-4 text-blue-500"
            />
            <span>Feux</span>
          </label>
        </div>
      </div>
    </Draggable>
  );
};

export default FilterControl; 