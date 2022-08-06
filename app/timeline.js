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

const posts = document.querySelector('#post-data');

// fetch timeline post data from api
const getPosts = () => {
    fetch('/api/timeline_post')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const posts_data = data['timeline_posts']
            const html = posts_data.map(post2html).join('\n');
            posts.innerHTML = html;
        }
        );
    
}

// prints post
const post2html = (post) =>{
    return `
        <li>Name: ${post['name']},
            Email: ${post['email']}, 
            Content: ${post['content']}</il>
        `
}

getPosts();