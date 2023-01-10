import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component, ReactNode } from "react";
import { Block, Card, Columns, Content, Form, Heading, Icon, Section, Tag } from "react-bulma-components";

type MoveProps = {
    name: string,
    stat: string,
    children: ReactNode,
}

type MoveState = {
    collapsed: boolean,
};

export default class Move extends Component<MoveProps, MoveState> {
    constructor(props: MoveProps) {
        super(props);
        this.state = {
            collapsed: true,
        };
    }

    render() {
        return <Block>
            <Card>
                <Card.Header style={{ cursor: 'pointer' }} onClick={() => this.setState({ collapsed: !this.state.collapsed })}>
                    <Card.Header.Title>
                        {this.props.name} <Tag color='primary' rounded={true}>{this.props.stat}</Tag>
                    </Card.Header.Title>
                    <Card.Header.Icon><Icon>{this.state.collapsed ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}</Icon></Card.Header.Icon>
                </Card.Header>
                {!this.state.collapsed &&
                    <Card.Content>
                        <Content>
                            {this.props.children}
                        </Content>
                    </Card.Content>
                }
            </Card>
        </Block>;
    }
}