import React from 'react'
import { useNavigate } from "react-router-dom";


function Addblog() {


    const[title,setTitle]=React.useState("");
    const[summary,setSummary]=React.useState("");
    const[content,setContent]=React.useState("");
    const[author,setAuthor]=React.useState("");
    const[key,setKey]=React.useState("");
    const[url,setUrl] = React.useState("");
    const navigate = useNavigate();


    const addBlog= async()=>{
         console.warn(title,content,author,key);
                
                setAuthor(new Date(Date.now()).getDate())
                let result = await fetch("http://localhost:5000/add-blog", {
                    method: "post",
                    body: JSON.stringify({title,content,author,key,summary,url}),
                    headers:{
                     'Content-Type': 'application/json'
                    },

                })
                result = await result.json()
                console.warn(result);
                navigate('/')

            }







  return (


    <section className="min-h-screen flex flex-col">
            <div className="flex flex-1 items-center justify-center">
                <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                    <form className="text-center">
                        <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                            Add Blog Easily
                        </h1>
                        <div className="py-2 text-left">
                            <input type="text" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Title" 
                            onChange={(e)=>{setTitle(e.target.value)}} value={title} />
                        </div>
                        <div class="py-2 text-left">
                            <input type="text" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block  w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Summary" 
                            onChange={(e)=>{setSummary(e.target.value)}} value={summary} />
                        </div>
                        <div className="py-2 text-left">
                            <input type="text" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block  w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Content" 
                            onChange={(e)=>{setContent(e.target.value)}} value={content} />
                        </div>
                        <div className="py-2 text-left">
                            <input type="text" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Date"
                            onChange={(e)=>{setAuthor(e.target.value)}} value={author}/>
                        </div>
                        <div className="py-2 text-left">
                            <input type="text" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="key"
                            onChange={(e)=>{setKey(e.target.value)}} value={key}  />
                        </div>
                        <div className="py-2 text-left">
                            <input type="text" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Image Url.."
                            onChange={(e)=>{setUrl(e.target.value)}} value={url}  />
                        </div>
                        <div className="py-2">
                            <button  className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700"
                            onClick={addBlog}>
                                Add
                            </button>
            
                        </div>
                    </form>
                </div>


            </div>
            
        </section>


        //new Date(Date.now()).getDate()+"/"+new Date(Date.now()).getMonth()+"/"+new Date(Date.now()).getFullYear()+"-"+new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes()} 
        
    
    

  )
}

export default Addblog;