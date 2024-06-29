import { useState } from 'react'
import { useCallback } from 'react';
import React from 'react'


const data = [
  "Junaid" , "Ahmed", "Yaseen", "Ibrahim" , "Jazim", "Niyamat Uncle", "Asim Bhai", "Ruquu", "Sahib", "Hadi", "Asad", "Moosa", "Mubeen", "Poty Brothers", "Babar Azam", "Raja Ali", "NON FC", "Anas", "Khali", "Babuu", "Ronaldo", "Coach", "Shahzad Uncle", "Sonu Jee", "Imtiaz sahb", "Saim", "Mehak Noor","🫵", "Siddu Moose wala", "ALL NON GC", "Tariq Bhai", "Batman", "Rohit Sharma", "Azam Khan", "Eks", "Messi", "Faizi", "KB Burger", "My Friend", "Heera Gujar", "Haris Haseeb", "Mehroz Bhai", "Amar Faisal", "Italian Girl", "Your MOM", "Sherry Bhai", "Danish Bhai", "Tu hi hai",  "Hamza", "Umaڑ", "Dani Mamu", "Ali Noor", "Everyone except you", "Azeem ki kaam wali", "Buu G"
];  

const emojis = [
 "💩", "🔛🔝", "🏳‍🌈", "🤡", "🖕", "🍼", "💀", "®", "🆓", "💯","🗿","🍑", "کتا🐕","🦁","👙","🫦","🫶"
]

const nons = [
  "Anas" , "Ibrahim", "Yaseen", "Jazim", "Hadi", "Ahmed", "Junaid", "Usaid"
];


const images = [
  "./src/assets/images/hadi-F.jpg", "./src/assets/images/ibi flower.jpg","./src/assets/images/ifti.jpg","./src/assets/images/ibi eat.jpg","./src/assets/images/me ph.jpg","./src/assets/images/yasin eat.jpg","./src/assets/images/yasin mouth.jpg","./src/assets/images/ibi legs.jpg","./src/assets/images/ibi pith 1.jpg","./src/assets/images/aiya in blue.jpg","./src/assets/images/we burger.jpg","./src/assets/images/t3.jpg","./src/assets/images/1.jpg","./src/assets/images/2.jpg","./src/assets/images/3.jpg","./src/assets/images/4.jpg", "./src/assets/images/5.jpg","./src/assets/images/6.jpg","./src/assets/images/7.jpg","./src/assets/images/8.jpg","./src/assets/images/9.jpg","./src/assets/images/10.jpg","./src/assets/images/11.jpg","./src/assets/images/12.jpg","./src/assets/images/13.jpg","./src/assets/images/14.jpg","./src/assets/images/15.jpg","./src/assets/images/16.jpg","./src/assets/images/17.jpg","./src/assets/images/18.jpg","./src/assets/images/19.jpg","./src/assets/images/20.jpg","./src/assets/images/21.jpg","./src/assets/images/22.jpg","./src/assets/images/23.jpg","./src/assets/images/24.jpg","./src/assets/images/25.jpg","./src/assets/images/26.jpg","./src/assets/images/27.jpg","./src/assets/images/28.jpg","./src/assets/images/29.jpg","./src/assets/images/30.jpg","./src/assets/images/31.jpg","./src/assets/images/32.jpg","./src/assets/images/33.jpg","./src/assets/images/34.jpg","./src/assets/images/35.jpg","./src/assets/images/36.jpg","./src/assets/images/37.jpg","./src/assets/images/38.jpg","./src/assets/images/39.jpg","./src/assets/images/40.jpg","./src/assets/images/41.jpg","./src/assets/images/42.jpg","./src/assets/images/43.jpg","./src/assets/images/44.jpg","./src/assets/images/45.jpg","./src/assets/images/47.jpg","./src/assets/images/48.jpg","./src/assets/images/49.jpg","./src/assets/images/50.jpg","./src/assets/images/51.jpg","./src/assets/images/52.jpg","./src/assets/images/53.jpg","./src/assets/images/54.jpg","./src/assets/images/55.jpg","./src/assets/images/56.jpg","./src/assets/images/57.jpg","./src/assets/images/58.jpg","./src/assets/images/59.jpg","./src/assets/images/60.jpg","./src/assets/images/61.jpg","./src/assets/images/62.jpg","./src/assets/images/63.jpg","./src/assets/images/64.jpg","./src/assets/images/65.jpg","./src/assets/images/66.jpg","./src/assets/images/67.jpg","./src/assets/images/68.jpg","./src/assets/images/69.jpg","./src/assets/images/70.jpg","./src/assets/images/71.jpg","./src/assets/images/72.jpg","./src/assets/images/73.jpg","./src/assets/images/74.jpg"
];


let status = false;

function Users() {

  const [prop, setProp] = useState("");
  const [user, setuser] = useState("");
  const [non, setNon] = useState("");
  const [emoji, setEmoji] = useState("");
  const [img, setImg] = useState("");


  const addProperty = useCallback(()=>{

    let text = document.querySelector('.texttt').value;
    if(!text){
      text = "" ;
    }

    if(text != ""){
      if(!status){
        document.querySelector('.error-div').innerHTML = "";
        setProp(text);
        setNon("");
        setuser("");
        setImg("");
        document.querySelector('.texttt').value = "";
        status=true;
      }
    }
    else{
      document.querySelector('.error-div').innerHTML = "Enter something first*";
    }

  }, [prop, setProp]);


  const renderUser = useCallback(()=>{
    if(status){
      document.querySelector('.error-div').innerHTML = "";
      document.querySelector('.nonDiv').innerHTML = "";
      const index = Math.floor(Math.random() * data.length);
      status = false;
      setuser(data[index]);
    }
    else{
      document.querySelector('.error-div').innerHTML = "Enter New Property first*";
      setProp("");
      setNon("");
      setuser("");
      setEmoji("");
      setImg("");
    }

    
  },[user, setuser]);

  const renderEmoji = useCallback(()=>{

    if(status){
      document.querySelector('.error-div').innerHTML = "";
      document.querySelector('.emojiDiv').innerHTML = "";
      const index = Math.floor(Math.random() * emojis.length);
      status = false;
      setEmoji(emojis[index]);
    }
    else{
      document.querySelector('.error-div').innerHTML = "Enter New Property first*";
      setProp("");
      setNon("");
      setuser("");
      setEmoji("");
      setImg("");
    }


  },[emoji, setEmoji])

  const pickNon = useCallback(()=>{
    if(status){
      document.querySelector('.error-div').innerHTML = "";
      document.querySelector('.nameDiv').innerHTML = "";
      const index = Math.floor(Math.random() * nons.length);
      status = false;
      setNon(nons[index]);
    }
    else{
      document.querySelector('.error-div').innerHTML = "Enter New Property first*";
      setProp("");
      setNon("");
      setuser("");
      setEmoji("");
      setImg("");
    }

  },[non, setNon]);

  const renderImg = useCallback(()=>{
    if(status){
      document.querySelector('.error-div').innerHTML = "";
      document.querySelector('.nonDiv').innerHTML = "";
      const index = Math.floor(Math.random() * images.length);
      status = false;
      setImg(images[index]);
    }
    else{
      document.querySelector('.error-div').innerHTML = "Enter New Property first*";
      setProp("");
      setNon("");
      setuser("");
      setEmoji("");
      setImg("");
    }

    
  },[user, setuser]);
  

  const reset = ()=>{
    setProp("");
    setNon("");
    setuser("");
    setEmoji("");
    setImg("");
    status = false;
    document.querySelector('.error-div').innerHTML = "";
    location.reload();
  }
  
  return (
    <>
      <div className='font-bold mb-10 text-9xl text-cyan-300 propp'>{prop}</div>
      <div className='flex justify-center bg-yellow-500 items-center p-2 flex-col relative'>
        <div className='flex flex-col'>
          <div>
            <div>
              <div className='flex justify-start text-gray-700 info-div'>names: {data.length},   emojis: {emojis.length}, pickachu: {nons.length}, images: {images.length}</div>
            </div>
            <div className='flex justify-center '>
              <div>
                <input type="text" placeholder='enter literally anything' className='p-2 texttt mt-2' />
              </div>
              <div className='flex justify-end absolute right-1'>
                <button className='bg-red-500 p-1 text-white mt-2' onClick={reset}>Reset</button>
              </div>
            </div>
            <div>
              <button className='ml-5 bg-green-700 p-1 text-white mt-2 addPropBtn' onClick={addProperty}>Add Property</button>
            </div>
          </div>

          <div className='grid [grid-template-columns:1fr_1fr_1fr] gap-4 mt-4'>
            <button className=' bg-black text-cyan-200 rNameBtn' onClick={renderUser}>Pick Random Name</button>
            <button className=' bg-black text-red-500  rUsBtn' onClick={pickNon}>Pickachu</button>
            <button className=' bg-black text-red-500  rEmojiBtn' onClick={renderEmoji}>Pick Random Emoji 🗿</button>

            
            <button className=' bg-black text-red-500  rEmojiBtn' onClick={renderImg}>Pick Random Image</button>
          </div>
        </div>

        

        <div className='error-div text-red-500 font-bold'></div>

      </div>

      
      <div className='flex justify-center mt-10'>
          <img src={img} className='imgEle'></img>
      </div>
      

      <div className='font-bold text-9xl mt-10 nameDiv text-cyan-300 '>{user}</div>
      <div className='font-bold text-9xl mt-10 nonDiv text-red-500 '>{non}</div>
      <div className='font-bold text-9xl mt-10 emojiDiv text-cyan-300 ' >{emoji}</div>

      
      

      
    </>
  )
}

export default Users



// return (
//   <>
//     <div className='font-bold mb-20 text-9xl text-cyan-300'>{prop}</div>
//     <div className='flex justify-center bg-yellow-500 items-center p-2 flex-col'>
//       <div className='flex'>
//         <div>
//           <input type="text" placeholder='enter literally anything' className='p-2 texttt mt-2' />
//         </div>

//         <div>
//           <button className='ml-5 bg-black p-2 text-cyan-200 mt-2' onClick={addProperty}>Add Property</button>
//           <button className='ml-5 bg-black p-2 text-cyan-200 mt-2' onClick={renderUser}>Pick Random Name</button>
//           <button className='ml-5 bg-black p-2 text-red-500 mt-2' onClick={pickNon}>Pickachu</button>
//           <button className='ml-5 bg-black p-2 text-red-500 mt-2' onClick={renderEmoji}>Pick Random Emoji 🗿</button>
//         </div>
//       </div>

//       <div>
//         <button className='bg-black p-2 text-cyan-200 mt-2' onClick={reset}>Reset</button>
//       </div>

//       <div className='error-div text-red-500 font-bold'></div>

//     </div>

//     <div className='font-bold text-9xl mt-10 nameDiv text-cyan-300'>{user}</div>
//     <div className='font-bold text-9xl mt-10 nonDiv text-red-500'>{non}</div>
//     <div className='font-bold text-9xl mt-10 emojiDiv text-cyan-300' >{emoji}</div>
//   </>
// )

