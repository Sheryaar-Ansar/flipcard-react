import { useState } from 'react'

function App() {
  const [back, setBack] = useState('');
  const [front, setFront] = useState('');
  const [data, setData] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [flip, setFlip] = useState(false)

  const handleChangeBack = (e) => {
    setBack(e.target.value);
  }
  const handleChangeFront = (e) => {
    setFront(e.target.value);
  }
  const handleClickSubmit = (e) => {
    e.preventDefault();
    setData([...data, { front: front, back: back }])
    setBack('');
    setFront('')
  }
  const handleFlipToggler = () => {
    setFlip(!flip);
  }
  const handleNextCard = () => {
    setCurrentIdx(currentIdx + 1)
    setFlip(false)

  }
  const handlePrevCard = () => {
    if (data.length > 0) {
      setCurrentIdx(currentIdx - 1)
    }
    setFlip(false)
  }
  console.log(data);


  return (
    <>
      <div className='min-h-screen flex justify-center items-center flex-col bg-slate-700'>
        <div className='flex justify-around w-[500px] items-center'>
          <div>
            <input type="text" placeholder='Enter the front card text' value={front} onChange={handleChangeFront} className='w-150px h-[50px] border border-red-400 rounded-3xl p-2' />
            <input type="text" placeholder='Enter the back card text' value={back} onChange={handleChangeBack} className='w-150px h-[50px] border border-red-400 rounded-3xl ml-4 p-2' />
          </div>
          <button onClick={handleClickSubmit} className='border p-3 bg-red-400 shadow-md shadow-red-600 rounded-lg text-white uppercase font-bold border-red-400'>Submit</button>
        </div>
        <div>
          {data.length > 0 && (
            <div className='mt-[100px]'>
              <div className='w-[500px] h-[360px] bg-transparent flex justify-center items-center flex-col border border-red-400 rounded-md'>
                <h2 className='text-white font-bold text-4xl uppercase'>{!flip ? data[currentIdx].front : data[currentIdx].back}</h2>
                <button onClick={handleFlipToggler} className='mt-[150px] border border-red-400 text-white text-[20px] p-3 rounded-xl uppercase w-[100px] hover:bg-red-400 hover:shadow-md hover:shadow-red-500 transition-colors'>Flip</button>
              </div>
              <div className='flex justify-between w-[500px] items-center mt-[50px]'>
                {currentIdx > 0 ? <button onClick={handlePrevCard} disabled={data.length === 0} className='p-3 text-white uppercase font-bold text-lg border border-red-400 bg-red-400 shadow-red-600 shadow-md w-[150px]'>Previous</button> : ''}
                {currentIdx < data.length - 1 ? (
                  <button onClick={handleNextCard} className='p-3 text-white uppercase font-bold text-lg border border-red-400 bg-red-400 shadow-red-600 shadow-md w-[150px]'>Next</button>
                ) : ''}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
