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
    onTeam: false,
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
    onTeam: false,
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
    onTeam: false,
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
    onTeam: false,
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
    img: "https://cdn.sanity.io/images/ccckgjf9/production/9a7de8a77a136e7fe725dc7b443476ef1dbd841b-1250x782.jpg?rect=0,39,1250,703&w=1920&h=1080&fit=max&auto=format",
    onTeam: false,
  },
  {
    name: "Anhur",
    damageType: "Physical",
    class: "Hunter",
    passive: "Enfeeble",
    passiveDes:
      "Anhur's spear attacks reduce the enemy target's Physical Protection for 3 seconds.",
    ability1: "Shifting Sands",
    ability1Des:
      "Anhur hurls his spear with great might. If the spear hits a god, they take damage and are knocked back. Gods knocked back into a wall are Stunned. Enemies hit by the pushed god take damage. The spear passes through minions, doing damage to them as well.",
    ability2: "Impale",
    ability2Des:
      "Anhur hurls his spear with great might. If the spear hits a god, they take damage and are knocked back. Gods knocked back into a wall are Stunned. Enemies hit by the pushed god take damage. The spear passes through minions, doing damage to them as well.",
    ability3: "Disperse",
    ability3Des:
      "Anhur leaps to his ground target location, doing damage and knocking back all enemies in the radius where he lands.",
    ult: "Desert Fury",
    ultDes:
      "Summoning the fury of the desert, Anhur hunkers down and throws empowered spears that pass through everything, doing damage to all enemies in their path. He is immune to Crowd Control for the duration.",
    img: "https://i.ytimg.com/vi/d2hcnY6xVIk/maxresdefault.jpg",
  },
  {
    name: "Anubis",
    damageType: "Magic",
    class: "Mage",
    passive: "Sorrow",
    passiveDes:
      "All of Anubis' abilities steal Physical and Magical Protection from the target and increase his Healing obtained from Magical Lifesteal. These effects stack on every tick of Anubis' abilities. Sorrow also grants Anubis an additional 30% reduction to all Crowd Control durations.",
    ability1: "Plague of Locusts",
    ability1Des:
      "A plague of locusts bellows forth from Anubis' mouth, smothering all enemies in the area and doing damage every .5s for 3s. Anubis is immune to knockback while channeling.",
    ability2: "Mummify",
    ability2Des:
      "Anubis fires a bandage projectile, mummifying and stunning his target.",
    ability3: "Grasping Hands",
    ability3Des:
      "Anubis calls for help from the underworld as hands penetrate the ground and claw at his enemies, doing damage and Slowing every .5s for 2s.",
    ult: "Death Gaze",
    ultDes:
      "Anubis focuses all of his energy into a piercing gaze, doing damage to all enemies in the path, every 0.1 seconds for 3 seconds.",
    img: "https://assets.tentonhammer.com/giveaways/attached_images/000/000/030/medium/Anubis_SciFi_Card-%282%29-%281%29-%281%29.jpg?1491337280",
  },
  {
    name: "Ao Kuang",
    damageType: "Magic",
    class: "Mage",
    passive: "Dragon King's Sword",
    passiveDes:
      "Every 12 seconds Ao Kuang gets a stack of Dragon King's Sword. With a stack available, his next non-ultimate ability that deals damage to an Enemy god has a reduced cooldown and heals Ao Kuang. Successfully executing an Enemy god with King of the Eastern Seas fully charges Dragon King's Sword.",
    ability1: "Water Illusion",
    ability1Des:
      "Ao Kuang Teleports forward into Stealth, leaving behind a watery form of himself. He remains in Stealth for 5s or until he attacks or takes damage. Ao Kuang may activate this ability again to detonate the watery form, dealing damage to nearby enemies.",
    ability2: "Dragon Call",
    ability2Des:
      "Ao Kuang summons 6 dragons to his side. For every successful Basic Attack Ao Kuang makes, a dragon will dive to the target dealing additional damage. This ability ends after all dragons are used, or after 10s. Ao Kuang may activate this ability again to send forward any remaining dragons in a ranged attack. The dragons damage and Slow the first enemy they hit.",
    ability3: "Wild Storm",
    ability3Des:
      "Ao Kuang unleashes a storm of lightning from his sword, damaging all enemies in front of him. This hit will send a Dragon from Dragon's Call forth, dealing damage to hit targets.",
    ult: "King of the Eastern Seas",
    ultDes:
      "Ao Kuang grabs a single target, damaging and knocking them into the air. If the target is below a Health threshold, Ao Kuang will also reveal his true form, becoming an airborne Dragon and executing them restoring Health. After transforming Ao Kuang then picks a new location to land, dealing damage to enemies within 20 units.",
    img: "https://i.ytimg.com/vi/2H5q-14OT80/maxresdefault.jpg",
  },
  {
    name: "Aphrodite",
    damageType: "Magic",
    class: "Mage",
    passive: "Center of Attention",
    passiveDes:
      "Aphrodite gains 4 Physical Protection and 4 Magical Protection for each friendly or enemy god within 70 feet of her.",
    ability1: "Kiss",
    ability1Des:
      "Aphrodite blows a kiss to an allied god, making them her soul mate and giving them both increased movement speed. If it hits an ally, it has a reduced 1s cooldown. If the kiss hits an enemy god, they are Stunned and Aphrodite's soul mate gets jealous, increasing their damage. Also, 70% of all Mana regenerated by Aphrodite is restored to her soul mate.",
    ability2: "Back Off!",
    ability2Des:
      "Agitated by all the attention, Aphrodite commands enemies to get away from her, doing damage around her, slowing them by 25% for 2s and knocking them back to 25 units from her. If Aphrodite has a soul mate, an explosion originates on them in addition, dealing the same damage as well as slowing enemies. If an enemy would be hit by both blasts, they will only be affected by the one originating from Aphrodite.",
    ability3: "Love Birds",
    ability3Des:
      "Aphrodite calls forth a flock of beautiful doves that fly forward in the area in front of her. The doves circle around all enemies in the path, damaging enemies every .5s for 3s. Aphrodite and her soul mate also receive healing when cast.",
    ult: "Undying Love",
    ultDes:
      "Aphrodite pledges undying love to herself and her soul mate. While this is active, her and her soul mate are invulnerable to all damage for a short duration. All Crowd Control effects are also removed when activated.",
    img: "https://external-preview.redd.it/QiJifFFmmRu1ulI0ltYtASCJy78owv3PHLkCRQqJyMg.jpg?auto=webp&s=949bb3685b8fc80f8f3eab5f2d6a329958c56982",
  },
  {
    name: "Apollo",
    damageType: "Physical",
    class: "Hunter",
    passive: "Audacity",
    passiveDes:
      "After 10 successful Basic Attacks, Apollo gains Audacity, increasing his Attack Speed by 100% for the next 5 Basic Attacks (hit or miss) he makes. Apollo also gains 1 stack of Audacity for each successful damaging ability on Enemy gods.",
    ability1: "So Beautiful",
    ability1Des:
      "Apollo strums a single chord on his lyre. It's so beautiful it hurts, and all enemies in a long range line take damage.",
    ability2: "Serenade",
    ability2Des:
      "Apollo uses his amazing voice to Mesmerize all nearby enemies and bolster himself with additional physical protection. Any damage done breaks the effect.",
    ability3: "The Moves",
    ability3Des:
      "Apollo runs forward and slides on his knees, dealing damage, knocking aside all enemies and adding a stack of Audacity for each enemy hit. At the end of the slide, the movement speed is decreased for enemies and increased for himself and allies.",
    ult: "Across the Sky",
    ultDes:
      "Apollo rides his chariot across the sky, choosing when to land, dealing damage every .2s for .8s as he lands. Enemies hit by the last tick of the landing will also be knocked up.",
    img: "https://i.ytimg.com/vi/J8q-aTUPgnw/maxresdefault.jpg",
  },
  {
    name: "Arachne",
    damageType: "Physical",
    class: "Assassin",
    passive: "Predator",
    passiveDes:
      "Arachne's Basic Attacks gain 1.5% Physical damage for every 5% of a target's missing Health.",
    ability1: "Venomous Bite",
    ability1Des:
      "Upon activation, Arachne's next Basic Attack within 5s does additional damage and infects the target with Venom, dealing damage over time and healing Arachne every 0.5s for 3s.",
    ability2: "Cocoon",
    ability2Des:
      "Arachne spindles her webbing, and her next 3 successful Basic Attacks are executed with increased Attack Speed for 6s. If all 3 Basic Attacks hit the same target, that target is Stunned.",
    ability3: "Web",
    ability3Des:
      "Arachne shoots a line of Web forward. She is Immune to Slows and moves faster on Web. If the Web reaches max range a Web trap will spawn. Enemy gods who walk through the trap or get hit by the projectile are Slowed by 15%, revealed to Arachne, leave a trail of Web behind them, and are attacked by Pet Broodlings. Arachne can only have 3 Web traps or projectiles active at a time.",
    ult: "Night Crawler",
    ultDes:
      "Arachne flips up to her infinite web, hanging upside down above the lane and increasing her movement speed. She may leap off the web to deal damage to all enemies in the target area and create a large web around the target area. The web area provides the same slow to enemies and benefit to Arachne as her Web Trail. Arachne may activate Ability 1 and 2 while running on this web.",
    img: "https://cdna.artstation.com/p/assets/images/images/002/675/094/large/jon-neimeister-1-arachne-final.jpg?1464394883",
  },
  {
    name: "Ares",
    damageType: "Magical",
    class: "Guardian",
    passive: "Blessed Presence",
    passiveDes:
      "Each completed aura item that Ares owns grants him 30 additional Magical Power.",
    ability1: "Shackles",
    ability1Des:
      "Chains extend from Ares' shield, doing damage to all enemies in its path. Hitting a god shackles them to Ares, Cripples them, preventing movement abilities, dealing the same damage every second while slowing them by 15% and buffing Ares. While shackled, Ares can fire another chain for free within 2s.",
    ability2: "Bolster Defenses",
    ability2Des:
      "Ares strengthens the defenses of himself and all nearby allies, granting Protections, HP5, and reducing Crowd Control durations. For each shackled enemy, the Protection Buffs are increased.",
    ability3: "Searing Flesh",
    ability3Des:
      "Flames pour forth from Ares' shield, engulfing enemies in a cone in front of him causing damage every .5s for 4s. Ares is immune to Knockback for the duration.",
    ult: "No Escape",
    ultDes:
      "Ares throws chains out to all enemy gods in an area around him. All enemies hit by the chains are pulled to Ares after 2.5s, taking damage and are Stunned.",
    img: "https://gaminglyfe.com/wp-content/uploads/2020/04/Smite-Ares.png",
  },
  {
    name: "Artemis",
    damageType: "Physical",
    class: "Hunter",
    passive: "Still Target",
    passiveDes:
      "Artemis deals 15% increased Basic Attack damage to gods and 30% to minions who are afflicted by Crowd Control.",
    ability1: "Transgressor's Fate",
    ability1Des:
      "Artemis places a trap on the ground. Enemy gods coming within 5 units of her traps activate them, Rooting and Crippling the enemy god, preventing movement abilities and dealing damage every second for 3s.",
    ability2: "Vengeful Assault",
    ability2Des:
      "Artemis attacks at a furious pace, increasing her Attack and Movement Speed significantly. Additionally, Artemis cleanses herself of slows and becomes immune to Slows for 0.6s when activated.",
    ability3: "Suppress the Insolent",
    ability3Des:
      "Artemis fires a volley into a ground target, suppressing all of her enemies. Enemies caught within the volley are damaged and are Slowed.",
    ult: "Calydonian Boar",
    ultDes:
      "Artemis summons the great Calydonian Boar on her enemies, doing damage to the nearest enemy god and Stunning them, and itself. The boar is immune until it hits the first god and then continues to charge other gods for its lifetime. Artemis is also immune to Crowd Control for 1.5s.",
    img: "https://i.ytimg.com/vi/kweKbHo6a7s/maxresdefault.jpg",
  },
  {
    name: "Artio",
    damageType: "Magical",
    class: "Guardian",
    passive: "Decompose",
    passiveDes:
      "Enemy gods hit by Artio's Druid or Bear damaging abilities will begin to decompose. This effect decreases their Physical and Magical Protections. This effect stacks.",
    ability1: "Energy Surge (Maul Prey)",
    ability1Des:
      "Druid: Artio pulses out a strong wave of energy that damages enemies. She will heal herself and allies within 65 units for each enemy god hit by this ability. Bear Form: Artio slashes twice with her claws, damaging enemies with each swipe.",
    ability2: "Entangling Vines (Ferocious Roar)",
    ability2Des:
      "Druid Form: Artio creates a thicket of vines around herself that cripples enemy gods and decreases their Magical or Physical Power as long as they are in the area. Bear Form: Artio lets out a ferocious roar that Stuns all nearby enemies and increases her own Physical and Magical Protections for 4s.",
    ability3: "Life Tap (Heavy Charge)",
    ability3Des:
      "Druid Form: Artio channels for 2s, draining the life from enemies. While channeling she deals damage up to 5 times and heals herself up to 5 times. Each hit increasingly Slows enemies and enemies hit all 5 times are Rooted for 1s. Bear Form: Artio charges forward at an increased movement speed for 3s. Enemies she charges through take damage and are Slowed for 2s.",
    ult: "Shapeshift",
    ultDes:
      "Active: Artio Shapeshifts between her Druid stance and Bear stance. Passive: Every time Artio hits at least 1 enemy with an ability she gains 1 stack of Invigoration. Invigoration stacks increase her Movement Speed and MP5. Stacks last 6s, and stack up to 8 times.",
    img: "https://cdnb.artstation.com/p/assets/images/images/006/773/087/large/simon-eckert-smite-artio.jpg?1501139679",
  },
  {
    name: "Athena",
    damageType: "Magical",
    class: "Magic",
    passive: "Reach",
    passiveDes:
      "After using an ability Athena's next Basic Attack is ranged, passes through and hits all enemies, and deals 50% increased damage to the first enemy hit. Reach's damage will trigger Basic Attack Item Effects, but not Ability ones. ",
    ability1: "Preemptive Strike",
    ability1Des:
      "Athena powers up for a dash. While dashing, Athena will pass through minions, stop and hit the first enemy god she encounters, dealing damage and slowing all she hits. If she hits an enemy, Athena gains one stack of Block (max 3), absorbing the next Basic Attack from any god that hits her.",
    ability2: "Confound",
    ability2Des:
      "Athena releases a shockwave of power from her shield, Taunting enemy gods, and forcing them to fight or chase her.",
    ability3: "Shield Wall",
    ability3Des:
      "Athena summons a group of Athenian warriors who do damage upon arrival, and after 2s strike for additional damage.",
    ult: "Defender of Olympus",
    ultDes:
      "Athena picks a single allied god anywhere in the world, and launches herself up into the air, landing next to that god 3.6 seconds later. During that 3.6 seconds, the allied god gains 30% Damage Mitigation. Enemies nearby when Athena lands take damage.",
    img: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/10028503/847c81e48919d3e1f74d2f1e37046c679a5145d9.jpg",
  },
  {
    name: "Awilix",
    damageType: "Physical",
    class: "Assassin",
    passive: "Initiative",
    passiveDes:
      "If Awilix has not taken or dealt damage in the last 5s and she strikes an enemy first, she increases her Physical Power for a short duration.",
    ability1: "Summon Suku",
    ability1Des:
      "Awilix mounts her Panther Suku, gaining movement speed but decreasing strafe speed. Awilix may leap off of Suku to deal damage to all enemies in the target area. Canceling this ability before leaping will not trigger its Cooldown.",
    ability2: "Feather Step",
    ability2Des:
      "Awilix flips over the last enemy she hit within 1.5s, Rooting, Crippling, and dealing damage as she passes over them. The damage dealt is modified based on the next attack in Awilix's Basic Attack progression. If the next attack is her third attack, then she also hits all targets in the area around her.",
    ability3: "Moonlight Charge",
    ability3Des:
      "Suku comes to Awilix's aid, rushing forward and damaging all enemies. If hit from the side or behind, enemies are also knocked up into the air.",
    ult: "Gravity Surge",
    ultDes:
      "Awilix calls upon the power of the moon, immediately pulling to her the closest enemy god she is facing that is either leaping or knocked up into the air. The target god takes damage when they land. Awilix is then bathed in moonlight, gaining bonus Attack Speed and Physical Power, along with protection against Roots, Slows, and Knockbacks for 6s.",
    img: "https://www.godisageek.com/wp-content/uploads/Smite-awilix.jpg",
  },
  {
    name: "Baba Yaga",
    damageType: "Magical",
    class: "Mage",
    passive: "Creeping Cabin",
    passiveDes:
      "Baba Yaga's Cabin accumulates up to 100 essence over time, when it moves, and if enemy gods get too close. Baba Yaga can approach the Cabin and use this essence to gain evolving item stacks. Items with a low stack count take more energy. If Baba Yaga has no stacking item this essence heals Baba Yaga for 0.8% max health per tick.",
    ability1: "Wild Witchcraft",
    ability1Des:
      "Baba Yaga throws forward magic imbued with chaotic qualities. The magic will travel in the path of a random shape (Left Corner, Right Corner, Split, or Oval) and leave behind a random magical field on the ground it flew over for 4s. The fields can boost friendly Protections, boost friendly Movement Speed, lower enemy Movement Speed, or Silence enemies.",
    ability2: "Baba's Brew",
    ability2Des:
      "Baba Yaga throws together random ingredients to brew a Potion. Each Eye of Newt increases the Potion's Damage by 7.5%. Each Dragon Scale adds a 12.5% slow to enemies hit for 2.5s. Each Wolf Tooth adds a 7.5% Attack Speed slow and Power reduction to enemies hit for 5s. Baba Yaga can store a single Potion in her consumable slot refiring/canceling this ability. She can pull it out at any time to throw it.",
    ability3: "Blast Off!",
    ability3Des:
      "Baba Yaga crawls inside her Mortar for protection. While inside the mortar she gains Damage Mitigation, Knockup Protection, and begins to build up explosive magic. After 1s the magic explodes, launching Baba Yaga and her Mortar in the direction she is facing. Enemies near the Mortar when it explodes take damage.",
    ult: "Home Sweet Home",
    ultDes:
      "Baba Yaga calls down her Cabin, causing it to crash onto her and launch nearby enemies away. Baba Yaga commands the cabin for up to 8s, using it as a protective shield to create and throw 4 Witchfire Bolts from the inside. When the thrown Witchfire lands, it explodes dealing damage to enemies in the area while leaving behind a creeping patch of fire that chases nearby enemies. Enemies caught in the creeping fire take burn damage every 0.4s.",
    img: "https://i.ytimg.com/vi/FPx5Cyo5Arc/maxresdefault.jpg",
  },
  {
    name: "Bacchus",
    damageType: "Magical",
    class: "Mage",
    passive: "Drunk-O-Meter",
    passiveDes:
      "Bacchus loves the drink and as Bacchus drinks from his jug, he becomes more intoxicated, gaining Buffs when he gets Tipsy and Smashed. Bacchus also celebrates when he kills an enemy god, giving him 10% on his meter.",
    ability1: "Chug",
    ability1Des:
      "Bacchus takes a drink from his jug, giving him additional Buffs.",
    ability2: "Belly Flop",
    ability2Des:
      "Bacchus jumps into the air and, not so gracefully, comes slamming to the ground belly first, knocking all enemies into the air and dealing damage. If he is Tipsy, all enemies are also Slowed after they land.",
    ability3: "Belch of the Gods",
    ability3Des:
      "Bacchus lets out an obnoxiously loud belch, doing damage every .5s for 2s and reducing enemy healing. If he is Tipsy, enemies are Stunned for 1s. Bacchus is immune to knockback for the duration.",
    ult: "Intoxicate",
    ultDes:
      "Bacchus smashes his jug of wine on the ground, intoxicating all nearby enemies and doing damage. If he is Smashed, Bacchus also gains a Magical Power Buff because of his anger over his lost wine!",
    img: "https://i.ytimg.com/vi/IsZHSlXR3gw/maxresdefault.jpg",
  },
  {
    name: "Bakasura",
    damageType: "Physical",
    class: "Assassin",
    passive: "Insatiable Hunger",
    passiveDes:
      "Bakasura's attack and movement speed temporarily increases for each enemy that he kills.",
    ability1: "Take Down",
    ability1Des:
      "Bakasura leaps to his ground target location, dealing damage to all enemies in the area and increases the damage they take from all sources by 10% for 3s.",
    ability2: "Eat Minion",
    ability2Des:
      "Bakasura grabs a minion and devours it, healing himself and gaining a Protections Buff. Large Jungle monsters must be at 33% Health to be eaten, but will provide 2 minions toward Regurgitate. Up to 6 minions can be stored for Regurgitate.",
    ability3: "Butcher Blades",
    ability3Des:
      "Bakasura passively gains Physical Power. When activated, he gains additional true damage on each strike for the duration.",
    ult: "Regurgitate",
    ultDes:
      "Bakasura regurgitates all of the minions consumed by his Eat Minion ability at his ground target location that Slows for 3s and Cripples enemy players. This area lasts for 6s. Bakasura's Basic Attacks become cone attacks and he is immune to Crowd Control for a short duration. Bakasura is able to use Eat Minion on his regurgitated minions.",
    img: "https://i.ytimg.com/vi/Bz0Fm2QeANs/maxresdefault.jpg",
  },
  {
    name: "Baron Samedi",
    damageType: "Magical",
    class: "Mage",
    passive: "Hysteria",
    passiveDes:
      "Baron shares Baron's Brew, a powerful restorative chalice, with his allies from the Item Shop. Enemies hit by Baron will have Hysteria applied to them. Baron's abilities interact with Hysteria to provide bonus effects. Targets at Max Hysteria take 20% additional damage from Baron Samedi.",
    ability1: "Vivid Gaze",
    ability1Des:
      "Baron Samedi animates two skulls, both which briefly warm up before firing two beams of voodoo magic that damage enemies. The beams crossover wherever Baron Samedi was aiming. Enemies hit by both beams take 15% damage on the second hit. If the enemy god hit is above 30 Hysteria, their Physical Power, Magical Power, and Attack Speed are reduced for !{rankprog:3,3.5,4,4.5,5}!s.",
    ability2: "Consign Spirits",
    ability2Des:
      "Baron Samedi guides restless spirits to the ground and buries them. After a brief delay the ground erupts, damaging enemies standing in the area. If an enemy god is hit, friendly spirits fly from the area and heal allies near the explosion or by Baron Samedi. If the enemy god hit is above 30 Hysteria the friendly spirit cleanses ally slow effects, and increases their Movement Speed.",
    ability3: "Wrap It Up",
    ability3Des:
      "Baron Samedi throws his snake forward, wrapping any enemy god hit and dealing damage every .5s for 2.5s and applying a ramp to root. If a god hit is above 30 Hysteria, the snake will also lash out at nearby enemy gods who stand too close after 1s. Enemies hit by this are injected with venom that applies a ramp to root and deals the full damage over time immediately.",
    ult: "Life of the Party",
    ultDes:
      "Baron Samedi pulls the souls of the living towards his Coffin, becoming immune to Crowd Control and taking 35% reduced damage. Enemy gods within range are caught in a Vortex, dragging them towards the Coffin and taking damage every .33s. When an enemy god gets too close to the Coffin their soul is ripped out, causing them to be stunned, take a large amount of damage based on their maximum health and gain max Hysteria. This ability persists for 3.5s or until an enemy god is pulled to the Coffin. If targets being pulled are above 30 Hysteria, the pull strength is increased.",
    img: "https://i.ytimg.com/vi/RBiWUS3_6Kk/maxresdefault.jpg",
  },
  {
    name: "Bastet",
    damageType: "Physical",
    class: "Assassin",
    passive: "Tracking Scent",
    passiveDes:
      "When Bastet hits an enemy she marks the target for a brief time. Marked targets leave behind a scent trail Bastet can follow, gaining Movement Speed while in the scent trail.",
    ability1: "Pounce",
    ability1Des:
      "Bastet pounces to her target location, damaging enemies within the radius. For 4 seconds after pouncing, you can press the button again to pounce back to your initial location. Bastet moves 25% faster while in the return pounce state. If Guardians of Bast is active, she will command her guardians to also pounce with her.",
    ability2: "Razor Whip",
    ability2Des:
      "Bastet swipes at her enemies, causing them to Bleed for damage every second for the duration. If Guardians of Bast is active, she will command her guardians to also swipe at her enemies.",
    ability3: "Ensnaring Claw",
    ability3Des:
      "Bastet sends a cat forward at her enemies. If a cat finds an enemy it ensnares them, damaging them and rooting them for .5s. The cat persists for 4s or until defeated, continuing to attack nearby enemies. The cats attacks will apply a 2s slow to the enemy. If Guardians of Bast is active, she will command her guardians to also charge forward.",
    ult: "Guardians of Bast",
    ultDes:
      "Bastet calls her loyal Guardian cats to her side. These Guardians will follow Bastet's order, assisting her in any ability she casts and dealing a percentage of Bastet's damage.",
    img: "https://i.ytimg.com/vi/HHxvnC31vQw/maxresdefault.jpg",
  },
  {
    name: "Bellona",
    damageType: "Physical",
    class: "Warrior",
    passive: "Master of War",
    passiveDes:
      "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks).",
    ability1: "Shield Bash",
    ability1Des:
      "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    ability2: "Bludgeon",
    ability2Des:
      "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    ability3: "Scourge",
    ability3Des:
      "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    ult: "Eagles Rally",
    ultDes:
      "Bellona plants a Roman flag, granting Protections and increased Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    img: "https://i.ytimg.com/vi/uogIpviIZlY/maxresdefault.jpg",
  },
  // {
  //   name: "",
  //   damageType: "",
  //   class: "",
  //   passive: "",
  //   passiveDes: "",
  //   ability1: "",
  //   ability1Des: "",
  //   ability2: "",
  //   ability2Des: "",
  //   ability3: "",
  //   ability3Des: "",
  //   ult: "",
  //   ultDes: "",
  //   img: "",
  // },
  // {
  //   name: "",
  //   damageType: "",
  //   class: "",
  //   passive: "",
  //   passiveDes: "",
  //   ability1: "",
  //   ability1Des: "",
  //   ability2: "",
  //   ability2Des: "",
  //   ability3: "",
  //   ability3Des: "",
  //   ult: "",
  //   ultDes: "",
  //   img: "",
  // },
];

module.exports=godsSeed