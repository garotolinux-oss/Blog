function removerPost() {
    fetch("/edit"), {
        method: "Post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({})
    }
}