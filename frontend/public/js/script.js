// document.addEventListener('click', async (event) => {
//   if (event.target.className === 'button') {
//     event.preventDefault();
//     const form = document.querySelector('.login');
//     const data = Object.fromEntries(new FormData(form));
//     const response = await fetch('http://localhost:3001/login/', {
//       method: 'post',
//       headers: {
//         'Content-Type': 'application/json;charset=utf-8',
//       },
//       body: JSON.stringify(data),
//     });
//     if (response.ok) {
//       const result = await response.json();
//       console.log('RESPONSE---->', result);
//     }
//   }
// });
