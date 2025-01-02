// Modal.tsx
import { Component, createEffect, createSignal, JSX, Show, onCleanup } from 'solid-js';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
  title?: string;
}

const Modal: Component<ModalProps> = (props) => {
  const [isVisible, setIsVisible] = createSignal(false);
  const [isAnimating, setIsAnimating] = createSignal(false);
  let timeoutId: number;

  createEffect(() => {
    if (props.isOpen) {
      setIsVisible(true);
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
      document.body.style.overflow = 'hidden';
    } else {
      setIsAnimating(false);
      timeoutId = window.setTimeout(() => {
        setIsVisible(false);
      }, 200);
      document.body.style.overflow = 'unset';
    }
  });

  onCleanup(() => {
    if (timeoutId) window.clearTimeout(timeoutId);
  });

  createEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && props.isOpen) {
        props.onClose();
      }
    };

    if (props.isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  });

  return (
    <Show when={isVisible()}>
      <div 
        class={`modal fixed inset-0 z-50 flex items-center justify-center transition-all duration-200 ease-in-out ${
          isAnimating() ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Backdrop */}
        <div 
          class={`fixed inset-0 bg-black transition-opacity duration-200 ease-in-out ${
            isAnimating() ? 'bg-opacity-50' : 'bg-opacity-0'
          }`}
          onClick={props.onClose}
          aria-hidden="true"
        />
        
        {/* Modal panel */}
        <div 
          class={`relative bg-white rounded-lg w-full max-w-3xl m-4 transform transition-all duration-200 ease-in-out
            shadow-lg max-h-full flex flex-col
            ${isAnimating() 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 -translate-y-4 scale-95'
          }`}
          onClick={(e) => e.stopPropagation()}
          style={{
            "background-image": `
              linear-gradient(to right, transparent 30px, #e0e0e0 30px, #e0e0e0 31px, transparent 31px),
              repeating-linear-gradient(#ffffff,rgb(255, 255, 255) 20px,rgba(230, 230, 230, 0.41) 20px,rgba(230, 230, 230, 0.68) 21px)
            `,
            "background-size": "100% 100%, 100% 21px",
            "background-position": "0 0",
          }}
        >
          {/* Header */}
          <div class="flex items-center justify-between p-4 bg-white/80 backdrop-blur border-b border-gray-300 flex-shrink-0">
            <h3 class="text-lg font-serif font-semibold text-gray-800 pl-8">
              {props.title || 'Note'}
            </h3>
            <button
              onClick={props.onClose}
              class="text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <span class="sr-only">Close</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div class="p-6 pl-12 text-gray-700 overflow-y-auto flex-grow">
            {props.children}
          </div>
        </div>
      </div>
    </Show>
  );
};

export default Modal;