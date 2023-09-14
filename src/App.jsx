import { useState } from 'react';
// import './App.css';
import Buttons from './components/buttons';

// created a list to avoid repeating myself
const buttonData = [
	{
		_id: 1,
		content: 'AC',
		type: 'func',
	},
	{
		_id: 2,
		content: '+/-',
		type: 'func',
	},
	{
		_id: 3,
		content: '%',
		type: 'func',
	},
	{
		_id: 4,
		content: '/',
		type: 'oprand',
	},
	{
		_id: 5,
		content: '7',
		type: 'num',
	},
	{
		_id: 6,
		content: '8',
		type: 'num',
	},
	{
		_id: 7,
		content: '9',
		type: 'num',
	},
	{
		_id: 8,
		content: 'x',
		type: 'oprand',
	},
	{
		_id: 9,
		content: '4',
		type: 'num',
	},
	{
		_id: 10,
		content: '5',
		type: 'num',
	},
	{
		_id: 11,
		content: '6',
		type: 'num',
	},
	{
		_id: 12,
		content: '-',
		type: 'oprand',
	},
	{
		_id: 13,
		content: '1',
		type: 'num',
	},
	{
		_id: 14,
		content: '2',
		type: 'num',
	},
	{
		_id: 15,
		content: '3',
		type: 'num',
	},
	{
		_id: 16,
		content: '+',
		type: 'oprand',
	},
	{
		_id: 17,
		content: '0',
		type: 'num',
	},
	{
		_id: 18,
		content: '.',
		type: 'num',
	},
	{
		_id: 19,
		content: '=',
		type: 'oprand',
	},
];

function App() {
  
  // use to get value
  const [ display, setDisplay ] = useState( '0' );
  //store value in memory
  const [ storeDisplay, setStoreDisplay ] = useState( null );
  // store oprand value from chaning
  const [ storeOprand, setStoreOprand ] = useState( null );

  const handleButtonClick = ( content ) => {
    const keep = parseFloat( display )

    if ( content === 'AC' ) {
      setDisplay( '0' );
      setStoreDisplay(null);
      setStoreOprand( null );
      return;
    }
    
    if ( content === '+/-' ) {
      setDisplay( ( keep * -1 ).toString() )
      return;
    }

    if ( content === '%' ) {
      setDisplay( ( keep / 100 ).toString() )
      setStoreDisplay( null );
      setStoreOprand( null );
      return;
    }
    if (content === '+') {
      setStoreDisplay(parseFloat(display));
      setDisplay('0')
      setStoreOprand('+');
      return;
    }

    if (content === '-') {
      setStoreDisplay(parseFloat(display));
      setDisplay('0')
      setStoreOprand('-');
      return;
    }

    if (content === 'x') {
      setStoreDisplay(parseFloat(display));
      setDisplay('0')
      setStoreOprand('x');
      return;
    }

    if (content === '/') {
      setStoreDisplay(parseFloat(display));
      setDisplay('0')
      setStoreOprand('/');
      return;
    }

    if (content === '=') {
      if (!storeOprand) return;

      if (storeOprand === '+') {
        setDisplay((storeDisplay + parseFloat(display)).toString())
      } else if (storeOprand === '-') {
        setDisplay((storeDisplay - parseFloat(display)).toString())
      } else if (storeOprand === 'x') {
        setDisplay((storeDisplay * parseFloat(display)).toString())
      } else if (storeOprand === '/') {
        setDisplay((storeDisplay / parseFloat(display)).toString())
      }
      setStoreDisplay( null );
      setStoreOprand( null )
      return;
    }
    // to check if button works
    // console.log( 'clicked:', content )

    setDisplay((parseFloat(keep + content)).toString())
  }
	return (
		<>
			<div className='app-content'>
				<div className='calculator-self calculator-bg-self'>
					<div className='show-element'>{display}</div>
          <div className='buttons-container'>
            {buttonData.map( ( button ) => <Buttons key={button._id} content={button.content} type={button.type} handleClick={() => handleButtonClick( button.content )} />)}
          </div>
				</div>
			</div>
		</>
	);
}

export default App;
