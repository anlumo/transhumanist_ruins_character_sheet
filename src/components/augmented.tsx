import { Columns, Content, Heading, Section } from "react-bulma-components";
import Move from "./move";

export default function Augmented(_props: any) {
    return <Section>
        <Heading>Playbook Moves</Heading>
        <Content>
            <Columns>
                <Columns.Column>
                    <Move name='Activate Enhancements' stat='TECH'>
                        When you use your cybernetic or genetic enhancements to give yourself an edge in a physical confrontation or other dangerous situation, roll 2d6+TECH to see how well they work. On a 10+, choose two. On a 7-9, choose one:
                        <ul>
                            <li>You gain a temporary boost to your strength, speed, or senses.</li>
                            <li>You gain a temporary advantage over your opponent.</li>
                            <li>You avoid suffering a significant injury or setback.</li>
                        </ul>
                    </Move>
                </Columns.Column>
                <Columns.Column>
                    <Move name='Datajack' stat='TECH'>
                        The character has a datajack, a direct neural interface that allow them to connect to computer systems and networks, and to manipulate data directly. This move can be used to hack into computer systems, access restricted information or manipulate networks to their advantage. When using this move, the character rolls 2d6+TECH:
                        <ul>
                            <li>On a 7-9, the character successfully accesses the desired information or system, but at a cost, such as leaving a trace, alerting security or exposing themselves to danger. The GM will decide the specific consequences.</li>
                            <li>On a 10+, the character not only accesses the information or system, but also gains an additional benefit, such as uncovering extra information, bypassing security or gaining an advantage over an opponent. The GM will decide the specific benefit.</li>
                        </ul>
                    </Move>
                </Columns.Column>
            </Columns>
        </Content>
        <Heading>Gain XP for:</Heading>
        <Content className="xpgain">
            <ul>
                <li>Complete a major goal or objective: When a player's character achieves a significant goal or objective, they can be awarded XP. This could include completing a quest or mission, defeating a powerful enemy, or solving a difficult problem.</li>
                <li>Advance the story: When a player's actions or choices contribute to advancing the story in a meaningful way, they can be awarded XP. This could include making a tough decision, uncovering a crucial piece of information, or taking a risk that has important consequences.</li>
                <li>Using your cybernetic or genetic enhancements to give yourself an edge in a physical confrontation or other dangerous situation.</li>
                <li>Navigating the consequences of your enhancements in a way that is consistent with your playbook, such as how you deal with rejection, discrimination, or mistrust from others.</li>
                <li>Using your enhanced abilities to overcome physical challenges or protect yourself or others.</li>
            </ul>
        </Content>
    </Section>;
}
