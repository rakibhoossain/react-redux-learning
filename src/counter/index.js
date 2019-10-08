import React from 'react'
import {connect} from 'react-redux'

const Counter = (props)=>{
  return(
    <div>
      <h1>{props.count}</h1>
      <button onClick={props.add}>ADD</button>
      <button onClick={props.sub}>SUB</button>
    </div>
  )
  
}

const mapStateToProps = (state)=>{
  return {
    count: state
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    add: ()=>dispatch({type:'ADD'}),
    sub: ()=>dispatch({type:'SUB'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)