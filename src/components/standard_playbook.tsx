import { faAngleDown, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, Component, ReactNode } from "react";
import { Card, Columns, Content, Form, Heading, Icon, Section, Tag } from "react-bulma-components";
import Move from "./move";

const requiredStatSum = 6;

type StandardPlaybookState = {
    tech: number,
    savy: number,
    resilience: number,
    health: number,
    xp: number | null,
};
type StandardPlaybookProps = {
    children?: ReactNode,
};

export default class StandardPlaybook extends Component<StandardPlaybookProps, StandardPlaybookState> {
    constructor(props: any) {
        super(props);
        const state = window.localStorage.getItem('stats');
        const parsedState = state && JSON.parse(state);
        this.state = parsedState ?? {
            tech: 1,
            savy: 1,
            resilience: 1,
            health: 10,
            xp: 0,
        };
    }

    private setTech = (event: ChangeEvent<HTMLSelectElement>) => {
        const newState = {
            ...this.state,
            tech: parseInt(event.target.value),
        };
        this.setState(newState);
        window.localStorage.setItem('stats', JSON.stringify(newState));
    }

    private setSavy = (event: ChangeEvent<HTMLSelectElement>) => {
        const newState = {
            ...this.state,
            savy: parseInt(event.target.value),
        };
        this.setState(newState);
        window.localStorage.setItem('stats', JSON.stringify(newState));
    }

    private setResilience = (event: ChangeEvent<HTMLSelectElement>) => {
        const newState = {
            ...this.state,
            resilience: parseInt(event.target.value),
        };
        this.setState(newState);
        window.localStorage.setItem('stats', JSON.stringify(newState));
    }

    private setHealth = (event: ChangeEvent<HTMLSelectElement>) => {
        console.log('event =', event);
        const newState = {
            ...this.state,
            health: parseInt(event.target.value),
        };
        this.setState(newState);
        window.localStorage.setItem('stats', JSON.stringify(newState));
    }

    private setExperience = (event: ChangeEvent<HTMLInputElement>) => {
        const parsedXP = parseInt(event.target.value);
        const newState = {
            ...this.state,
            xp: isNaN(parsedXP) ? null : parsedXP,
        };
        this.setState(newState);
        window.localStorage.setItem('stats', JSON.stringify(newState));
    }

    render() {
        const statSum = this.state.tech + this.state.savy + this.state.resilience;

        return <>
            <Section>
                <Columns>
                    {this.props.children}
                    <Columns.Column>
                        <Form.Field>
                            <Form.Label>Tech <Icon title="This stat represents your character's proficiency with technology, including their ability to hack computers, use advanced equipment, and understand the inner workings of machines. Tech could be used for a wide range of actions, from hacking a cybernetic implant to repairing a broken robot to building a makeshift weapon."><FontAwesomeIcon icon={faInfoCircle} /></Icon></Form.Label>
                            <Form.Control>
                                <Form.Select value={this.state.tech} onChange={this.setTech}>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </Form.Select>
                            </Form.Control>
                        </Form.Field>
                    </Columns.Column>
                    <Columns.Column>
                        <Form.Field>
                            <Form.Label>Savy <Icon title="This stat represents your character's cunning and resourcefulness, including their ability to navigate complex social situations, outsmart their opponents, and find creative solutions to difficult problems. Savvy could be used for a wide range of actions, from negotiating with rival factions to scavenging for resources to outwitting an enemy in combat."><FontAwesomeIcon icon={faInfoCircle} /></Icon></Form.Label>
                            <Form.Control>
                                <Form.Select value={this.state.savy} onChange={this.setSavy}>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </Form.Select>
                            </Form.Control>
                        </Form.Field>
                    </Columns.Column>
                    <Columns.Column>
                        <Form.Field>
                            <Form.Label>Resilience <Icon title="This stat represents your character's toughness and determination, including their ability to withstand physical punishment, endure harsh environments, and keep going when the odds are against them. Resilience could be used for a wide range of actions, from surviving in a hostile wasteland to standing up to intimidating foes to overcoming physical challenges."><FontAwesomeIcon icon={faInfoCircle} /></Icon></Form.Label>
                            <Form.Control>
                                <Form.Select value={this.state.resilience} onChange={this.setResilience}>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </Form.Select>
                            </Form.Control>
                        </Form.Field>
                    </Columns.Column>
                    <Columns.Column>
                        <Form.Field>
                            <Form.Label>Hit Points <Icon title="A character has 10 hit points at the start of the game, and each point of damage they suffer reduces their hit points by one. This means that a character can take 10 points of damage before they are incapacitated or killed, depending on the severity of the damage they have suffered."><FontAwesomeIcon icon={faInfoCircle} /></Icon></Form.Label>
                            <Form.Control>
                                <Form.Select value={this.state.health} onChange={this.setHealth}>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                </Form.Select>
                            </Form.Control>
                        </Form.Field>
                    </Columns.Column>
                    <Columns.Column>
                        <Form.Field>
                            <Form.Label>Experience Points</Form.Label>
                            <Form.Control>
                                <Form.Input type='number' value={this.state.xp ?? ''} onChange={this.setExperience} />
                            </Form.Control>
                        </Form.Field>
                    </Columns.Column>
                </Columns>
                {statSum !== requiredStatSum &&
                    <Form.Field>
                        <Form.Help color='danger'>The total stats sum is {statSum}. It should be {requiredStatSum}!</Form.Help>
                    </Form.Field>
                }
            </Section>
            <Section>
                <Heading>Basic Moves</Heading>
                <Content>
                    <Columns>
                        <Columns.Column>
                            <Move name='Hack' stat='TECH'>
                                This move is used whenever your character attempts to hack a computer or cybernetic implant to gain access to restricted information or control over a system. Roll 2d6+TECH.
                                <ul>
                                    <li>
                                        On a 7-9, you succeed, but choose one:
                                        <ul>
                                            <li>You suffer a system crash or other adverse effect.</li>
                                            <li>You leave a trace that can be used to track your actions.</li>
                                            <li>You draw unwanted attention to yourself or your activities.</li>
                                        </ul>
                                    </li>
                                    <li>On a 10+, you succeed and avoid the drawbacks.</li>
                                </ul>
                            </Move>
                        </Columns.Column>
                        <Columns.Column>
                            <Move name='Enhance' stat='TECH'>
                                This move is used when your character wants to use advanced technology or genetic enhancements to give them an edge in a physical confrontation or other dangerous situation. Roll 2d6+TECH.
                                <ul>
                                    <li>
                                        On a 7-9, you succeed, but choose one:
                                        <ul>
                                            <li>Your enhancements malfunction or fail in some way.</li>
                                            <li>Your enhancements attract unwanted attention or scrutiny.</li>
                                            <li>Your enhancements cause you pain or discomfort.</li>
                                        </ul>
                                    </li>
                                    <li>On a 10+, you succeed and avoid the drawbacks.</li>
                                </ul>
                            </Move>
                        </Columns.Column>
                    </Columns>
                    <Columns>
                        <Columns.Column>
                            <Move name='Scavenge' stat='SAVVY'>
                                This move is used when your character wants to explore the ruins of a fallen society to scavenge for valuable resources or uncover secrets. Roll 2d6+SAVVY.
                                <ul>
                                    <li>
                                        On a 7-9, you find what you were looking for, but choose one:
                                        <ul>
                                            <li>Your scavenging takes longer than you anticipated.</li>
                                            <li>Your scavenging attracts unwanted attention or danger.</li>
                                            <li>Your scavenging yields less than you hoped for.</li>
                                        </ul>
                                    </li>
                                    <li>On a 10+, you find what you were looking for and avoid the drawbacks.</li>
                                </ul>
                            </Move>
                        </Columns.Column>
                        <Columns.Column>
                            <Move name='Navigate' stat='SAVVY'>
                                This move is used when your character wants to navigate the complex social dynamics of a futuristic city or community, including dealing with rival factions, powerful corporations, and other influential groups. Roll 2d6+SAVVY.
                                <ul>
                                    <li>
                                        On a 7-9, you successfully reach your target or destination, but choose one:
                                        <ul>
                                            <li>You suffer a social blunder or faux pas that causes problems or embarrassment.</li>
                                            <li>You encounter a rival or adversary who opposes or undermines your efforts.</li>
                                            <li>You must compromise your values or principles in order to succeed.</li>
                                        </ul>
                                    </li>
                                    <li>On a 10+, you successfully reach your target or destination and avoid the drawbacks.</li>
                                </ul>
                            </Move>
                        </Columns.Column>
                    </Columns>
                    <Columns>
                        <Columns.Column>
                            <Move name='Survive' stat='RESILIENCE'>
                                This move is used when your character wants to struggle to survive in a hostile environment, whether it's a desolate wasteland or a crowded megacity. Roll 2d6+RESILIENCE.
                                <ul>
                                    <li>
                                        On a 7-9, you successfully endure the challenges and dangers of the environment, but choose one:
                                        <ul>
                                            <li>You suffer injury, illness, or exhaustion as a result of your struggles.</li>
                                            <li>You lose or sacrifice valuable resources or equipment in order to survive.</li>
                                            <li>You encounter a threat or danger that puts your life in immediate jeopardy.</li>
                                        </ul>
                                    </li>
                                    <li>On a 10+, you successfully endure the challenges and dangers of the environment and avoid the drawbacks.</li>
                                </ul>
                            </Move>
                        </Columns.Column>
                        <Columns.Column>
                            <Move name='Adapt' stat='RESILIENCE'>
                                This move is used when your character wants to adapt to a rapidly changing situation or environment. Roll 2d6+RESILIENCE.
                                <ul>
                                    <li>
                                        On a 7-9, you successfully adapt to the situation, but choose one:
                                        <ul>
                                            <li>You suffer a setback or loss as a result of your adaptation.</li>
                                            <li>You encounter resistance or opposition from others who are not willing to adapt.</li>
                                            <li>You must make a difficult or painful sacrifice in order to adapt.</li>
                                        </ul>
                                    </li>
                                    <li>On a 10+, you successfully adapt to the situation and avoid the drawbacks.</li>
                                </ul>
                            </Move>
                        </Columns.Column>
                    </Columns>
                    <Columns>
                        <Columns.Column>
                            <Move name='Seek Medical Help' stat='TECH'>
                                When you visit a doctor or other medical professional for healing, roll 2d6+TECH. On a 10+, you receive the medical treatment you need, and you recover a number of hit points equal to your Tech score.
                                <ul>
                                    <li>
                                        On a 7-9, you receive the medical treatment you need, but you must choose one of the following options:
                                        <ul>
                                            <li>You recover a number of hit points equal to half your Tech score (rounded down)</li>
                                            <li>You spend valuable resources or trade valuable items to afford the cost of medical treatment</li>
                                            <li>You reveal sensitive information about yourself or your situation in order to receive medical treatment</li>
                                        </ul>
                                    </li>
                                    <li>On a 6 or lower, you are unable to receive the medical treatment you need, and you suffer a negative consequence as determined by the game master.</li>
                                </ul>
                            </Move>
                        </Columns.Column>
                        <Columns.Column>
                            <Move name='Rest and Recuperate' stat='SAVY'>
                                When you take the time to rest and recover from injuries or illnesses, roll 2d6+SAVVY. On a 10+, you are able to recover a number of hit points equal to your Savvy score, and you gain an additional benefit as determined by the game master.
                                <ul>
                                    <li>
                                        On a 7-9, you are able to recover a number of hit points equal to half your Savvy score (rounded down), but you must choose one of the following options:
                                        <ul>
                                            <li>You suffer a negative consequence as determined by the game master</li>
                                            <li>You expose yourself to potential dangers or hazards by remaining in one place for too long</li>
                                            <li>You sacrifice valuable resources or trade valuable items to promote your health and well-being</li>
                                        </ul>
                                    </li>
                                    <li>On a 6 or lower, you are unable to recover any hit points, and you suffer a negative consequence as determined by the game master.</li>
                                </ul>
                            </Move>
                        </Columns.Column>
                    </Columns>
                </Content>
            </Section>
        </>;
    }
}
