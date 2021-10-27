const godsSeed = [
  {
    name: "Achilles",
    damageType: "Physical",
    class: "Warrior",
    passive: "Gift of the Gods",
    passiveDes:
      "Achilles adapts to the tide of Battle. While in the Fountain, Achilles can choose to wear armor, granting him bonus Health and Protections, or forgo it, granting him bonus Movement Speed and Physical Power. To swap, use Achilles' Basic Attack while the Passive targeter is active.",
    ability1: "Shield of Achilles",
    ability1Des:
      "Achilles punches forward with the edge of his Shield, inflicting massive damage and stunning enemy targets hit by the impact. The force of his punch continues to radiate past his initial target area, dealing 85% damage to targets farther away.",
    ability2: "Radient Glory",
    ability2Des:
      "Achilles is blessed by the gods, giving him bonus Physical Power, Protections, and Crowd Control Reduction for 6 seconds. While this blessing is active, Achilles will heal himself upon successfully damaging enemies with abilities.",
    ability3: "Combat Dodge",
    ability3Des:
      "Achilles dodges his enemies' attacks before striking them in swift response. If Achilles successfully hits an enemy god with this strike, Achilles can use this ability once more before it goes on Cooldown.",
    ult: "Fatal Strike",
    ultDes:
      "Achilles dashes forward and attacks. While dashing, Achilles will pass through minions, stop and hit the first enemy god he encounters, dealing damage to all he hits and executing gods below 30% Health. If Achilles kills a god with this ability, he can use it again, up to 5 times. As Achilles successfully Executes his enemies, he becomes more reckless in combat and leaves his heel exposed. Achilles will become more susceptible to damage, stacking up to 5 times.",
    img: "https://i.ytimg.com/vi/OQoqfa9_TtA/maxresdefault.jpg",
  },
  {
    name: "Agni",
    damageType: "Magical",
    class: "Mage",
    passive: "Combustion",
    passiveDes:
      "Hitting an enemy with a Basic Attack provides 1 stack of Combustion. Hitting an enemy god provides 2. At 4 stacks Agni's next Flame Wave or Rain Fire will ignite all enemies hit, dealing damage every .5s for 3s.",
    ability1: "Noxious Fumes",
    ability1Des:
      "Agni summons a cloud of noxious fumes at his ground target location, doing damage every second. Firing any of Agni's abilities into the fumes detonates the gas, Stunning and damaging all enemies in the radius.",
    ability2: "Flame Wave",
    ability2Des:
      "Agni summons a wave of fire in front of him that scorches all enemies in its path. Ignites Noxious Fumes.",
    ability3: "Path of Flames",
    ability3Des:
      "Agni blazes a path forward in a quick dash, leaving flames trailing behind him. Any enemies passing through the flames catch fire and burn for damage every .5s for 2s. Ignites Noxious Fumes. Agni is immune to Knockback while dashing.",
    ult: "Rain Fire",
    ultDes:
      "Every 18 seconds, Agni gains a flaming halo that can be expended to summon a giant meteor at his ground target location. He can summon 1 every .8 seconds. Ignites Noxious Fumes.",
    img: "https://i.ytimg.com/vi/w_aGSGzkysU/maxresdefault.jpg",
  },
];

module.exports=godsSeed