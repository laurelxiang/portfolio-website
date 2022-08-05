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


fetch('/api/timeline_post').then(response => response.json())
    .then(data =>
        appendData(data.timeline_posts)
    ).catch(err => {
        console.log(err);
    });

appendData = data => {
    const container = document.querySelector("#post-data");

    data.forEach(timeline_post => {
        const post = document.createElement('p');
        post.innerHTML = `Name: ${timeline_post.name} <br> Email: ${timeline_post.email} <br> Content: ${timeline_post.content} <br> Created at: ${timeline_post.created_at}`;
        container.append(post);
    })
}