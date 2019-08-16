import React, { Component } from 'react';
import './module.css';

class Calculator extends Component {

    state = {
        price: '',
        percent: '',
        showResult: false,
        result: 0
    };

    handleInputChange = event => {
        // Pull the name and value properties off of the event.target (the element which triggered the event)
        const { name, value } = event.target;

        // Set the state for the appropriate input field
        this.setState({
            [name]: value
        });
    };

    handleReset = event => {
        event.preventDefault()
        this.setState({ price: "", percent: "", showResult: false });
    }

    percentage = (n, percent) => {
        return (n * percent / 100).toFixed(2);
    }

    handleSubmit = event => {
        event.preventDefault();
        // console.log(`Bill: ${this.state.bill}\nParty: ${this.state.party}\nTip: ${this.state.tip}`);
        let discountedPrice = (n, percent) => {
            let percentage = (n * percent / 100).toFixed(2)
            return n - percentage;
        }

        this.setState({ result: discountedPrice(this.state.price, this.state.percent) });


        if (!isNaN(this.state.result)) {
            this.setState({ showResult: true })
        } else {
            this.setState({ showResult: false })
        }

    }

    render() {
        return (
            <>
                <div className=' row justify-content-md-center text-center mt-3'>
                    <form className='col-sm-12'>

                        {/* Hidden */}
                        {this.state.showResult ?
                            <div className='row justify-content-md-center text-center mt-3 mx-auto'>
                                <div className='col-sm-12 text-center mx-auto'>
                                    {/* Each Person<br></br> Pays:<br></br> <span className='bg-primary text-white rounded-pill pl-2 pr-2'> ${this.state.result.toFixed(2)} </span> */}

                                    <div className='row justify-content-sm-center p-2 m-2 mx-auto'>
                                        <div className='col-md-3 border border-secondary rounded-lg p-2'>

                                            <div className='d-flex justify-content-between'>
                                                <div className=''>
                                                    Original Price:
                                                    </div>
                                                <div className=''>
                                                    <span className='border-bottom border-success text-success'>${this.state.price}</span>
                                                </div>
                                            </div>

                                            <div className='d-flex justify-content-between'>
                                                <div className=''>
                                                    Percent Off:
                                                    </div>
                                                <div className=''>
                                                    <span className='border-bottom border-primary text-primary'>{this.state.percent}%</span>
                                                </div>
                                            </div>

                                            <p className='border-bottom border-dark mt-2'></p>

                                            <div className='d-flex justify-content-between'>
                                                <div className=''>
                                                    Your Discounted Price is:
                                                    </div>
                                                <div className=''>
                                                    <span className='bg-primary text-white rounded-pill pl-2 pr-2'> ${this.state.result.toFixed(2)}</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <button className='btn btn-dark mt-3' onClick={this.handleReset}>Reset</button>
                                </div>
                            </div>
                            : null
                        }

                        {!this.state.showResult ?
                            <label className=''> Original Item Price <br></br>
                                <input id='box1' className='rounded-lg text-center'
                                    type="number" pattern="[0-9]*" inputMode="numeric"
                                    name='price'
                                    placeholder='$0.00'
                                    value={this.state.price}
                                    onChange={this.handleInputChange}
                                    required />
                            </label>
                            : null
                        }

                        <br></br><br></br>

                        {!this.state.showResult ?
                            <label className=''> Discount Amount <br></br>
                                <input id='box3' className='rounded-lg text-center'
                                    type="number" pattern="[0-9]*" inputMode="numeric"
                                    name='percent'
                                    placeholder='15%'
                                    value={this.state.percent}
                                    onChange={this.handleInputChange}
                                    required></input>
                            </label>
                            : null
                        }

                        <br></br><br></br>

                        <label>
                            {!this.state.showResult ?
                                <button className='btn btn-warning' disabled={this.state.price === '' || this.state.percent === '' ? true : false} onClick={this.handleSubmit}>Submit</button>
                                : null
                            }
                        </label>
                    </form>
                </div>
            </>
        )
    }
}

export default Calculator;