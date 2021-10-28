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
  {
    name: "Ah Muzen Cab",
    damageType: "Physical",
    class: "Hunter",
    passive: "Bees!",
    passiveDes:
      "Enemies afflicted by Bees! take damage every .5s for 2s, are revealed on the minimap, and swarm nearby enemies. Basic Attacks refresh and extend the duration of Bees! by 1s. This damage does not trigger Item effects.",
    ability1: "Hive",
    ability1Des:
      "Bees swarm at the ground target location, creating a new Hive that provides movement and Attack Speed Buffs to Ah Muzen Cab. He also heals for a small amount every second while he remains close to the Hives. Hives reveal enemies within 20 units of them. The Hives can only be destroyed by Basic Attacks (maximum 7 Hives).",
    ability2: "Swarm",
    ability2Des:
      "Ah Muzen Cab summons a large swarm of bees that fly forward in a path in front of him, dealing damage to all enemies hit and applying Bees to them.",
    ability3: "Honey",
    ability3Des:
      "Ah Muzen Cab sprays honey that lasts for 4s at a moveable ground target location, Slowing all enemies in the area. Bees from Hives within 90 units and Swarm will fly over to protect the honey, dealing damage every .5 second and applying Bees! to all enemies as they leave the honey.",
    ult: "Stinger",
    ultDes:
      "Ah Muzen Cab fires off an enormous stinger that deals damage to all enemies in a line, sticking into the first god that is hit, applying Bees! and Crippling them for 3 seconds. If the target dies or after 3 seconds, the stinger falls onto the ground for 4 seconds. If Ah Muzen Cab picks up his stinger, he gains a significant reduction to Stinger's Cooldown.",
    img: "https://i.pinimg.com/736x/48/bd/dd/48bddd2fad13b0c7458a7b91095c1b3f.jpg",
  },
  {
    name: "Ah Puch",
    damageType: "Magical",
    class: "Mage",
    passive: "Hollow Ground",
    passiveDes:
      "Ah Puch is closely attuned with the dead and may exhume corpses at his will. When walking over a decaying corpse, Ah Puch lowers the cooldown of Undead Surge and Corpse Explosion by 2s, restores 7% of his maximum Health and 3% of his maximum Mana.",
    ability1: "Undead Surge",
    ability1Des:
      "Ah Puch raises up to two decaying corpses from the underworld that surge forward exploding on anything they touch, when they reach max distance, or when Ah Puch reactivates Undead Surge dealing damage and slowing targets hit. Enemies hit also have their healing reduced by 40% for 5s. The corpses collapse after exploding remaining behind.",
    ability2: "Corpse Explosion",
    ability2Des:
      "Ah Puch causes the target area to explode dealing damage. Corpse Explosion also causes any decaying corpses in the area to explode.",
    ability3: "Fleeting Breath",
    ability3Des:
      "Ah Puch throws a charm from the underworld which awakens a decaying corpse that applies miasma to targets in an area and falls to the ground, remaining behind. Targets take damage every second. After the duration, targets take additional damage and are stunned if they were healed by an ability during the initial duration.",
    ult: "Empty the Crypts",
    ultDes:
      "Ah Puch unleashes an army of Wraiths from the Ninth Hell that swarm forward and reduce healing and deal damage to enemies they collide with.",
    img: "https://i.ytimg.com/vi/PDQW_nAgQRU/maxresdefault.jpg",
  },
  {
    name: "Amaterasu",
    damageType: "Physical",
    class: "Warrior",
    passive: "Illuminating Strike",
    passiveDes:
      "Amaterasu illuminates enemies she hits with basic attacks. After 3 hits on the same target the enemy gains an aura, exposing their weaknesses and causing them to take more damage from all sources. Any other enemies that come near the afflicted target are weakened as well.",
    ability1: "Diving Presence",
    ability1Des:
      "Amaterasu harnesses the power of her jewel, healing herself every second for 4 seconds and creating a persistent aura that buffs nearby allied gods. Every time this ability is activated the aura switches between Valor and Benevolence.",
    ability2: "Heavenly Reflection",
    ability2Des:
      "Amaterasu charges her mirror for 5 seconds. While the mirror is charging she takes decreased damage. By activating the ability again or at the end of 5 seconds she will fire her mirror straight ahead, dealing damage. The mirror can be charged by successfully attacking enemies or from taking damage, and will deal up to double the base damage when fully charged.",
    ability3: "Glorious Charge",
    ability3Des:
      "Amaterasu shines light off of her sacred blade, silencing all enemies in front of her. She then dashes forward while dealing damage, piercing through minions or stopping at the first god hit.",
    ult: "Dazzling Offensive",
    ultDes:
      "Amaterasu focuses the power of the heavens into an impressive 3 strike combination attack. The 2nd hit will do 20% more base damage and slow enemies by 30%. The 3rd hit will do 40% more base damage and stun enemies. She must hit an enemy with the 1st hit to receive the increased damage and CC on the 2nd hit. The same rule applies to the 2nd and 3rd hits.",
    img: "https://i1.sndcdn.com/artworks-000145083322-tjshgf-t500x500.jpg",
  },
];

module.exports=godsSeed