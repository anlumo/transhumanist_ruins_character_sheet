enum Playbooks {
    hacktivist,
    augmented,
    scavenger,
    fixer,
    nomad,
    exile,
}

export function playbookName(playbook: Playbooks) {
    switch (playbook) {
        case Playbooks.hacktivist: return 'The Hacktivist';
        case Playbooks.augmented: return 'The Augmented';
        case Playbooks.scavenger: return 'The Scavenger';
        case Playbooks.fixer: return 'The Fixer';
        case Playbooks.nomad: return 'The Nomad';
        case Playbooks.exile: return 'The Exile';
    }
}

export default Playbooks;
