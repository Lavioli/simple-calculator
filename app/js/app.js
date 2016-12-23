import React, { Component } from 'react';

export class App extends Component {
  constructor(props) {
    super();
    this.state = {
        inputValue: [],
        clearInput: false,
        prevOp: null,
    }
  }

  checkClear () {
    if (this.state.clearInput && this.state.inputValue.length < 3) {
        this.refs.display.value = '';
        this.setState({
            clearInput: false
        })
    }
  }

  onClickNum(event) {
    event.preventDefault();
    this.checkClear();
    this.refs.display.value += event.target.value;
  }

  toggleAbs () {
    if (this.refs.display.value[0] === '-') {
        this.refs.display.value = Math.abs(parseFloat(this.refs.display.value));
    } else {
        this.refs.display.value = -Math.abs(parseFloat(this.refs.display.value));
    }
  }

  percentage () {
    this.refs.display.value = this.refs.display.value/100;
  }

  onClickOperator(event) {
    event.preventDefault();
    let inputValue = this.state.inputValue;
    let skipOp = false;

    //push operator if the previous operator is not =
    if (this.state.prevOp === '=') {
        inputValue.push(event.target.value);
        skipOp = true;
    }
    // push numbers into array
    if (this.state.prevOp !== '=') {
        inputValue.push(this.refs.display.value);
    }

    //perform operation if it's a full equation
    if (this.state.inputValue.length === 3) {
        inputValue = this.performOp(this.state.inputValue);
        this.refs.display.value = inputValue[0];
    }

    // push operator into array
    if (event.target.value !== '=' && !skipOp) {
        inputValue.push(event.target.value);
    }
    // add to state
    const clearInput = true;
    const prevOp = event.target.value;
    this.setState({ inputValue, clearInput, prevOp });

  }

  clearInput (){
    this.refs.display.value = '';
    this.setState({
        inputValue: [],
        clearInput: false,
        prevOp: null
    })
  }

  performOp (arr) {
    let res = []
    if (arr[1] === '+') {
        res[0] = parseFloat(arr[0]) + parseFloat(arr[2]);
    }

    if (arr[1] === '−') {
        res[0] = parseFloat(arr[0]) - parseFloat(arr[2]);
    }

    if (arr[1] === '×') {
        res[0] = parseFloat(arr[0]) * parseFloat(arr[2]);
    }
    if (arr[1] === '÷') {
        res[0] = parseFloat(arr[0]) / parseFloat(arr[2]);
    }

    return res;
  }

  render() {
    return (
      <div id="calculator" className="calculator">
        <input ref="display" className="result" defaultValue={ this.state.inputValue[0] } disabled />
        <div className="calculator__keypad">
            <button className="clear grey" onClick={this.clearInput.bind(this)}>AC</button>
            <button className="grey" onClick={this.toggleAbs.bind(this)}>+/−</button>
            <button className="grey" onClick={this.percentage.bind(this)}>%</button>
            <button className="operator" onClick={this.onClickOperator.bind(this)} value="÷">÷</button>
            <button onClick={this.onClickNum.bind(this)} value={'7'}>7</button>
            <button onClick={this.onClickNum.bind(this)} value={'8'}>8</button>
            <button onClick={this.onClickNum.bind(this)} value={'9'}>9</button>
            <button className="operator" onClick={this.onClickOperator.bind(this)} value="×">×</button>

            <button onClick={this.onClickNum.bind(this)} value={'4'}>4</button>
            <button onClick={this.onClickNum.bind(this)} value={'5'}>5</button>
            <button onClick={this.onClickNum.bind(this)} value={'6'}>6</button>
            <button className="operator" onClick={this.onClickOperator.bind(this)} value="−">−</button>
            
            <button onClick={this.onClickNum.bind(this)} value={'1'}>1</button>
            <button onClick={this.onClickNum.bind(this)} value={'2'}>2</button>
            <button onClick={this.onClickNum.bind(this)} value={'3'}>3</button>
            <button className="operator" onClick={this.onClickOperator.bind(this)} value="+">+</button>

            <button className="double" onClick={this.onClickNum.bind(this)} value={'0'}>0</button>
            <button onClick={this.onClickNum.bind(this)} value=".">.</button>
            <button className="operator" onClick={this.onClickOperator.bind(this)} value="=">=</button>
        </div>
      </div>
    )
  }
}

export default App;
