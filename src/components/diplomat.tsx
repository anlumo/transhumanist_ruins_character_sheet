import { Columns, Content, Heading, Section } from "react-bulma-components";
import Move from "./move";

export default function Diplomat(_props: any) {
    return <Section>
        <Heading>Playbook Moves</Heading>
        <Content>
            <Columns>
                <Columns.Column>
                    <Move name='Silver Tongue' stat='SAVY'>
                        This move is used when your character wants to sway and influence others through persuasive speaking and convincing rhetoric. Roll 2d6+SAVVY:
                        <ul>
                            <li>On a 7-9, you achieve your goal, but at a cost. The person or group you are trying to influence may ask you for a favor or a concession, or they may become suspicious of your true intentions.</li>
                            <li>On a 10+, you not only achieve your goal, but you also gain the respect and admiration of the person or group you are trying to influence.</li>
                        </ul>
                    </Move>
                </Columns.Column>
                <Columns.Column>
                    <Move name='Diplomatic Espionage' stat='SAVY'>
                        This move is used when your character wants to gather intelligence on foreign governments, organizations or individuals through unofficial or covert means, in order to gain an advantage in diplomatic negotiations or to protect their own interests. Roll 2d6+SAVVY:
                        <ul>
                            <li>On a 7-9, you gain the information you were looking for, but at a cost. You may have to reveal something about yourself or your organization, or you may have to make a promise or a concession.</li>
                            <li>On a 10+, you not only gain the information, but you also gain a valuable ally or a powerful bargaining chip.</li>
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
                <li>Successfully negotiating a peace treaty or alliance between rival factions or nations.</li>
                <li>Persuading a powerful individual or group to change their stance on a key issue.</li>
                <li>Successfully infiltrating a foreign government or organization and gaining valuable information.</li>
            </ul>
        </Content>
    </Section>;
}
