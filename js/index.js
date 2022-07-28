 async function getPosts() {
     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
     const finalRes = await res.json();
     paintHTML(finalRes)
 }

 getPosts()

 function paintHTML(posts) {

     const projects = document.querySelectorAll(`.project`);
     for (let i = 0; i < projects.length; i++) {
         projects[i].childNodes[3].innerText = posts[i].title
     }
 }
 

// const asyncGetCall = async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//          const data = await response.json();
        
//          console.log(data);
//        } catch(error) {
//     // enter your logic for when there is an error (ex. error toast)
//           console.log(error)
//          } 
//     }


//   asyncGetCall()