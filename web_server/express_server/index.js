import express from 'express'

const app = express()
const port = 3000

app.use(express.json())

let Adata = []
let AID = 1

// CRUD operations
//add data or (create)
app.post('/send', (req,res)=>{
    const {name, phone} = req.body
    const newData = {id:AID++, name, phone}
    Adata.push(newData)
    res.status(201).send(newData)
})
//get all data (read)
app.get('/send',(req,res)=>{
    res.status(200).send(Adata)
})
//get id data (read)
app.get('/send/:id',(req,res)=>{
    const find = Adata.find(d=>d.id === parseInt(req.params.id))
    if(!find){
        return res.status(404).send('Data not found')
    }
    res.status(200).send(find)
})
//update data (update)
app.put('/send/:id',(req,res)=>{
    const find = Adata.find(d=>d.id === parseInt(req.params.id))
    if(!find){
        return res.status(404).send('Data not found')
    }
    const {name, phone}=req.body
    find.name = name
    find.phone = phone
    res.status(200).send(find)
})
//delete data (delete)
app.delete('/send/:id',(req,res)=>{
    const index = Adata.findIndex(d => d.id === parseInt(req.params.id))
    if(index === -1){
        return res.status(404).send('Data not found to delete')
    }
    Adata.splice(index,1)
    return res.status(200).send('Data deleted!!!!')
})

app.listen(port, ()=>{
    console.log(`Running the backend server using Express on port ${port}`);
})