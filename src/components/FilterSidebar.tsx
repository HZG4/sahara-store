import React from 'react'

function FilterSidebar() {
  return (
    <aside className="w-80 border-r border-gray-200 p-6">
      <h2 className="text-black text-2xl font-bold leading-tight tracking-tight mb-6">Filters</h2>
      <div className="space-y-6">
        {/* Size Filter */}
        <div>
          <h3 className="text-black text-lg font-bold leading-tight tracking-tight mb-4">Size</h3>
          <div className="flex flex-wrap gap-2">
            {[5, 6, 7, 8, 9, 10, 11, 12].map((size) => (
              <label 
                key={size}
                className="text-sm font-medium leading-normal flex items-center justify-center rounded-md border border-gray-300 px-4 h-10 text-black has-[:checked]:bg-blue-600 has-[:checked]:text-white has-[:checked]:border-blue-600 relative cursor-pointer transition-colors"
              >
                {size}
                <input className="invisible absolute" name="size" type="radio" />
              </label>
            ))}
          </div>
        </div>

        {/* Color Filter */}
        <div>
          <h3 className="text-black text-lg font-bold leading-tight tracking-tight mb-4">Color</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'White', color: 'rgb(255, 255, 255)' },
              { name: 'Black', color: 'rgb(0, 0, 0)' },
              { name: 'Red', color: 'rgb(255, 0, 0)' },
              { name: 'Green', color: 'rgb(0, 255, 0)' },
              { name: 'Blue', color: 'rgb(0, 0, 255)' },
              { name: 'Yellow', color: 'rgb(255, 255, 0)' },
              { name: 'Magenta', color: 'rgb(255, 0, 255)' },
              { name: 'Cyan', color: 'rgb(0, 255, 255)' }
            ].map((color) => (
              <label 
                key={color.name}
                className="size-9 rounded-full border border-gray-300 ring-offset-2 ring-blue-600 has-[:checked]:ring-2 cursor-pointer transition-all" 
                style={{ backgroundColor: color.color }}
              >
                <input className="invisible" name="color" type="radio" />
              </label>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div>
          <h3 className="text-black text-lg font-bold leading-tight tracking-tight mb-4">Price</h3>
          <div className="relative w-full">
            <input 
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600" 
              max="500" 
              min="0" 
              type="range" 
              defaultValue="250"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>$0</span>
              <span>$500</span>
            </div>
          </div>
        </div>

        {/* Brand Filter */}
        <div>
          <h3 className="text-black text-lg font-bold leading-tight tracking-tight mb-4">Brand</h3>
          <div className="flex flex-col gap-2">
            {['Brand A', 'Brand B', 'Brand C', 'Brand D'].map((brand) => (
              <label key={brand} className="flex items-center gap-2 text-base text-gray-700 cursor-pointer">
                <input className="form-checkbox rounded border-gray-400 text-blue-600 focus:ring-blue-500" type="checkbox" />
                {brand}
              </label>
            ))}
          </div>
        </div>

        {/* Style Filter */}
        <div>
          <h3 className="text-black text-lg font-bold leading-tight tracking-tight mb-4">Style</h3>
          <div className="flex flex-col gap-2">
            {['Running', 'Training', 'Casual', 'Formal'].map((style) => (
              <label key={style} className="flex items-center gap-2 text-base text-gray-700 cursor-pointer">
                <input className="form-checkbox rounded border-gray-400 text-blue-600 focus:ring-blue-500" type="checkbox" />
                {style}
              </label>
            ))}
          </div>
        </div>

        {/* Material Filter */}
        <div>
          <h3 className="text-black text-lg font-bold leading-tight tracking-tight mb-4">Material</h3>
          <div className="flex flex-col gap-2">
            {['Leather', 'Synthetic', 'Mesh', 'Canvas'].map((material) => (
              <label key={material} className="flex items-center gap-2 text-base text-gray-700 cursor-pointer">
                <input className="form-checkbox rounded border-gray-400 text-blue-600 focus:ring-blue-500" type="checkbox" />
                {material}
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default FilterSidebar
