// import axios from "axios";

// export const getProducts = async(req,res) =>{
//     try{
//         const response = await axios.get('https://fakestoreapi.com/products');

//         return res.send(response.data);
//     }catch(err){
//         return res.send(err);
//     }
// }

// export const addProduct = async(req,res) =>{
//     try {
//         const {title, price, description, image, category} = req.body;

//         const response = await axios.post('https://fakestoreapi.com/products', {
//             title,
//             price,
//             description,
//             image,
//             category
//         });

//         return res.send(response.data);

//         // fetch('https://fakestoreapi.com/products',{
//         //     method:"POST",
//         //     body:JSON.stringify(
//         //         {
//         //             title: 'test product',
//         //             price: 13.5,
//         //             description: 'lorem ipsum set',
//         //             image: 'https://i.pravatar.cc',
//         //             category: 'electronic'
//         //         }
//         //     )
//         // })
//         //     .then(res=>res.json())
//         //     .then(json=>console.log(json))

//     } catch (error) {
//         return res.send(error);
//     }
// }

// export const updateProduct = async(req,res) =>{
//     try{
//         const id = req.query.id;
//         const {title, price, description, image, category} = req.body;
//         const response = await axios.put(`https://fakestoreapi.com/products/${id}`, {
//             title,
//             price,
//             description,
//             image,
//             category
//         });

//         return res.send(response.data);
//     }catch(err){
//         return res.send(err);
//     }
// }

// export const deleteProduct = async(req,res) =>{
//     try {
//         const id = req.params.id;

//         const response = await axios.delete(`https://fakestoreapi.com/products/${id}`);

//         return res.send(response.data);
//     } catch (error) {
//         return res.send(error);
//     }
// }

import axios from "axios";

export const getProducts = async (req, res) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products`);

    return res.send(response.data);
  } catch (err) {
    return res.send(err);
  }
};

export const addProduct = async (req, res) => {
  try {
    const { title, price, description, image, category } = req.body;

    const response = await axios.post(`https://fakestoreapi.com/products`, {
      title,
      price,
      description,
      image,
      category,
    });

    return res.send(response.data);
  } catch (err) {
    return res.send(err);
  }
};

export const updateProducts = async (req, res) => {
  try {

    const {id}  = req.query;
    const { title, price, description, image, category } = req.body;

    const response = await axios.put(
      `https://fakestoreapi.com/products/${id}`,
      {
        title,
        price,
        description,
        image,
        category,
      }
    );

    return res.send(response.data)
  } catch (err) {
    return res.send(err);
  }
};

export const delectProduct = async (req,res)=>{
  try{
      const {id} = req.query;

      const response = await axios.delete(`https://fakestoreapi.com/products/${id}`)

      return res.send(response.data);
  }
  catch(err){
    return res.send(err)
  }
}