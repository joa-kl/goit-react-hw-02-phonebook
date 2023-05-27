import { Component } from "react";

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = evt => {
        const { name, value } = evt.target;
        this.setState({ [name]: value });
    };
    
    handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        this.props.handleSubmit(this.state);
        form.reset();
    };

    render() {
    
        const { name, number } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        // id={this.loginInputId}
                        placeholder="Enter name"
                        value={name}
                        onChange={this.handleChange}
                        required
                />
                <label>Number</label>
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        placeholder="Enter phone number"
                        value={number}
                        onChange={this.handleChange}
                        required
                        />

                    <button type="submit">Add to contact</button>
            </form>
        )
    
    }
}