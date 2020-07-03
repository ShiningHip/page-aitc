import { NextApiRequest, NextApiResponse } from "next"

export default (req: NextApiRequest, res: NextApiResponse) => {
  var queryString: string = req.query.query
  var converted = new Array(queryString.length)
  queryString.split('').map(s=>{
  do {
    var idx = Math.floor(Math.random() * converted.length)
  } while (converted[idx] != null)
  converted[idx] = s
  })
  res.status(200).json({result: converted.join('')})
}