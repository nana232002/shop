export const fetchUsers =async ()=>{
    try{
        const response = await fetch("https://6740f22bd0b59228b7f1d8c7.mockapi.io/users");
        const data = await response.json();
        return data ;
    } catch(error){
        console.log(error);
        
    }
    
}



export const addUserToMockAPI = async (username, password) => {
    try {
      const response = await fetch("https://6740f22bd0b59228b7f1d8c7.mockapi.io/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: username,
          password: password,
        }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to add user");
      }
  
      const data = await response.json();
      console.log("User added successfully:", data);
      return data;
    } catch (error) {
      console.error("Error adding user:", error);
      throw error;
    }
  };
  
// export const postRecipe =async (newRecipe)=>{
//     try{
//         const response = await fetch("https://673dbe770118dbfe860893b5.mockapi.io/recipes", {
//             method: "POST", 
//             headers: {
//               "Content-Type": "application/json", 
//             },
//             body: JSON.stringify(newRecipe),
//           });
//           const data = await response.json();
//           return data;
//     } catch(error){
//         console.log(error);
        
//     }
    
// }


 export const postNewProduct = async (newProduct) => {
  try {
    const response = await fetch("https://6740f22bd0b59228b7f1d8c7.mockapi.io/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(newProduct), 
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); 
    return data; 
  } catch (error) {
    console.error("Error posting new product:", error);
    throw error; 
  }
};
 export const fetchProduct = async ()=>{
  try{
    const response = await fetch("https://6740f22bd0b59228b7f1d8c7.mockapi.io/products");
    const data = await response.json();
    return data ;
} catch(error){
    console.log(error);
    
}
 };