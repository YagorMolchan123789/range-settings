import  { useState} from 'react';
import './App.css';

function App() {

  const successMessage : string = "The range settings are successfully saved";
  const failMessage : string = "The boundaries of the numerical ranges of accelerometer values ​​are incorrectly set";

  const [minValue1, setMinValue1] = useState(0);
  const [maxValue1, setMaxValue1] = useState(0);
  const [minValue2, setMinValue2] = useState(0);
  const [maxValue2, setMaxValue2] = useState(0);
  const [minValue3, setMinValue3] = useState(0);
  const [maxValue3, setMaxValue3] = useState(0);

  const [infoMessage, setInfoMessage] = useState('');
  const [infoMessageClass, setInfoMessageClass] = useState('');


  const handleSubmit = async(e: any) => {

    e.preventDefault();

    let map = new Map([[minValue1, maxValue1], 
      [minValue2, maxValue2], [minValue3, maxValue3]]);

    let arr = [minValue1, maxValue1, 
      minValue2, maxValue2, minValue3, maxValue3].sort((a, b) => {
      return a - b;
    });

    for(let i = 0; i < arr.length; i++){
      if(i%2==0 && map.get(arr[i])!=arr[i+1]){
        setInfoMessage(failMessage);
        setInfoMessageClass('fail');
        return;
      }
    }

    setInfoMessage(successMessage);
    setInfoMessageClass('success');
  }

  return (
    <div className="App">
      <header>
        <div className="flex" style={{marginLeft: '16px'}}>
          <text>AXL</text>
          <sup>v1.2</sup>
        </div>
        <div className="flex" style={{flexGrow: 1, textTransform: 'none', fontWeight: 'normal', alignItems: 'center',
          fontSize: '12pt' }}>            
        </div>
        <div className="flex" style={{marginRight: '16px'}}>
          <div>
            X:&nbsp;&nbsp;
            <text id="axBox">N/A</text>
          </div>
        </div>
      </header>
      <div className='content' style={{marginTop: '32px'}}>        
        <div className='flex column'>
          <div><b>Ranges Settings:</b></div>
          <div className='strings'>
            <div className='string'>
              Range 1: 
              <div className='text'>
                <text id="range1min">{minValue1}</text>
                  <text> &lt; x &lt; </text>
                <text id="range1max">{maxValue1}</text>
              </div>              
            </div>
            <div className='string'>
              Range 2:
              <div className='text'>
                <text id="range2min">{minValue2}</text>
                  <text> &lt; x &lt; </text>
                <text id="range2max">{maxValue2}</text>
              </div>              
            </div>
            <div className='string'>
              Range 3:
              <div className='text'>
                <text id="range1min">{minValue3}</text>
                  <text> &lt; x &lt; </text>
                <text id="range1max">{maxValue3}</text>
              </div>              
            </div>
          </div>
        </div>
        <br/>
        <div className='flex column'>
          <div>
            <b>New ranges Settings:</b>
          </div>
          <form method='post' onSubmit={handleSubmit}>
            <div className='forms'>
              <div className='string'>
                Range 1:
                <div className='text'>
                  <div className='value'>
                    <input type="number" name="minValue1" min="0" max="360" step="1" value={minValue1}
                      onChange={(e) => setMinValue1(parseInt(e.target.value))}/>
                    <text> &lt; x &lt; </text>
                    <input type="number" name="maxValue1" min="0" max="360" value={maxValue1}
                      onChange={(e) => setMaxValue1(parseInt(e.target.value))}/>
                  </div>
                </div>
              </div>
              <div className='string'>
                Range 2:
                <div className='text'>
                  <div className='value'>
                    <input type="number" name="minValue2" min="0" max="360" value={minValue2}
                      onChange={(e) => setMinValue2(parseInt(e.target.value))}/>
                    <text> &lt; x &lt; </text>
                    <input type="number" name="maxValue2" min="0" max="360" value={maxValue2}
                      onChange={(e) => setMaxValue2(parseInt(e.target.value))}/>
                  </div>
                </div>              
              </div>
              <div className='string'>
                Range 3:
                <div className='text'>
                  <div className='value'>
                    <input type="number" name="minValue3" min="0" max="360" value={minValue3}
                      onChange={(e) => setMinValue3(parseInt(e.target.value))}/>
                    <text> &lt; x &lt; </text>
                    <input type="number" name="maxValue3" min="0" max="360" value={maxValue3}
                      onChange={(e) => setMaxValue3(parseInt(e.target.value))}/>
                  </div>
                </div>
              </div>
            </div>
            <h4 className={infoMessageClass}>{infoMessage}</h4>            
            <input className='button' type="submit" value="Save"/>
          </form>          
        </div>
        <br/>
        <div className='flex column'>
          <div><b>Device Work:</b></div>
          <div className='string'>Timer stop WiFi, sec: <text id="ayBox">N/A</text></div>
          <div className='string'>Timer work I2C: <text id="id_rstBox">N/A</text></div>
        </div>
      </div>
    </div>
  );
}

export default App;
