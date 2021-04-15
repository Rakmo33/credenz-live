import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import {Container, Button} from 'react-bootstrap';

class Event extends Component{
    state={
        shouldEdit: false,
        shouldAdd: false,
        Event:{
            name: "PISB Member here",
            participants:4,
            details:"hey there you are in the details"
        },
        selectEvent:null
    }

    onChangeHandler=(event)=>{
        const target= event.target;
        // const updateEvent={
        //     ...this.state.Event
        // }
        if(target.id==='name'){
            //console.log(event.target.id);
            //console.log(event.target.value);
        
            this.setState(prevState=>({
                Event:{
                    ...prevState.Event,
                    name:target.value
                },
            }));
            
        }
        else if(target.id==='participant')
        {
            this.setState(prevState=>({
                Event:{
                    ...prevState.Event,
                    participants:target.value
                }
            }));
        } 
        else if(target.id==='details')
        {
            this.setState(prevState=>({
                Event:{
                    ...prevState.Event,
                    details:target.value
                }
            }));
        } 
    }

    onSelectEditEvent=(e)=>{
        // e.preventDefault();
        //console.log("in editttt")
        const target = e.target;
            this.setState({selectEvent:target.value});
            // //console.log(this.state.selectEvent);
        
    }

    onSubmitHandler=(e)=>{
        e.preventDefault();
        const eve= this.state.Event;
        this.setState({Event : eve});
        //console.log("event-name : " + this.state.Event.name)
        //console.log("event-deyails : " + this.state.Event.details)
        //console.log("select" + this.state.selectEvent)
    }


    addEvent=()=>{
        return(<div>
            <Form>
                <Form.Group>
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control id="name" type="text" onChange={this.onChangeHandler} placeholder="Enter Event Name" />
                </Form.Group>
            
                <Form.Group >
                    <Form.Label>No. of Participant</Form.Label>
                    <Form.Control id="participant" onChange={this.onChangeHandler} type="number" placeholder="count of participants" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Event details </Form.Label>
                    <Form.Control id="details" onChange={this.onChangeHandler} as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.onSubmitHandler}>
                    Submit
                </Button>
             
             
            </Form>
        </div>);
    }

     editEvent =()=>{
        return(<div>
            <Form>
                <Form.Group >
                    <Form.Label >Example select</Form.Label>
                    <Form.Control  id="editevent" as="select" onChange={this.onSelectEditEvent}>
                    <option >select</option>
                    <option >Clash</option>
                    <option>RC</option>
                    <option>Enigma</option>
                    <option>Quiz</option>
                    </Form.Control>
                </Form.Group>
                {this.state.selectEvent ?  
                <div>  
                <Form.Group>
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control id="name" type="text" value={this.state.Event.name} onChange={this.onChangeHandler} placeholder="Enter Event Name" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>No. of Participant</Form.Label>
                    <Form.Control id="participant" type="number" value={this.state.Event.participants} onChange={this.onChangeHandler} placeholder="count of participants" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Event details </Form.Label>
                    <Form.Control id="details" as="textarea" value={this.state.Event.details} onChange={this.onChangeHandler} rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.onSubmitHandler}>
                    Submit
                </Button>
                   </div> : null }
            </Form>
            </div>
         );
    }


    render(){
        let form=null;
        if(this.props.choice === "1"){
            form= this.addEvent();
        }else{
            form=this.editEvent();
        }

        return(<div>
            <Container>
           {form}
           </Container>
        </div>);
    }
}

export default Event;

/*
class Event extends Component{
    state={
        shouldEdit: false,
        shouldAdd: false,
        Event:{
            name: "PISB Member here",
            participants:4,
            details:"hey there you are in the details"
        },
        selectEvent:null
    }

    onChangeHandler=(event)=>{
        const target= event.target;
        // const updateEvent={
        //     ...this.state.Event
        // }
        if(target.id==='name'){
            //console.log(event.target.id);
            //console.log(event.target.value);
        
            this.setState(prevState=>({
                Event:{
                    ...prevState.Event,
                    name:target.value
                }
            }),()=>//console.log(this.state.Event));
            ;
        }
        else if(target.id==='participant')
        {
            this.setState(prevState=>({
                Event:{
                    ...prevState.Event,
                    participants:target.value
                }
            }),()=>//console.log(this.state.Event));
        } 
        else if(target.id==='details')
        {
            this.setState(prevState=>({
                Event:{
                    ...prevState.Event,
                    details:target.value
                }
            }),()=>//console.log(this.state.Event));
        } 
    }

    onSelectEditEvent=(e)=>{
        // e.preventDefault();
        //console.log("in editttt")
        const target = e.target;
            this.setState({selectEvent:target.value});
            // //console.log(this.state.selectEvent);
        
    }

    onSubmitHandler=(e)=>{
        e.preventDefault();
        const eve= this.state.Event;
        this.setState({Event : eve});
        //console.log(eve);
    }

    addEvent=()=>{
        return(<div>
            <Form>
                <Form.Group>
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control id="name" type="text" onChange={this.onChangeHandler} placeholder="Enter Event Name" />
                </Form.Group>
            
                <Form.Group >
                    <Form.Label>No. of Participant</Form.Label>
                    <Form.Control id="participant" onChange={this.onChangeHandler} type="number" placeholder="count of participants" />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Event details </Form.Label>
                    <Form.Control id="details" onChange={this.onChangeHandler} as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.onSubmitHandler}>
                    Submit
                </Button>
             
             
            </Form>
        </div>);
    }

     editEvent =()=>{
        return(<div>
            <Form>
                <Form.Group >
                    <Form.Label >Example select</Form.Label>
                    <Form.Control  id="editevent" as="select" onChange={this.onSelectEditEvent}>
                    <option >select</option>
                    <option >2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>
                {this.state.selectEvent ?  
                <div>  
                <Form.Group>
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control id="name" type="text" value={this.state.Event.name} onChange={this.onChangeHandler} placeholder="Enter Event Name" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>No. of Participant</Form.Label>
                    <Form.Control id="participant" type="number" value={this.state.Event.participants} onChange={this.onChangeHandler} placeholder="count of participants" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Event details </Form.Label>
                    <Form.Control id="details" as="textarea" value={this.state.Event.details} onChange={this.onChangeHandler} rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.onSubmitHandler}>
                    Submit
                </Button>
                   </div> : null }
            </Form>
            </div>
         );
    }
     
    addEvent=()=>{
        return(<div>
            <Form>
                <Form.Group>
                    <Form.Label>Update headline</Form.Label>
                    <Form.Control id="name" type="text" onChange={this.onChangeHandler} placeholder="Enter Event Name" />
                </Form.Group>
             
                <Form.Group >
                    <Form.Label>Update info</Form.Label>
                    <Form.Control id="details" onChange={this.onChangeHandler} as="textarea" rows={3} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={this.onSubmitHandler}>
                    Submit
                </Button>
            </Form>
        </div>);
    } 


    render(){
        let form=null;
        if(this.props.choice === "1"){
            form= this.addEvent();
        }else{
            form=this.editEvent();
        }

        return(<div>
            <Container>
           {form}
           </Container>
        </div>);
    }
}

export default Event;
*/