import React, { Component } from 'react'
export default class Input extends Component {
    constructor() {
        super()
        this.state = {
            items: []
        }
    }
   
    render() {
    
          const { items } = this.state;
   
        const additems = (e) => {
            e.preventDefault()
            var obj = {

            }
          
            obj.name = document.getElementById('in').value;
            obj.department = document.getElementById('de').value;
            obj.phone = document.getElementById('ph').value;
            this.state.items.push(obj)
            
            clear()
        }
        function clear() {
            document.getElementById('in').value = ""
            document.getElementById('de').value = ""
            document.getElementById('ph').value = ""
        }


        return (
            <div className="input_container">
                <form onSubmit={(e) => e.preventDefault()}>
                    name: <input id='in' type="text" placeholder="enter firstName" />
                    department: <input id='de' type="text" placeholder="enter department" />
                    phone no: <input id='ph' type="text" placeholder="enter phoneNo" />
                    <p style={{ color: "red" }} id="error"></p>
                    <button type="submit" id="btn" onClick={additems}>Add items</button>
                    <button style={{ display: "none" }} type="submit" id="upbtn">update items</button>
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
                      
                      console.log(this.state.items)

                     }
                    </tbody>
                </table>
            </div>
        )
    }
}