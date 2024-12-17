// Create toast container
const getToastContainer = () => {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.style.cssText = `
      position: fixed;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 9999;
      display: flex;
      flex-direction: column;
      align-items: center;
    `;
    document.body.appendChild(container);
  }
  return container;
};

// Toast colors
const TOAST_TYPES:any = {
  success: 'rgb(147 51 234)',
  error: '#F44336',
  warning: '#FF9800',
  info: '#2196F3'
};

// Global toast function
const showToast = (message : string, type = 'info', duration = 3000) => {
  const container = getToastContainer();
  const toast = document.createElement('div');
  
  toast.style.cssText = `
    background-color: ${TOAST_TYPES[type] || TOAST_TYPES.info};
    color: white;
    padding: 15px 20px;
    border-radius: 8px;
    margin-bottom: 10px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    opacity: 0;
    transition: opacity 0.3s ease;
  `;
  
  toast.textContent = message;
  container.appendChild(toast);
  
  // Trigger reflow and show toast
  setTimeout(() => {
    toast.style.opacity = '1';
  }, 10);
  
  // Auto-remove toast
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => container.removeChild(toast), 300);
  }, duration);
};


export { showToast };
export default showToast;