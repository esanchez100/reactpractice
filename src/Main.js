import React, { Component } from "react"


class Main extends Component {
    state = {

    };

    render() {
        return (
            <div>
                <h1>Welcome!</h1>
                <form>
                    <input type="text"
                        id="user"
                        name="user"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        placeholder="Start typing...">
                    </input>
                </form>

            </div>)
    }
}

export default Main;