//retrieve data
fetch('/api/timeline_post')
    .then(response => 
        response.json())
    .then(data =>
        appendData(data.timeline_posts)
    ).catch(err => {
        console.log(err);
    });

// appendData = data => {
//     const container = document.querySelector("#post-data");

//     data.forEach(timeline_post => {
//         const post = document.createElement('p');
//         post.innerHTML = `Name: ${timeline_post.name} <br> Email: ${timeline_post.email} <br> Content: ${timeline_post.content} <br> Created at: ${timeline_post.created_at}`;
//         container.append(post);
//     })
// }

function appendData(data) {
    var mainContainer = document.getElementById("post-data");
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      div.innerHTML = 'Name: ' + data[i].name + ' Email:' + data[i].email + ' Content:' + data[i].content + ' Created at:' + data[i].created_at;
      mainContainer.appendChild(div);
    }
  }

//post data
const form = document.getElementById('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const payload = new FormData(form);
    console.log([...payload]);

    // post the payload using fetch
    fetch('/api/timeline_post', {
        method: 'POST',
        body: payload,
    })
        .then(res => res.json())
        .then(data => console.log(data))
})