import Header from "./Header";
import Footer from "./Footer";
import { useState,useEffect } from 'react'
import Para from "./Para";
import Additem from "./Additem"
import './App.css';
import Searchitem from "./Searchitem"
import ApiRequest from "./ApiRequest";

function App() {
  const API_URL="http://localhost:3500/items"

      const [items,setItems]=useState([])
      const [newitems,setNewItems]=useState('')
      const [search,searchItem]=useState('')
      const [fetcherror,setFetchError]=useState(null)
      const [isloading,setLoading]=useState(true)
     
  useEffect(()=>{

      const fetchitems=async()=>{
        try{
      const response= await fetch(API_URL)
      if(!response.ok) throw Error("data not received")
      const listItems=await response.json();
      console.log(listItems)
      setItems(listItems)
      console.log(items)
      setFetchError(null)
     
        }
        catch(err){
          setFetchError(err.message)
          console.log(err.message)

        }
        finally{
          setLoading(false)
        }
      }
      setTimeout(()=>{
        (async()=>await fetchitems())()
      },2000)
  
 },[])


  const additem=async (item)=>{
      const id= items.length? items[items.length-1].
      id+1:1;
      const additems={id,checked:false,item}
      const listitems=[...items,additems]
      setItems(listitems)
      
      console.log(id)

      const  postOption={
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(additems)
      }
      const result=await ApiRequest(API_URL,postOption)
      if(result) setFetchError(result)

  }
  console.log(items)
  
  const handleclick=async(id)=>{
   const listitem=items.map((itemss)=>
    itemss.id===id?{...itemss,checked:!itemss.checked}:itemss)
   setItems(listitem)
   const myItem=items.filter((item)=>item.id===id)
   const  updateOption={
    method:'PATCH',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({checked:myItem[0].checked})
  }
  const requrl=`${API_URL}/${id}`
  const result=await ApiRequest(requrl,updateOption)
  if(result) setFetchError(result)
   

   }
  
  const handledelete=async(id)=>{
    const listitem=items.filter((item2) =>
    item2.id!==id
    )
    const deleteOption={method:'DELETE'}
    setItems(listitem)
    const requrl=`${API_URL}/${id}`
    const result=await ApiRequest(requrl,deleteOption)
    if(result) setFetchError(result)
  }
 const handleadditem=(e)=>{
  e.preventDefault()
  if(newitems=="") return
  additem(newitems)
  setNewItems('')

 }
  return (
  <div className="App">
    <Header title="to-do list"/>
    <Additem
      newitems={newitems}
      setNewItems={setNewItems}
      handleadditem={handleadditem}
    />
    <Searchitem
      search={search}
      searchItem={searchItem}
    />
   <main>
   {(isloading===true)?<p>Loading Items..</p>:
      (fetcherror!==null)?(<p>{`Error:${fetcherror}`}</p>):
        (<Para 
        items={items.filter(item=>(item.item.toLowerCase()).includes(search.toLowerCase()))}
        handleclick={handleclick}
        handledelete={handledelete}
        />)}
        
    </main>
   <Footer
   length={items.length}
   />
  </div>
  );
}

export default App;
