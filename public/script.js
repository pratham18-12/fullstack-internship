async function addBlog(){

const title=document.getElementById("title").value;

const content=document.getElementById("content").value;

await fetch("/blogs",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

title:title,

content:content

})

});

document.getElementById("title").value="";
document.getElementById("content").value="";

loadBlogs();

}

async function loadBlogs(){

const response=await fetch("/blogs");

const blogs=await response.json();

let output="";

blogs.forEach(blog=>{

output+=`

<div class="blog">

<h3>${blog.title}</h3>

<p>${blog.content}</p>

</div>

`;

});

document.getElementById("blogs").innerHTML=output;

}

loadBlogs();