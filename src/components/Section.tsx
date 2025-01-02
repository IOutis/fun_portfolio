import { Component, For } from 'solid-js';
import Modal from './Modal';

interface ItemData {
  name: string;
  proficiency: string;
  description?: string;
}

interface SectionProps {
  data: ItemData[];
  isOpen: boolean;
  onClose: () => void;
  title: string;
  isProfile: boolean;
}

const Section: Component<SectionProps> = (props) => {
  return (
    <Modal 
      isOpen={props.isOpen} 
      onClose={props.onClose}
      title={props.title}
    >
      {props.isProfile ? (
        <div class="flex flex-col md:flex-row gap-6">
          <div class="md:w-1/3 flex-shrink-0">
            <img
              src="/api/placeholder/400/320"
              alt="Profile"
              class="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>
          
          <div class="md:w-2/3 space-y-4 min-h-0">
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <h3 class="text-2xl font-semibold text-gray-800 mb-4 font-mono">
                Profile Details
              </h3>
              
              <div class="space-y-3">
                <div class="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span class="font-medium text-gray-700 min-w-[120px]">Name:</span>
                  <span class="text-gray-600">Md. Mushtaq Hussain</span>
                </div>
                
                <div class="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span class="font-medium text-gray-700 min-w-[120px]">Role:</span>
                  <span class="text-gray-600">Web Developer</span>
                </div>
                
                <div class="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span class="font-medium text-gray-700 min-w-[120px]">Education:</span>
                  <span class="text-gray-600">BE in Information Technology, Vasavi College of Engineering</span>
                </div>
                
                <div class="flex flex-col sm:flex-row sm:items-start gap-2">
                  <span class="font-medium text-gray-700 min-w-[120px]">Bio:</span>
                  <p class="text-gray-600">
                    Web Developer with expertise in React.js, Next.js, and modern web technologies.
                    Experienced in building responsive applications using Tailwind CSS and various frameworks.
                    Currently pursuing Bachelor's in Information Technology with a CGPA of 8.66/10.
                  </p>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <h4 class="text-xl font-semibold text-gray-800 mb-3 font-mono">
                Contact Information
              </h4>
              
              <div class="space-y-3">
                <div class="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span class="font-medium text-gray-700 min-w-[120px]">Email:</span>
                  <span class="text-gray-600">mohdmushtaq251@gmail.com</span>
                </div>
                
                <div class="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span class="font-medium text-gray-700 min-w-[120px]">Phone:</span>
                  <span class="text-gray-600">+91-81259-42478</span>
                </div>

                <div class="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span class="font-medium text-gray-700 min-w-[120px]">Links:</span>
                  <div class="flex gap-3">
                    <a href="https://github.com/IOutis" class="text-blue-600 hover:text-blue-800">GitHub</a>
                    <a href="https://www.linkedin.com/in/md-mushtaq-hussain/" class="text-blue-600 hover:text-blue-800">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <For each={props.data}>
            {(item) => (
              <div class="rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
                <div class="space-y-4">
                  <h3 class="text-xl font-semibold text-gray-800 font-mono">
                    {item.name}
                  </h3>
                  
                  <div class="flex items-center">
                    <span class="text-sm font-medium font-mono text-gray-600">Proficiency:</span>
                    <span class="ml-2 px-2 py-1 bg-blue-100 font-mono text-blue-800 rounded-full text-sm">
                      {item.proficiency}
                    </span>
                  </div>
                  
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
      )}
    </Modal>
  );
};

export default Section;