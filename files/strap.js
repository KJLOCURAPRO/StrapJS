

console.log('%cGracias por utilizar KJSTRAPGAMES','color: lime;')

const gameDoFunctions = {};

export const gameDo = (callbackOrNombre, callback) => {
    if (typeof callback === 'function') {
        const nombre = callbackOrNombre;
        gameDoFunctions[nombre] = callback;
    } else {
        const nombre = callbackOrNombre;
        const funcion = gameDoFunctions[nombre];

        if (typeof funcion === 'function') {
            funcion();
        } else {
            console.error(`Bro, no hay ningun gameDo llamado ${nombre}`);
        }
    }
};

gameDo.see = () => {
    if (Object.keys(gameDoFunctions).length== 0) {
        console.warn('No se cargaron los gameDo o no has creado ninguno, si este no es el problema o no sabes solucionarlo revisa la documentacion en: ')
    }else if(Object.keys(gameDoFunctions).length >= 50){ 
        console.warn('Hay 50 o más gameDo hacer demasiados podrian dificultar en el rendimiento del programa.')
        console.log(gameDoFunctions);
        }else{
    console.log(gameDoFunctions);
    }
};


// Definir el objeto 'eventManager' para manejar todos los eventos
export const event = {
    registeredEvents: new Map(),

    on(eventType, element, callback) {
        if (element && typeof callback === 'function') {
            element.addEventListener(eventType, callback);

            // Almacenar el evento y la función en un Map para referencia futura.
            if (!this.registeredEvents.has(element)) {
                this.registeredEvents.set(element, []);
            }
            this.registeredEvents.get(element).push({ eventType, callback });

            console.log(`Evento '${eventType}' registrado para el elemento: ${element.id}.`);
        } else {
            console.error('Error: elemento o función no válidos.');
        }
    },

    off(eventType, element) {
        if (element && this.registeredEvents.has(element)) {
            const events = this.registeredEvents.get(element);

            // Filtrar los eventos para el tipo especificado y eliminarlos.
            events.forEach((eventObj, index) => {
                if (eventObj.eventType === eventType) {
                    element.removeEventListener(eventType, eventObj.callback);
                    events.splice(index, 1);
                    console.log(`Evento '${eventType}' desasociado del elemento: ${element.id}.`);
                }
            });

            // Si ya no quedan eventos para el elemento, eliminarlo del Map.
            if (events.length === 0) {
                this.registeredEvents.delete(element);
            }
        } else {
            console.warn('No se encontraron eventos para desasociar.');
        }
    },

    once(eventType, element, callback) {
        if (element && typeof callback === 'function') {
            const onceCallback = (event) => {
                callback(event);
                this.off(eventType, element); // Desasociar el evento después de la primera ejecución.
            };
            this.on(eventType, element, onceCallback);
        } else {
            console.error('Error: elemento o función no válidos.');
        }
    },

    trigger(customEventType, element, detail = {}) {
        if (element) {
            const customEvent = new CustomEvent(customEventType, { detail });
            element.dispatchEvent(customEvent);
            console.log(`Evento personalizado '${customEventType}' disparado.`);
        } else {
            console.error('Error: elemento no válido para disparar evento.');
        }
    },

    see() {
        if (this.registeredEvents.size === 0) {
            console.warn('No se han registrado eventos.');
        } else {
            console.log('Eventos registrados:', this.registeredEvents);
        }
    }
};



// Archivo: reactive.js

export const type = {
    reactive(data) {
        return new Proxy(data, {
            get(target, property) {
                return target[property];
            },
            set(target, property, value) {
                target[property] = value;

                // Si hay un callback registrado, se llama automáticamente
                if (typeof target.function === 'function') {
                    target.function();
                }

                return true;
            }
        });
    }
};


export const If = {
    equal: (iF_equal$condition1$,iF_equal$condition2$,callback,) => {
        if(iF_equal$condition1$ == iF_equal$condition2$){
            callback();
        }
        return If;
    },
    Noequal: (iF_equal$condition1$,iF_equal$condition2$,callbackNoEqual)=>{
        if(iF_equal$condition1$ != iF_equal$condition2$){
            callbackNoEqual()
        }
    }
}

export const msg = {
    check: function(message_$info_write$$$_user$$$,style_check$$lime$$ox78274 = 'color:lime;'){
        console.log(`%c${message_$info_write$$$_user$$$}`,style_check$$lime$$ox78274)
    },
    info:function(message_$info_write$$$_user$$$,style_check$$lime$$ox78274 = 'color:yellow;'){
        console.log(`%c${message_$info_write$$$_user$$$}`,style_check$$lime$$ox78274)
    },
    blue: function(message_$info_write$$$_user$$$,style_check$$lime$$ox78274 = 'color:blue;'){
        console.log(`%c${message_$info_write$$$_user$$$}`,style_check$$lime$$ox78274)
    }
}



// strapJs.js
class menuTypeOne {
    constructor() {
        this.menu = document.createElement('div'); // Elemento principal del menú
        this.menu.className = 'menu-type-one'; // Clase para el CSS, opcional
        
        // Estilos básicos para el menú
        this.menu.style.width = '300px'; // Ancho fijo
        this.menu.style.height = '500px'; // Altura del menú
        this.menu.style.background = 'linear-gradient(135deg, #2980b9, #8e44ad)'; // Fondo con gradiente
        this.menu.style.fontFamily = "'Roboto', sans-serif"; // Fuente moderna
        this.menu.style.position = 'absolute';
        this.menu.style.top = '50%';
        this.menu.style.left = '50%';
        this.menu.style.transform = 'translate(-50%, -50%)'; // Centrado
        this.menu.style.padding = '20px';
        this.menu.style.borderRadius = '15px'; // Bordes redondeados
        this.menu.style.boxShadow = '0px 4px 30px rgba(0, 0, 0, 0.2)'; // Sombra intensa
        this.menu.style.transition = 'all 0.3s ease'; // Transición suave al cargar
        this.menu.style.opacity = '0';
        this.menu.style.animation = 'fadeIn 1s forwards'; // Animación al cargar
        this.menu.style.zIndex = '1000'; // Asegura que el menú esté por encima de otros elementos
        setTimeout(() => { this.menu.style.opacity = '1'; }, 500); // Animación de aparición

        document.body.appendChild(this.menu); // Añade el menú al documento
    }

    create(title) {
        let titleElement = document.createElement('h1'); // Elemento de título
        titleElement.textContent = title;
        this.menu.appendChild(titleElement);
        titleElement.style.textAlign = 'center';
        titleElement.style.fontSize = '2.5em';
        titleElement.style.fontWeight = '700';
        titleElement.style.marginBottom = '20px';
        titleElement.style.color = '#fff'; // Título en blanco
    }

    body(text) {
        let textElement = document.createElement('h2');
        textElement.textContent = text;
        this.menu.appendChild(textElement);
        textElement.style.textAlign = 'center';
        textElement.style.fontSize = '1.5em';
        textElement.style.marginBottom = '30px';
        textElement.style.color = '#fff'; // Texto en blanco
    }

    // Método para crear botones
    createButton(text, color, hoverColor) {
        const button = document.createElement('button');
        button.textContent = text;
        button.style.marginTop = '15px';
        button.style.padding = '15px 30px';
        button.style.backgroundColor = color;
        button.style.color = '#fff';
        button.style.border = 'none';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.style.fontSize = '1.2em';
        button.style.transition = 'all 0.3s ease';

        // Efectos al pasar el cursor
        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = hoverColor;
            button.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = color;
            button.style.transform = 'scale(1)';
        });

        return button;
    }

    // Funciones para crear tipos de botones
    button = {
        accept: (text) => {
            const button = this.createButton(text, '#3498db', '#2980b9');
            this.menu.appendChild(button);
        },

        cancel: (text) => {
            const button = this.createButton(text, '#e74c3c', '#c0392b');
            this.menu.appendChild(button);
        },

        info: (text) => {
            const button = this.createButton(text, '#f39c12', '#e67e22');
            this.menu.appendChild(button);
        },

        login: (text) => {
            const button = this.createButton(text, '#2ecc71', '#27ae60');
            this.menu.appendChild(button);
        },

        signup: (text) => {
            const button = this.createButton(text, '#9b59b6', '#8e44ad');
            this.menu.appendChild(button);
        },

        search: (text) => {
            const button = this.createButton(text, '#1abc9c', '#16a085');
            this.menu.appendChild(button);
        },

        logout: (text) => {
            const button = this.createButton(text, '#f1c40f', '#f39c12');
            this.menu.appendChild(button);
        },

        profile: (text) => {
            const button = this.createButton(text, '#34495e', '#2c3e50');
            this.menu.appendChild(button);
        },

        settings: (text) => {
            const button = this.createButton(text, '#16a085', '#1abc9c');
            this.menu.appendChild(button);
        },

        help: (text) => {
            const button = this.createButton(text, '#e74c3c', '#c0392b');
            this.menu.appendChild(button);
        },

        contact: (text) => {
            const button = this.createButton(text, '#8e44ad', '#9b59b6');
            this.menu.appendChild(button);
        },

        feedback: (text) => {
            const button = this.createButton(text, '#f39c12', '#e67e22');
            this.menu.appendChild(button);
        },
    };
}

// Animación al cargar el menú
const styleSheet = document.createElement('style');
styleSheet.innerHTML = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(styleSheet);



class menuTypeTwo {
    constructor() {
        this.menu = document.createElement('div');
        this.menu.className = 'menu-type-two';

        // Estilos generales
        this.menu.style.width = '350px';
        this.menu.style.margin = '30px auto';
        this.menu.style.backgroundColor = '#fff';
        this.menu.style.borderRadius = '15px';
        this.menu.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
        this.menu.style.overflow = 'hidden';
        this.menu.style.fontFamily = "'Arial', sans-serif";
        this.menu.style.position = 'relative';
    }

    create(title) {
        const titleElement = document.createElement('h1');
        titleElement.textContent = title;
        titleElement.style.textAlign = 'center';
        titleElement.style.fontSize = '2em';
        titleElement.style.fontWeight = '600';
        titleElement.style.margin = '20px 0';

        this.menu.appendChild(titleElement);
        document.body.appendChild(this.menu);
    }

    addProfile(name, username, profileImageURL, bio, isOnline = false) {
        // Imagen de perfil
        const profileImage = document.createElement('img');
        profileImage.src = profileImageURL;
        profileImage.alt = 'Profile Image';
        profileImage.style.width = '100px';
        profileImage.style.height = '100px';
        profileImage.style.borderRadius = '50%';
        profileImage.style.marginTop = '20px';
        profileImage.style.display = 'block';
        profileImage.style.marginLeft = 'auto';
        profileImage.style.marginRight = 'auto';

        // Nombre y username
        const nameElement = document.createElement('h2');
        nameElement.textContent = name;
        nameElement.style.textAlign = 'center';
        nameElement.style.fontSize = '1.5em';
        nameElement.style.fontWeight = '600';

        const usernameElement = document.createElement('h3');
        usernameElement.textContent = `@${username}`;
        usernameElement.style.textAlign = 'center';
        usernameElement.style.fontSize = '1.1em';
        usernameElement.style.color = '#888';

        // Biografía
        const bioElement = document.createElement('p');
        bioElement.textContent = bio;
        bioElement.style.textAlign = 'center';
        bioElement.style.fontSize = '1em';
        bioElement.style.color = '#444';
        bioElement.style.padding = '0 10px';

        // Indicador de actividad (en línea)
        const onlineIndicator = document.createElement('div');
        onlineIndicator.style.width = '15px';
        onlineIndicator.style.height = '15px';
        onlineIndicator.style.borderRadius = '50%';
        onlineIndicator.style.position = 'absolute';
        onlineIndicator.style.top = '10px';
        onlineIndicator.style.right = '10px';
        onlineIndicator.style.backgroundColor = isOnline ? 'green' : 'gray'; // Verde si está en línea
        this.menu.appendChild(onlineIndicator);

        // Añadir perfil al menú
        this.menu.appendChild(profileImage);
        this.menu.appendChild(nameElement);
        this.menu.appendChild(usernameElement);
        this.menu.appendChild(bioElement);
    }

    button = {
        follow: (text) => {
            const button = document.createElement('button');
            button.textContent = text;
            button.style.marginTop = '20px';
            button.style.padding = '10px 20px';
            button.style.backgroundColor = '#2575fc';
            button.style.color = 'white';
            button.style.border = 'none';
            button.style.borderRadius = '5px';
            button.style.cursor = 'pointer';
            this.menu.appendChild(button);
        },

        message: (text) => {
            const button = document.createElement('button');
            button.textContent = text;
            button.style.marginTop = '10px';
            button.style.padding = '10px 20px';
            button.style.backgroundColor = '#25d366'; // Verde mensaje
            button.style.color = 'white';
            button.style.border = 'none';
            button.style.borderRadius = '5px';
            button.style.cursor = 'pointer';
            this.menu.appendChild(button);
        },

        block: (text) => {
            const button = document.createElement('button');
            button.textContent = text;
            button.style.marginTop = '10px';
            button.style.padding = '10px 20px';
            button.style.backgroundColor = '#f44336'; // Rojo bloqueado
            button.style.color = 'white';
            button.style.border = 'none';
            button.style.borderRadius = '5px';
            button.style.cursor = 'pointer';
            this.menu.appendChild(button);
        }
    };

    addSocialLinks(links) {
        const socialContainer = document.createElement('div');
        socialContainer.style.marginTop = '20px';
        socialContainer.style.textAlign = 'center';

        for (let platform in links) {
            const socialLink = document.createElement('a');
            socialLink.href = links[platform];
            socialLink.textContent = platform;
            socialLink.style.display = 'inline-block';
            socialLink.style.margin = '5px';
            socialLink.style.color = '#2575fc';
            socialLink.style.fontSize = '1.1em';
            socialLink.style.textDecoration = 'none';

            socialContainer.appendChild(socialLink);
        }

        this.menu.appendChild(socialContainer);
    }
}window.menuTypeOne = menuTypeOne
window.menuTypeTwo = menuTypeTwo
