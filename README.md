# JavaScript-Fetch-for-PHP-POST-request
functions for creating a FormData and accomplish a Fetch.

Functions for creating a FormData and a Fetch in JavaScript. It was created for PHP POST requests, but you can edit it as you need.

Example of usage:

    fetchPost('file.php', json, criarFormData(
        new FormData(form),
        {'item1': 'item1'},
        {'item2': 'item2'}
    ))
    .then(res => {

        some code...
    })
    .catch(rej => {

        alert(rej)
        console.error(rej)
    })
