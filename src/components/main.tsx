import { Component } from "react";
import { Container, Dropdown, Navbar, Card, Media, Heading, Content, Box } from "react-bulma-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Playbooks, { playbookName } from '../playbooks';
import StandardPlaybook from "./standard_playbook";
import Hacktivist from "./hacktivist";
import Augmented from "./augmented";
import Scavenger from "./scavenger";
import Fixer from "./fixer";
import Nomad from "./nomad";
import Exile from "./exile";

type MainState = {
    playbook: Playbooks,
};

export default class Main extends Component<{}, MainState> {
    constructor(props: any) {
        super(props);

        const playbook = window.localStorage.getItem('selected playbook');
        if (playbook !== undefined && playbook !== null) {
            this.state = { playbook: parseInt(playbook) };
        }
    }

    private changePlaybook = (playbook: string) => {
        this.setState({
            playbook: parseInt(playbook),
        });
        window.localStorage.setItem('selected playbook', playbook);
    }

    render() {
        const label = (this.state?.playbook !== undefined) ? playbookName(this.state.playbook) : 'Choose Your Playbook';
        let playbookComponent = null;
        switch (this.state?.playbook) {
            case Playbooks.hacktivist: playbookComponent = <Hacktivist />; break;
            case Playbooks.augmented: playbookComponent = <Augmented />; break;
            case Playbooks.scavenger: playbookComponent = <Scavenger />; break;
            case Playbooks.fixer: playbookComponent = <Fixer />; break;
            case Playbooks.nomad: playbookComponent = <Nomad />; break;
            case Playbooks.exile: playbookComponent = <Exile />; break;
        }

        return <Container>
            <Navbar>
                <Navbar.Item renderAs='div'>
                    <Dropdown color='primary' label={label} icon={<FontAwesomeIcon icon={faAngleDown} />} onChange={this.changePlaybook}>
                        <Dropdown.Item renderAs='a' title='The Hacktivist uses their hacking skills to fight for a cause or challenge the power structures of the world.' value={Playbooks.hacktivist}>The Hacktivist</Dropdown.Item>
                        <Dropdown.Item renderAs='a' title='The Augmented has undergone extensive cybernetic or genetic enhancements to become a superhuman warrior.' value={Playbooks.augmented}>The Augmented</Dropdown.Item>
                        <Dropdown.Item renderAs='a' title='The Scavenger makes a living by scavenging for resources in the ruins of a fallen society.' value={Playbooks.scavenger}>The Scavenger</Dropdown.Item>
                        <Dropdown.Item renderAs='a' title='The Fixer acts as a mediator, facilitator, and problem-solver in the complex world of the future.' value={Playbooks.fixer}>The Fixer</Dropdown.Item>
                        <Dropdown.Item renderAs='a' title='The Nomad wanders the wasteland, surviving on their wits and their knowledge of the land.' value={Playbooks.nomad}>The Nomad</Dropdown.Item>
                        <Dropdown.Item renderAs='a' title='The Exile has been cast out from society and now lives on the fringes, surviving as best they can.' value={Playbooks.exile}>The Exile</Dropdown.Item>
                    </Dropdown>
                </Navbar.Item>
            </Navbar>
            {
                (this.state?.playbook !== undefined) &&
                <Box style={{ margin: 'auto' }}>
                    <StandardPlaybook />
                    {playbookComponent}
                </Box>
            }
        </Container>;
    }
}
