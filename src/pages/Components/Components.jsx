// import components
import Counter from './Components/Counter/Counter'
import Timer from './Components/Timer/Timer'
import Add from './Components/Add/Add'
import Temperaturs from './Components/Temperaturs/Temperaturs'

import './Components.css'

function Components() {
    return (
      <div className='box11'>
      <div className='body11'>
        <div className='body22'>
          <div className='Timerandcon'>
            <Counter Name='Counter' value={0} />
            <Timer />
          </div>
          <div className='add1'>
            <Add aValue={1} bValue={2} />
          </div>
        </div>
        <Temperaturs />
      </div>
      <br />
    </div>
    );
  }
  
  export default Components;
  