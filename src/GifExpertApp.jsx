import { useState } from "react"
import {AddCategory, GifGrid} from "./components"



const GifExpertApp = () => {

   const [categories, setCategories] = useState(['One Punch'])
   
   const onAddCategory = (newCategory) =>{
    //  evitar usar el push, react trata de no mutar el estado por es usar setstate
    // console.log(newCategory)

    if(categories.includes(newCategory)) return;
    setCategories([newCategory,...categories, ])
  
   }
  
   return (
    <>
   
    <h1>GifExpertApp</h1>


    <AddCategory 
  
    onNewCategory={onAddCategory}
    />

    
   
        {
        categories.map((category) => (
                <GifGrid key ={category} category={category}/>
            ))
        }
       
      
        
  
        


    </>
  )
}

export default GifExpertApp