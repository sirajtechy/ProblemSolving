var fullName = "Sirajudden G"

// console.log(fullName)


var courseName = "React js Bootcamp"

var isLoggedIn = true 

// Discount price 
// console.log(typeof courseName)

function hello() {
    return "Hello Siraj "
}

hello()

var getMyName = function (name,role) {
    switch (role) {
        case "admin":
            return `${name} is admin has all the access`
            break;
            case "user":
            
                break;
    
                case "guest":
            
                    break;
    
                    case "super admin":
            
                        break;
                
        default:
            break;
    }
}
console.log(getMyName('siraj','admin'));
