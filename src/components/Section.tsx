// Section.tsx
import { Component, For } from 'solid-js';

interface ItemData {
  name: string;
  proficiency: string;
  description?: string;
}

interface SectionProps {
  data: ItemData[];
}

const Section: Component<SectionProps> = (props) => {
  console.log("Hello")
  return (
    <div class="absolute grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full h-full bg-slate-800 z-[2000] opacity-[96%]">
      <For each={props.data}>
        {(item) => (
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 w-fit h-fit">
            <div class="space-y-4">
              {/* Name */}
              <h3 class="text-xl font-semibold text-gray-800">
                {item.name}
              </h3>
              
              {/* Proficiency */}
              <div class="flex items-center">
                <span class="text-sm font-medium text-gray-600">Proficiency:</span>
                <span class="ml-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {item.proficiency}
                </span>
              </div>
              
              {/* Description (Optional) */}
              {item.description && (
                <p class="text-gray-600 text-sm">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        )}
      </For>
    </div>
  );
};

export default Section;