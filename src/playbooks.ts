enum Playbooks {
    hacktivist,
    augmented,
    scavenger,
    fixer,
    nomad,
    exile,
    renegade,
}

export function playbookName(playbook: Playbooks) {
    switch (playbook) {
        case Playbooks.hacktivist: return 'The Hacktivist';
        case Playbooks.augmented: return 'The Augmented';
        case Playbooks.scavenger: return 'The Scavenger';
        case Playbooks.fixer: return 'The Fixer';
        case Playbooks.nomad: return 'The Nomad';
        case Playbooks.exile: return 'The Exile';
        case Playbooks.renegade: return 'The Renegade';
    }
}

export function fullPlaybookDescription(playbook: Playbooks) {
    switch (playbook) {
        case Playbooks.hacktivist: return 'This playbook is for players who want to play a character who uses their hacking skills to fight for a cause or challenge the power structures of the world. The Hacktivist has access to a wide range of hacking abilities and can use their Tech stat to manipulate machines, disrupt systems, and uncover secrets. They also have a strong sense of justice and are willing to take risks to defend the weak and fight for what they believe in.';
        case Playbooks.augmented: return 'This playbook is for players who want to play a character who has undergone extensive cybernetic or genetic enhancements to become a superhuman warrior. The Augmented has access to powerful technology and genetic enhancements that give them enhanced strength, speed, and senses. They can use their Tech and Resilience stats to fight their enemies and overcome physical challenges, but they also struggle with the consequences of their enhancements and must navigate a world that often sees them as monsters.';
        case Playbooks.scavenger: return 'This playbook is for players who want to play a character who makes a living by scavenging for resources in the ruins of a fallen society. The Scavenger is a master of survival and can use their Savvy and Resilience stats to find food, water, shelter, and other resources in the wasteland. They are also skilled at trading and negotiating with other scavengers and are willing to take risks to get what they need.';
        case Playbooks.fixer: return 'This playbook is for players who want to play a character who acts as a mediator, facilitator, and problem-solver in the complex world of the future. The Fixer is a master of social manipulation and can use their Savvy stat to navigate the shifting alliances and power dynamics of the city. They are also skilled at finding information and resources and are willing to do whatever it takes to get the job done.';
        case Playbooks.nomad: return 'This playbook is for players who want to play a character who wanders the wasteland, surviving on their wits and their knowledge of the land. The Nomad is a master of survival and can use their Savvy and Resilience stats to find food, water, shelter, and other resources in the wasteland. They are also skilled at tracking, hunting, and navigating and are always on the lookout for new opportunities and challenges.';
        case Playbooks.exile: return 'This playbook is for players who want to play a character who has been cast out from society and now lives on the fringes, surviving as best they can. The Exile is a master of survival and can use their Savvy and Resilience stats to find food, water, shelter, and other resources in the wasteland. They are also skilled at avoiding detection and staying out of sight, but they long for a sense of belonging and are willing to take risks to find a new home.';
        case Playbooks.renegade: return 'This playbook is for players who want to play a character who was once a member of a corporate military force, but has now turned against their former employers. You are a skilled and experienced warrior, who can use your Tech and Resilience stats to fight your enemies and overcome physical challenges. You are well-equipped and have access to advanced weapons and equipment, but you must also navigate the dangers of being a wanted traitor.';
    }
}

export default Playbooks;
