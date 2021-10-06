import React, { useEffect, useState } from 'react'
import "./userinput.css"

export default function UserInput() {
    const [name, setname] = useState('')
    const [department, setdepartment] = useState('')
    const [phone, setphone] = useState('')
    const [index, setindex] = useState('')
    const [itemsArray, setitemsArray] = useState(() => {
        const localData = localStorage.getItem("items");
        if (localData) {
            return JSON.parse(localData);
        } else {
            return [];
        }
    })

    var addbtn = document.getElementById("btn");
    var updatebtn = document.getElementById("upbtn");
    const additems = () => {
        if (name.length > 1 && department.length > 1 && phone.length > 1) {
            const inputCollect = {
                id: new Date().getTime(),
                name: name,
                department: department,
                phone: phone,
            }
            setitemsArray(data => [...data, inputCollect])
            document.getElementById("error").innerHTML = ''
            clear()
        }
        else { document.getElementById("error").innerHTML = "plase provide all details correctly" }
    }
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(itemsArray))
    }, [itemsArray])

    const deleteRow = (id) => {
        setitemsArray(data => [...data].filter(data => data.id !== id))

    }
    const editRow = (index) => {
        setindex(index)
        setname(itemsArray[index].name)
        setdepartment(itemsArray[index].department)
        setphone(itemsArray[index].phone)
        document.getElementById("upbtn").style.display = ""
        document.getElementById("btn").style.display = "none"
    }
    const updateRow = () => {
        if (name.length > 1 && department.length > 1 && phone.length > 1) {
            itemsArray[index].name = name
            itemsArray[index].department = department
            itemsArray[index].phone = phone
            clear()
            document.getElementById("error").innerHTML = ''
            updatebtn.style.display = "none"
            addbtn.style.display = ""

        }
        else { document.getElementById("error").innerHTML = "plase provide all details correctly" }
    }
    const clear = () => {
        setphone('')
        setdepartment('')
        setname('')
    }
    return (
        <div className="input_container">
            <form onSubmit={(e) => e.preventDefault()}>
                name: <input type="text" placeholder="enter firstName" onChange={(e) => { setname(e.target.value) }} value={name} />
                department: <input type="text" placeholder="enter department" onChange={(e) => { setdepartment(e.target.value) }} value={department} />
                phone no: <input type="text" placeholder="enter phoneNo" onChange={(e) => { setphone(e.target.value) }} value={phone} />
                <p style={{ color: "red" }} id="error"></p>
                <button type="submit" onClick={additems} id="btn">Add items</button>
                <button style={{ display: "none" }} type="submit" id="upbtn" onClick={() => updateRow()}>update items</button>
            </form>
            <table id="table">
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Department</th>
                        <th>phone no</th>
                        <th>Editable</th>
                        <th>Deletable</th>
                    </tr>
                </thead>
                <tbody id="tbody">
                    {
                        itemsArray.map((data, index) => {
                            return <tr key={index}>
                                <td>{data.name}</td>
                                <td>{data.department}</td>
                                <td>{data.phone}</td>

                                <td onClick={() => editRow(index)} >edit</td>
                                <td onClick={() => deleteRow(data.id)} >delete</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>


    )
}