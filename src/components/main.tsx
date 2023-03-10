import React, { Component } from "react";
import { Container, Dropdown, Navbar, Box, Image, Columns, Modal, Media, Button, Section, Form } from "react-bulma-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Playbooks, { fullPlaybookDescription, playbookName } from '../playbooks';
import StandardPlaybook from "./standard_playbook";
import Hacktivist from "./hacktivist";
import HacktivistImage from "../images/hacktivist.webp";
import Augmented from "./augmented";
import AugmentedImage from "../images/augmented.webp";
import Scavenger from "./scavenger";
import ScavengerImage from "../images/scavenger.webp";
import Fixer from "./fixer";
import FixerImage from "../images/fixer.webp";
import Nomad from "./nomad";
import NomadImage from "../images/nomad.webp";
import Exile from "./exile";
import ExileImage from "../images/exile.webp";
import Renegade from "./renegade";
import RenegadeImage from "../images/renegade.webp";
import Doctor from "./doctor";
import DoctorImage from "../images/doctor.webp";
import Diplomat from "./diplomat";
import DiplomatImage from "../images/diplomat.webp";
import Cybernetics from "./cybernetics";

type MainState = {
    playbook?: Playbooks,
    imageDetails: boolean,
    freeformText: string,
};

export default class Main extends Component<{}, MainState> {
    constructor(props: any) {
        super(props);

        const freeformText = window.localStorage.getItem('freeform text') ?? '';
        const playbook = window.localStorage.getItem('selected playbook');
        if (playbook !== undefined && playbook !== null) {
            this.state = { playbook: parseInt(playbook), imageDetails: false, freeformText };
        } else {
            this.state = { imageDetails: false, freeformText };
        }
    }

    private changePlaybook = (playbook: string) => {
        this.setState({
            playbook: parseInt(playbook),
        });
        window.localStorage.setItem('selected playbook', playbook);
    }

    private setFreeformText = (event: React.FormEvent<HTMLTextAreaElement>) => {
        const freeformText = (event.target as HTMLTextAreaElement).value ?? '';
        this.setState({
            freeformText,
        });
        window.localStorage.setItem('freeform text', freeformText);
    }

    render() {
        const label = (this.state?.playbook !== undefined) ? playbookName(this.state.playbook) : 'Choose Your Playbook';
        let playbookComponent = undefined;
        let image = undefined;
        switch (this.state?.playbook) {
            case Playbooks.hacktivist: playbookComponent = <Hacktivist />; image = HacktivistImage; break;
            case Playbooks.augmented: playbookComponent = <Augmented />; image = AugmentedImage; break;
            case Playbooks.scavenger: playbookComponent = <Scavenger />; image = ScavengerImage; break;
            case Playbooks.fixer: playbookComponent = <Fixer />; image = FixerImage; break;
            case Playbooks.nomad: playbookComponent = <Nomad />; image = NomadImage; break;
            case Playbooks.exile: playbookComponent = <Exile />; image = ExileImage; break;
            case Playbooks.renegade: playbookComponent = <Renegade />; image = RenegadeImage; break;
            case Playbooks.doctor: playbookComponent = <Doctor />; image = DoctorImage; break;
            case Playbooks.diplomat: playbookComponent = <Diplomat />; image = DiplomatImage; break;
        }

        return <Container>
            <Navbar>
                <Navbar.Item renderAs='div'>
                    <Dropdown color='primary' label={label} icon={<FontAwesomeIcon icon={faAngleDown} />} onChange={this.changePlaybook}>
                        <Dropdown.Item renderAs='a' title='The Augmented has undergone extensive cybernetic or genetic enhancements to become a superhuman warrior.' value={Playbooks.augmented}>The Augmented</Dropdown.Item>
                        <Dropdown.Item renderAs='a' title='The Diplomat is skilled in navigating the complex political and social dynamics of the post-apocalyptic world.' value={Playbooks.diplomat}>The Diplomat</Dropdown.Item>
                        <Dropdown.Item renderAs='a' title='The Doctor is a medical professional in a post-apocalyptic setting. They are skilled in treating injuries, illnesses, and diseases.' value={Playbooks.doctor}>The Doctor</Dropdown.Item>
                        <Dropdown.Item renderAs='a' title='The Exile has been cast out from society and now lives on the fringes, surviving as best they can.' value={Playbooks.exile}>The Exile</Dropdown.Item>
                        <Dropdown.Item renderAs='a' title='The Fixer acts as a mediator, facilitator, and problem-solver in the complex world of the future.' value={Playbooks.fixer}>The Fixer</Dropdown.Item>
                        <Dropdown.Item renderAs='a' title='The Hacktivist uses their hacking skills to fight for a cause or challenge the power structures of the world.' value={Playbooks.hacktivist}>The Hacktivist</Dropdown.Item>
                        <Dropdown.Item renderAs='a' title='The Nomad wanders the wasteland, surviving on their wits and their knowledge of the land.' value={Playbooks.nomad}>The Nomad</Dropdown.Item>
                        <Dropdown.Item renderAs='a' title='The Renegade was once a member of a corporate military force, but has now turned against their former employers.' value={Playbooks.renegade}>The Renegade</Dropdown.Item>
                        <Dropdown.Item renderAs='a' title='The Scavenger makes a living by scavenging for resources in the ruins of a fallen society.' value={Playbooks.scavenger}>The Scavenger</Dropdown.Item>
                    </Dropdown>
                </Navbar.Item>
            </Navbar>
            {
                (this.state?.playbook !== undefined) &&
                <Box style={{ margin: 'auto' }}>
                    <Section>
                        <p>{this.state && fullPlaybookDescription(this.state!.playbook)}</p>
                    </Section>
                    <StandardPlaybook>
                        {image &&
                            <Columns.Column size={2}>
                                <Image style={{ cursor: "pointer" }} rounded={true} className='character-image' src={image} size={128} onClick={() => this.setState({ imageDetails: true })} />
                            </Columns.Column>
                        }
                    </StandardPlaybook>
                    <Cybernetics />
                    {playbookComponent}
                    <Section>
                        <Form.Field>
                            <Form.Label>Freeform Notes</Form.Label>
                            <Form.Control>
                                <Form.Textarea value={this.state.freeformText} rows={10} onInput={this.setFreeformText} />
                            </Form.Control>
                        </Form.Field>
                    </Section>
                </Box>
            }
            <Modal show={this.state?.imageDetails ?? false} onClose={() => this.setState({ imageDetails: false })}>
                <Modal.Card>
                    <Modal.Card.Header>
                        <Modal.Card.Title>Image</Modal.Card.Title>
                    </Modal.Card.Header>
                    <Modal.Card.Body>
                        <Media>
                            <Image src={image!} fullwidth={true} />
                        </Media>
                    </Modal.Card.Body>
                    <Modal.Card.Footer renderAs={Button.Group} align="right" hasAddons>
                        <Button color="success" onClick={() => this.setState({ imageDetails: false })}>Close</Button>
                    </Modal.Card.Footer>
                </Modal.Card>
            </Modal>
        </Container>;
    }
}
