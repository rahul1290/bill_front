import Cors from 'cors'

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }
      console.log('resolve function called');
      return resolve(result)
    })
  })
}

async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors)

  
    const response =  await fetch('http://vnrdev.in/flutterMap/index.php/welcome/test',{
        method : 'POST',
        body : JSON.stringify({'id':'123'}),
        headers : {
            'Content-Type' :'application/json'
        }
    })
  // Rest of the API logic
  res.json({ message: 'Hello Everyone!' })
}

export default handler