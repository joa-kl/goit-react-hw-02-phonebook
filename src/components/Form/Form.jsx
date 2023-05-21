import { nanoid } from "nanoid";
import { Component } from "react";

export class Form extends Component {
    loginInputId = nanoid();

    render() {
        return (
            <form>
                <label htmlFor={this.loginInputId}>Name</label>
                {/* <input type="text" name="login" id={this.loginInputId} /> */}
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    id={this.loginInputId}
                    required
                />
                <button>Add to contact</button>
            </form>
        )
    }
}