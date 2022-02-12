// modules.js

// named imports (nazwane importy)
import {userName} from './module_a.js';
// import {sayHello} from './module_d.js';

// default import
// import someFunction from './module_b.js';

// import file
// import './module_c.js';

// console.log('i am a module');

// sayHello();

// console.log(userName);

// someFunction(userName);

document.addEventListener('click', async () => {
  const mod = await import('/module_b.js');
  console.log(mod);
});
