// const asyncHandler = ((requesthandler)=>{
//     return (req,res,next)=>{
//       Promise.resolve(requesthandler(req,res,next)).catch(
//         ((err)=>err(err))
//     )

//     }
// })


// module.exports = asyncHandler;

// utils/asyncHandler.js
// const asyncHandler = (requestHandler)=> {
//   return (req, res, next) => {
//     Promise.resolve(requestHandler(req, res, next)).catch(next);
//   };
// }

// module.exports = { asyncHandler };



const asyncHandler = (requestHandler)=>{
  return (req,res,next)=>{
   Promise.resolve(requestHandler,(req,res,next)).catch(next)
  }
}

module.exports = {asyncHandler};