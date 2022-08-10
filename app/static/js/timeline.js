// //fetching data
// fetch('/api/timeline_post')
// .then(
//     response => response.json())
// .then(
//     data => appendData(data.timeline_posts)
// ).catch(
//     err => {console.log(err);
// });

// appendData = data => {
// const container = document.querySelector("#publish");

// data.slice().reverse().forEach(tpost => {
//     const post = document.createElement('p');
//     post.innerHTML = `Name: ${tpost.name} Email: ${tpost.email}  Created at: ${tpost.created_at} <br> Content: ${tpost.content}`;
//     container.append(post);
// })
// }

// //posting data
// const form = document.getElementById('form');
// form.addEventListener('submit', function (e) {
//     e.preventDefault();

//     const payload = new FormData(form);
//     console.log([...payload]);

//     fetch('/api/timeline_post', {
//         method: 'POST',
//         body: payload,
//     })
//         .then(
//             res => res.json()
//         )
//         .then(
//             data => {
//                 console.log(data);
//                 fetch('/api/timeline_post')
//                     .then(
//                         response => response.json())
//                     .then(
//                         data => {
//                             const container = document.querySelector("#publish");
//                             const post = document.createElement('p');
//                             post.innerHTML = `Name: ${data.timeline_posts[0].name} Email: ${data.timeline_posts[0].email}  Created at: ${data.timeline_posts[0].created_at} <br> Content: ${data.timeline_posts[0].content}`;
//                             container.append(post);
//                         }
//                     ).catch(
//                         err => {console.log(err);
//                     });
//             }
//         )
//     }
// )