
export default class Validator {
    
    validateUsername(username) {
        
        if (!/^[\w-]+$/.test(username)) {
            return false;
        }
        
        
        if (/\d{4,}/.test(username)) {
            return false;
        }
        
        if (/^[\d_-]/.test(username)) {
            return false;
        }
        
        if (/[\d_-]$/.test(username)) {
          return false;
        }
        
        return true;
    }
}

