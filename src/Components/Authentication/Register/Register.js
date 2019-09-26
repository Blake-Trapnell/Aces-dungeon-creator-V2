import React, {Component} from "react"
import "./Register.css"
import Swal from "sweetalert2"
import Axios from "axios"
import {withRouter} from "react-router-dom"

class Register extends Component {
    state = {
        username: "",
        password: "",
        passwordconfirm: "",
        email: "",
        promocode: "",
        displaypromo: false,
        prime: false,
        prime_time: '',
    }

    handleChange(key, e) {
        this.setState({
            [key]: e
        })
    }
    registerMe = async () => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          })
        const{username, password, passwordconfirm, email, prime, prime_time} = this.state
        if(password !== passwordconfirm) {
            return   Toast.fire({
                type: "error",
                title: `passwords do not match`
            })
            }
        else if(username === "" || password === "" || passwordconfirm === "") {
            return Toast.fire({
                type: "error",
                title: `please fill in required fields`
            })
        }
        else if(password.length < 5) {
            return Toast.fire({
                type: "error",
                title: `passwords must be 5 or more characters`
            })
        }
       const user = await Axios.post('auth/users/register', {username, password, passwordconfirm, email, prime, prime_time})
       if(user.data.message === "logged in") {
         Toast.fire({
            type: "success",
            title: `Welcome ${username}`
        })
         return  this.props.history.push('/home')
       }
       else
        return Toast.fire({
            type: "error",
            title: `username & or email is already in use`
        })
       
    }

promoCode = (promocode) => {
   this.setState({
       promocode: ""
   })
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})
    if(promocode.length > 0) {
        Axios.post("/auth/promo", {promocode}).then(res => {
            if(res.data.length > 0) {
               this.setState({
                    prime: true,
                    prime_time: res.data[0].promo_time
                })
                Toast.fire({
                    type: "success",
                    title: 'Promo code Applied'
                })
            }
            else {
                Toast.fire({
                    type: "error",
                    title: 'invalid promo code'
                })
            }
        } 

        )
    }
    this.setState({
        displaypromo: !this.state.displaypromo,
    })
}

    render() {
        const {password, passwordconfirm} = this.state
        return (
            <div className="register-outer">
                {!this.state.displaypromo ? 
                <div className="register-upper">
                    <h1 className="register-text">Username</h1>
                    <input onChange={(e)=>this.handleChange("username",e.target.value)} type="text" value={this.state.username} />
                    <h1 className="register-text">Password</h1>
                    <input onChange={(e)=>this.handleChange("password",e.target.value)} type="password" value={this.state.password} />
                    <h1 style={password === passwordconfirm ? null : {color: "red"}} className="register-text">Confirm Password</h1>
                    <input onChange={(e)=>this.handleChange("passwordconfirm",e.target.value)} type="password" value={this.state.passwordconfirm} />
                    <h1 className="register-text">Email</h1>
                    <input onChange={(e)=>this.handleChange("email",e.target.value)} type="text" value={this.state.email} />
                        <div className="register-container">
                    <button onClick={()=> this.registerMe()} className='log-me-in' >Register</button>
                        <button onClick={()=>this.promoCode(this.state.promocode)} className="log-me-in">Promo code</button>
                        </div>
                </div>
                : <div className="register-upper">
                    <input style={{margin: "20px 0 0 0"}} onChange={(e)=>this.handleChange("promocode", e.target.value)} type="text"/>
                    <div className="register-button-container">
                        <button onClick={()=>this.promoCode(this.state.promocode)} className="log-me-in">Apply Promo</button>
                        <button onClick={()=>this.promoCode(this.state.promocode)} className="log-me-in">Cancel</button>
                    </div>

                    </div>}

            </div>
        )
    }
}

export default withRouter(Register)