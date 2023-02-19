
import makeBlokie from 'ethereum-blockies-base64'


// const address = [
//  '0x55473873964783638742gryfhg8w477yr74y78fy8744f',
//  '0x55473873964783638742gryfhg8w477yr74y78fy8744f',
//  '0x55473873964783638742gryfhg8w477yr74y78fy8744f'
// ];

// const addressIcons = address.map((address, i) => ({
//  text: document.createTextNode(`Address ${i + 1}: ${address}`),
//  icon: blockies.create({
//   seed: address,
//   size: 10,
//   scale: 10
//  })
// }))

// window.addEventListener('load', () => {
//  addressIcons.forEach(address => {
//   const wrapper = document.createElement('div');
//   wrapper.appendChild(address.text);
//   wrapper.appendChild(address.icon);
//   document.body.appendChild(wrapper);

//  })
// })
import React from 'react'

const Bookies = ( ) => {
 const address = '8983njhjcfhuhcuf94989480490498'
 return <div>
  <img src={makeBlokie(address)} alt=""/>
 </div>
}

export default Bookies