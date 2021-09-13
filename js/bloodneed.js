// Getting Value From Data Base (Blood Request)

function bloodneed(){

    let url ="https://97233c10-e8bd-4684-98ca-20e5eaf8dd35-bluemix.cloudant.com/bloodbank-bloodrequest/_all_docs?include_docs=true";

    const dbusername = "apikey-v2-msz5pn0gamsoigpftay3cndoju75rdeejvo1cd3paw0";
    const dbpassword = "1cd6b51776516316358ce28da3097318";

    const basicAuth = 'Basic '  + btoa(dbusername+ ":" +dbpassword);
       
    axios.get(url, { headers: {'Authorization': basicAuth}}).then(res => {

    let data = res.data.rows;

    const users = data.map(obj=>obj.doc);

    console.log(users);
        
    let content = "";

    let i = 0;

    for (let task of users) {

        i++;

        content = content + `<tr><td>${i}</td><td>${task.name}</td><td>${task.bloodtype}</td><td>${task.phonenumber}</td></tr>`;

    }

    console.log(content);

    document.querySelector("#task_table").innerHTML = content; 
     
    })

}

// Calling the function

bloodneed()