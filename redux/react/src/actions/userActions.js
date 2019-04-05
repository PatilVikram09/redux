

const postUser = (user) => {
   // console.log('In action', user)
    fetch(`http://localhost:4070/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            if (response.status === 200) {
                response.json().then(result => {
                    alert(' User Created SucessFuly');
                });
            } else {
                alert('Error');
            }
        })
        .catch((e) => {
            console.log(e);
        });
    
}

export default postUser;