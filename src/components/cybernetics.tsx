import { faAngleDown, faPlug, faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import { Columns, Content, Dropdown, Heading, Icon, Section, Tag } from "react-bulma-components";
import Move from "./move";

const MINOR_IMPLANTS = [
    {
        id: 'MINOR disarm security',
        name: 'Disarm a Security System',
        stat: 'TECH',
        description: 'When you attempt to remotely access and control a machine or device, roll 2d6+TECH. On a 10+, you gain access to the system and can perform any action you choose, such as gathering information, disrupting the operation of the device, or taking control of it. On a 7-9, you gain partial access to the system, but you must choose one of the following options:',
        options: [
            'You are able to disable or bypass the system, but it takes longer than you anticipated.',
            'You are able to disable or bypass the system, but you must sacrifice something valuable in order to do so.',
            'You are able to disable or bypass the system, but you leave a trace or signature that could be detected later.',
        ],
    },
    {
        id: 'MINOR track target',
        name: 'Track a Target',
        stat: 'RESILIENCE',
        description: 'When you attempt to track a target using your enhanced senses, roll 2d6+RESILIENCE. On a 10+, you are able to follow the target\'s trail, even if they are trying to hide or escape.On a 7-9, you are able to follow the trail, but you must choose one of the following options:',
        options: [
            'You are able to follow the trail, but it takes longer than you anticipated.',
            'You are able to follow the trail, but you must sacrifice something valuable in order to do so.',
            'You are able to follow the trail, but you leave a trace or signature that could be detected later.',
        ],
    },
    {
        id: 'MINOR repair device',
        name: 'Repair a Device',
        stat: 'TECH',
        description: 'When you attempt to repair or upgrade a damaged or malfunctioning device, roll 2d6+TECH. On a 10+, you are able to restore the device to full functionality. On a 7-9, you are able to repair the device, but you must choose one of the following options:',
        options: [
            'You are able to repair the device, but it takes longer than you anticipated.',
            'You are able to repair the device, but you must sacrifice something valuable in order to do so.',
            'You are able to repair the device, but it is not as effective as it was before.',
        ],
    },
    {
        id: 'MINOR adapt situation',
        name: 'Adapt to a Situation',
        stat: 'TECH',
        description: 'When you attempt to quickly adapt to a changing situation, roll 2d6+TECH. On a 10+, you are able to improvise and come up with a plan on the fly that is effective and allows you to take advantage of the situation. On a 7-9, you are able to come up with a plan, but you must choose one of the following options:',
        options: [
            'You are able to come up with a plan, but it takes longer than you anticipated.',
            'You are able to come up with a plan, but you must sacrifice something valuable in order to do so.',
            'You are able to come up with a plan, but it is not as effective as you hoped it would be.',
        ],
    },
];

const MAJOR_IMPLANTS = [
    {
        id: 'MAJOR hack',
        name: 'Hack a System',
        stat: 'TECH',
        description: 'When you attempt to remotely access and control a machine or device, roll 2d6+TECH. On a 10+, you gain access to the system and can perform any action you choose, such as gathering information, disrupting the operation of the device, or taking control of it. On a 7-9, you gain partial access to the system, but you must choose one of the following options:',
        options: [
            'You can perform a single action, but it will take longer than you anticipated.',
            'You can perform multiple actions, but you will leave a trace or signature that could be detected later.',
            'You can perform multiple actions, but you will need to make a hard choice or sacrifice something valuable in order to do so.',
        ],
    },
    {
        id: 'MAJOR overwhelm opponent',
        name: 'Overwhelm an Opponent',
        stat: 'RESILIENCE',
        description: 'When you attempt to overpower an opponent using your enhanced strength or speed, roll 2d6+RESILIENCE. On a 10+, you are able to knock the opponent off balance, disarm them, or otherwise gain the upper hand in the fight. On a 7-9, you are able to gain the upper hand, but you must choose one of the following options:',
        options: [
            'You are able to gain the upper hand, but it takes longer than you anticipated.',
            'You are able to gain the upper hand, but you expose yourself to danger in the process.',
            'You are able to gain the upper hand, but you must make a hard choice or sacrifice something valuable in order to do so.',
        ],
    },
    {
        id: 'MAJOR resist hack',
        name: 'Resist a Hack',
        stat: 'TECH',
        description: 'When you attempt to defend against a hacking attempt, roll 2d6+TECH. On a 10+, you are able to successfully defend against the hack and protect your own systems or devices. On a 7-9, you are able to defend against the hack, but you must choose one of the following options:',
        options: [
            'You are able to defend against the hack, but it takes longer than you anticipated.',
            'You are able to defend against the hack, but you must sacrifice something valuable in order to do so.',
            'You are able to defend against the hack, but you leave a trace or signature that could be detected later.',
        ],
    },
];

type CyberneticsState = {
    firstImplant?: string,
    secondImplant?: string,
};

export default class Cybernetics extends Component<{}, CyberneticsState> {
    constructor(props: {}) {
        super(props);
        const implantsStr = window.localStorage.getItem('cybernetics');
        const implants = implantsStr && JSON.parse(implantsStr);
        switch (implants?.length) {
            case 1:
                this.state = { firstImplant: implants[0] };
                break;
            case 2:
                this.state = { firstImplant: implants[0], secondImplant: implants[1] };
                break;
            default:
                this.state = {};
        }
    }

    private setFirstImplant = (implant: string) => {
        if (implant.startsWith('MAJOR')) {
            this.setState({
                firstImplant: implant,
                secondImplant: undefined,
            });
            window.localStorage.setItem('cybernetics', JSON.stringify([implant]));
        } else {
            this.setState({
                firstImplant: implant,
            });
            if (this.state.secondImplant) {
                window.localStorage.setItem('cybernetics', JSON.stringify([implant, this.state.secondImplant]));
            } else {
                window.localStorage.setItem('cybernetics', JSON.stringify([implant]));
            }
        }
    }

    private setSecondImplant = (implant: string) => {
        this.setState({
            secondImplant: implant,
        });
        window.localStorage.setItem('cybernetics', JSON.stringify([this.state.firstImplant, implant]));
    }

    private getImplant(id: string) {
        return MINOR_IMPLANTS.find((implant) => implant.id === id) ?? MAJOR_IMPLANTS.find((implant) => implant.id === id);
    }

    render() {
        const implant1 = this.state.firstImplant ? this.getImplant(this.state.firstImplant) : undefined;
        const implant2 = this.state.secondImplant ? this.getImplant(this.state.secondImplant) : undefined;

        return <Section>
            <Heading>Cybernetic Implants</Heading>
            <Content>Pick two minor <Icon><FontAwesomeIcon icon={faPlug} /></Icon><Icon><FontAwesomeIcon icon={faPlug} /></Icon> or one major <Icon><FontAwesomeIcon icon={faRobot} /></Icon> implant. Don't forget to describe what your implant looks like.</Content>
            <Columns>
                <Columns.Column>
                    <Dropdown label='Pick an Implant' icon={<FontAwesomeIcon icon={faAngleDown} />} onChange={this.setFirstImplant}>
                        {
                            MINOR_IMPLANTS.filter((implant) => !this.state.secondImplant || implant.id !== this.state.secondImplant).map((implant) => <Dropdown.Item key={implant.id} renderAs='a' value={implant.id}><Icon><FontAwesomeIcon icon={faPlug} /></Icon>{implant.name} <Tag color='primary' rounded={true}>{implant.stat}</Tag></Dropdown.Item>)
                        }
                        <Dropdown.Divider />
                        {
                            MAJOR_IMPLANTS.map((implant) => <Dropdown.Item key={implant.id} renderAs='a' value={implant.id}><Icon><FontAwesomeIcon icon={faRobot} /></Icon> {implant.name} <Tag color='primary' rounded={true}>{implant.stat}</Tag></Dropdown.Item>)
                        }
                    </Dropdown>
                    {
                        implant1 &&
                        <Move name={implant1.name} stat={implant1.stat}>{implant1?.description}
                            <ul>
                                {
                                    implant1.options.map((option, idx) => <li key={`implant1_${idx}`}>{option}</li>)
                                }
                            </ul>
                        </Move>
                    }
                </Columns.Column>
                <Columns.Column>
                    {
                        this.state.firstImplant?.startsWith('MINOR') &&
                        <Dropdown label='Pick an Implant' icon={<FontAwesomeIcon icon={faAngleDown} />} onChange={this.setSecondImplant}>
                            {
                                MINOR_IMPLANTS.filter((implant) => implant.id !== this.state.firstImplant).map((implant) => <Dropdown.Item key={implant.id} renderAs='a' value={implant.id}><Icon><FontAwesomeIcon icon={faPlug} /></Icon> {implant.name} <Tag color='primary' rounded={true}>{implant.stat}</Tag></Dropdown.Item>)
                            }
                        </Dropdown>
                    }
                    {
                        implant2 &&
                        <Move name={implant2.name} stat={implant2.stat}>{implant2?.description}
                            <ul>
                                {
                                    implant2.options.map((option, idx) => <li key={`implant1_${idx}`}>{option}</li>)
                                }
                            </ul>
                        </Move>
                    }
                </Columns.Column>
            </Columns>
        </Section>;
    }
}