import { Component, For } from 'solid-js';
import Modal from './Modal';

interface ItemData {
  name: string;
  proficiency: string;
  description?: string;
  // Additional fields for projects
  techStack?: string[];
  features?: string[];
  duration?: string;
  githubLink?: string;
  liveDemo?: string;
}

interface SectionProps {
  data: ItemData[];
  isOpen: boolean;
  onClose: () => void;
  title: string;
  isProfile: boolean;
  isProject:boolean;
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
              src="M.jpeg"
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
                  <span class="text-gray-600">Mohammed Mushtaq Hussain</span>
                </div>
                
                <div class="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span class="font-medium text-gray-700 min-w-[120px]">Current Status:</span>
                  <span class="text-gray-600">Information Technology Undergraduate</span>
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
      ) : props.isProject ? (
        // New Project View
        <div class="grid grid-cols-1 gap-6">
          <For each={props.data}>
            {(project) => (
              <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Project Header */}
                <div class="bg-gray-50 p-6 border-b border-gray-200">
                  <div class="flex justify-between items-start">
                    <h3 class="text-2xl font-semibold text-gray-800 font-mono">
                      {project.name}
                    </h3>
                    <div class="flex gap-3">
                      {project.githubLink && (
                        <a 
                          href={project.githubLink}
                          class="text-gray-600 hover:text-gray-900 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span class="text-sm font-medium">GitHub</span>
                        </a>
                      )}
                      {project.liveDemo && (
                        <a 
                          href={project.liveDemo}
                          class="text-blue-600 hover:text-blue-800 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span class="text-sm font-medium">Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                  {project.duration && (
                    <p class="text-sm text-gray-600 mt-2 font-mono">
                      Duration: {project.duration}
                    </p>
                  )}
                </div>

                {/* Project Content */}
                <div class="p-6 space-y-6">
                  {/* Description */}
                  <div>
                    <h4 class="text-lg font-semibold text-gray-800 mb-3 font-mono">
                      Description
                    </h4>
                    <p class="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  {project.techStack && (
                    <div>
                      <h4 class="text-lg font-semibold text-gray-800 mb-3 font-mono">
                        Tech Stack
                      </h4>
                      <div class="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-mono">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Features */}
                  {project.features && (
                    <div>
                      <h4 class="text-lg font-semibold text-gray-800 mb-3 font-mono">
                        Key Features
                      </h4>
                      <ul class="list-disc list-inside space-y-2">
                        {project.features.map((feature) => (
                          <li class="text-gray-600">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Project Status/Proficiency */}
                  {project.proficiency && (<div class="flex items-center mt-4">
                    <span class="text-sm font-medium font-mono text-gray-600">
                      Status:
                    </span>
                    <span class="ml-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-mono">
                      {project.proficiency}
                    </span>
                  </div>)
                  }
                </div>
              </div>
            )}
          </For>
        </div>
      ) 
      : (
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <For each={props.data}>
            {(item) => (
              <div class="rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
                <div class="space-y-4">
                  <h3 class="text-xl font-semibold text-gray-800 font-ubuntu">
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