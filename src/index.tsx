import { PiletApi} from 'piral-store-shell';
import React, {Component} from "react";
import './styles.scss';

interface IBlueComponentProps {
  piral: PiletApi
}

interface IBlueComponentState {
    message: string
}

class BlueComponent extends Component<IBlueComponentProps, IBlueComponentState> {
    constructor(props) {
        super(props);

        this.state = {
            message: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            message: e.target.value
        })
    };

    sendMessage() {
        this.props.piral.setData('blue-data', this.state.message);
    }

    render() {
        return (
            <div className="blue-wrapper">
                <strong>Blue Component</strong><br/>
                <textarea value={this.state.message} onChange={e => this.handleChange(e)} /><br/>
                <button onClick={this.sendMessage}>Enviar Datos</button>
            </div>
        )
    }
}

export function setup(app: PiletApi) {
  app.registerTile(({piral}) => {
      return <BlueComponent piral={piral} />
  });
}
