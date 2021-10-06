import React,{useState} from 'react'

export default function Table({ temp, time }) {
    
    return (
        <div className="tableC">
            {
             temp ? <table>
                <tr>
                    <td>{time} - {temp}C</td>
                </tr>
            </table> : ''
            }
           

        </div>
    )
}
