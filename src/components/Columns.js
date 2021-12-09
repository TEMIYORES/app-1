import React from 'react'

function Columns() {
    const items = [
    {
        id:1,
        title:'Fruits',
        name:'Mango'
    },
    {
        id:2,
        title:'Vegetables',
        name:'tomato'
    },
    {
        id:3,
        title:'Spicies',
        name:'Curry'
    }
]
    return (
      <>
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <tr>
              <th>{item.title}</th>
            </tr>
            <tr>
              <td>{item.name}</td>
            </tr>
          </React.Fragment>
        ))}
      </>
    );
}

export default Columns
