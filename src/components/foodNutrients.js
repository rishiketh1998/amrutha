import React, {useState} from "react";
import { TextField, TableContainer, TableCell, TableRow, TableHead, TableBody, Paper, Table } from "@material-ui/core";
import { LinearProgress } from '@material-ui/core';
import {Button} from "react-bootstrap";
import axios from "axios"

export const FoodNutrients = () => {
    const [ foodData, setFoodData ] = useState(["1 cup rice,", "10 oz chickpeas"])
    const [ nutrientsData, setNutrientsData ] = useState(null)
    const [ individualCalorie, setIndividualCalorie] = useState([])
    const [ loading, setLoading ] = useState(false)
    const ingrCalorieArr = []
    const handleChange = (e) => {
       setFoodData(e.target.value.split(/\r|\n/))
    }
    const handleClick = async () => {
        const obj = {
            "ingr": foodData
        }
        setLoading(true)
        try {
            const {data} = await axios.post("https://api.edamam.com/api/nutrition-details?app_id=053b9447&app_key=be72a94da11002c93f2f02fbd5d3c907", obj)
            for (const key of foodData) {
                const {data} =  await axios.get(`https://api.edamam.com/api/nutrition-data?app_id=053b9447&app_key=be72a94da11002c93f2f02fbd5d3c907&ingr=${key}`)
                ingrCalorieArr.push(data.calories)
            }
            setIndividualCalorie(ingrCalorieArr)
            setNutrientsData(data)
            setLoading(false)
        } catch (e) {

        }
    }
   return (
       <>
       <div className="m-3 row">
           <p>Enter an ingredient list for what you are cooking, like "1 cup rice, 10 oz chickpeas", etc.
               Enter each ingredient on a new line.</p>
       </div>
       <div className="m-3 row">
           <div className="col-4">
               <TextField
                   id="outlined-multiline-static"
                   label="Multiline"
                   multiline
                   fullWidth={true}
                   rows={10}
                   name="data"
                   onChange={handleChange}
                   defaultValue="1 cup rice,
10 oz chickpeas"
                   variant="outlined"
               />
               <div className="my-2 text-center">
                   <Button variant="outline-success" onClick={handleClick}>Calculate</Button>
               </div>
           </div>
           {!nutrientsData || loading ? (<div className="col-4"><LinearProgress color="secondary"/></div>) : (<div className="col-4">
                   <TableContainer component={Paper}>
                       <Table  aria-label="simple table">
                           <TableHead>
                               <TableRow>
                                   <TableCell>Qty</TableCell>
                                   <TableCell align="left">Unit</TableCell>
                                   <TableCell align="left">Food</TableCell>
                                   <TableCell align="left">Calories</TableCell>
                                   <TableCell align="left">Weight(g)</TableCell>
                               </TableRow>
                           </TableHead>
                           <TableBody>
                               {nutrientsData["ingredients"].map((row, index) => (
                                   <TableRow key={index}>
                                       {
                                           nutrientsData["ingredients"][index] != null && (
                                           <>
                                           <TableCell component="th" scope="row">
                                               {nutrientsData["ingredients"][index]['parsed'][0]['quantity']}
                                           </TableCell>
                                           <TableCell align="left"> {nutrientsData["ingredients"][index]['parsed'][0]['measure']}</TableCell>
                                           <TableCell align="left">{nutrientsData["ingredients"][index]['parsed'][0]['food']}</TableCell>
                                           <TableCell align="left">{individualCalorie[index]} kcal</TableCell>
                                           <TableCell align="left">{(+nutrientsData["ingredients"][index]['parsed'][0]['weight']).toFixed(2)}g</TableCell>
                                           </>
                                           )
                                       }
                                   </TableRow>
                               ))}
                           </TableBody>
                       </Table>
                   </TableContainer>
               </div>)}
       </div>
       </>
   )
}