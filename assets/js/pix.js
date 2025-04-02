/**
 * PIX Payment Key Handling
 * 
 * This script handles the functionality to copy the church's PIX key
 * and provides visual feedback to the user
 */

// PIX key configuration - replace with your actual PIX key
const CHURCH_PIX_KEY = "00000000-0000-0000-0000-000000000000";

/**
 * Copy PIX key to clipboard and show feedback
 */
function copyPixKey() {
    const pixKey = CHURCH_PIX_KEY;
    const copyButton = document.querySelector('.copy-button');
    const originalText = copyButton.textContent;
    
    // Show loading state
    copyButton.textContent = "Copiando...";
    copyButton.disabled = true;
    
    // Copy to clipboard using the Clipboard API
    navigator.clipboard.writeText(pixKey)
        .then(() => {
            // Success state
            copyButton.textContent = "✓ Copiado!";
            copyButton.classList.add('success');
            
            // Create toast notification
            showToastNotification("Chave PIX copiada com sucesso!");
            
            // Reset button after delay
            setTimeout(() => {
                copyButton.textContent = originalText;
                copyButton.disabled = false;
                copyButton.classList.remove('success');
            }, 2000);
        })
        .catch(err => {
            // Error state
            copyButton.textContent = "✗ Erro";
            copyButton.classList.add('error');
            console.error("Erro ao copiar a chave PIX:", err);
            
            // Show error notification
            showToastNotification("Erro ao copiar a chave PIX. Por favor, tente novamente.", true);
            
            // Reset button after delay
            setTimeout(() => {
                copyButton.textContent = originalText;
                copyButton.disabled = false;
                copyButton.classList.remove('error');
            }, 2000);
        });
}

/**
 * Create and show a toast notification
 * @param {string} message - The message to display
 * @param {boolean} isError - Whether this is an error message
 */
function showToastNotification(message, isError = false) {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast-notification ${isError ? 'toast-error' : 'toast-success'}`;
    toast.textContent = message;
    
    // Add toast to the document
    document.body.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    // Remove after delay
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Add CSS for toast notifications
document.addEventListener('DOMContentLoaded', () => {
    // Create styles for toast notifications
    const style = document.createElement('style');
    style.textContent = `
        .toast-notification {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%) translateY(100px);
            background-color: #153f00;
            color: white;
            padding: 12px 24px;
            border-radius: 4px;
            z-index: 1000;
            opacity: 0;
            transition: transform 0.3s ease, opacity 0.3s ease;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .toast-notification.show {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
        
        .toast-error {
            background-color: #d32f2f;
        }
        
        .copy-button.success {
            background-color: #388e3c;
        }
        
        .copy-button.error {
            background-color: #d32f2f;
        }
    `;
    document.head.appendChild(style);
});