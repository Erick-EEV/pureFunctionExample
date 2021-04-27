import React from 'react';

const Example = () => {

    const makeRequest = () =>
    getJSON()
      .then(data => {
        console.log(data)
        return "done"
      })
  
  makeRequest()

//   const makeRequest = async () => {
//     console.log(await getJSON())
//     return "done"
//   }
  
//   makeRequest()


      const makeRequest = async () => {
          console.log(await getJSON())
          return "done"
      }

    return (
        <div>
            <h2>Hello World</h2>
        </div>
    );
}

export default Example;

