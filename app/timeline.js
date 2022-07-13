const form = document.getElementById('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const payload = new FormData(form);
    console.log([...payload]);

    // post the payload using fetch
    fetch('http://localhost:5000/api/timeline_post', {
        method: 'POST',
        body: payload,
    })
        .then(res => res.json())
        .then(data => console.log(data))
})