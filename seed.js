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
  {
    name: "Cabrakan",
    damageType: "Magical",
    class: "Guardian",
    ability1: "Seismic Crush",
    ability2: "Refraction Shield",
    ability3: "Tremors",
    ult: "Tectonic Shift",
    passive: "Shadow Zone",
    ability1Des:
      "Cabrakan becomes enraged, increasing his movement speed. While active, Cabrakan gains 70% increased Attack Speed and his next successful Basic Attack will Stun with no diminishing returns and do bonus damage. Additionally, Cabrakan gains Haste and is immune to Slows and Roots while this ability is active.",
    ability2Des:
      "Passive: As Cabrakan's shields take damage they store energy and gain Protection stacks. Active: Cabrakan slams his shields together creating a concussive blast and damaging enemies in front of him. If his shields have the maximum number of Stacks then the enemy gods hit are Stunned. Stacks are removed.",
    ability3Des:
      "Cabrakan repeatedly slams the ground with his shields creating an earthquake and causing enemy gods around him to Tremble. Enemies in the earthquake also take damage and are caught in a Vortex which drags them towards Cabrakan. This ability can only be channeled for a maximum amount of 10s.",
    ultDes:
      "Cabrakan stomps the ground creating a wall of earth and a fissure that travels out in front of him and damages any enemies caught in its path. The walls may be destroyed if they take enough hits. Cabrakan may destroy his own walls with a single Basic Attack.",
    passiveDes: "Cabrakan and nearby allies take 5% reduced damage.",
    img: "https://i.ytimg.com/vi/f8IpkmID4Dg/maxresdefault.jpg",
  },
  {
    name: "Camazotz",
    damageType: "Physical",
    class: "Assassin",
    ability1: "Screech",
    ability2: "Vampire Bats",
    ability3: "Devour",
    ult: "Bat Out of Hell",
    passive: "Essence Drinker",
    ability1Des:
      "Camazotz screeches loudly and launches a sound wave that pierces through minions and deals damage. If the screech hits an enemy god, the sound wave will echo. If Camazotz is hit by an echo, he gains vision of the god that was hit by screech for the next 15s and gains bonus Physical Power for the duration.",
    ability2Des:
      "Camazotz commands a swarm of bats to fly out and attack a single target, damaging and slowing them by 30% for 3s and then carrying back a heal. If the target was a Buff Holder, Oracle, or Alpha Harpy, they will be marked and Camazotz will receive a heal as well as a stackable Vampirism buff that lasts 300s. Marked monsters will not provide Camazotz with another stack of Vampirism or an additional heal.",
    ability3Des:
      "Camazotz Leaps forward a short distance dealing damage on impact and healing himself per enemy hit.",
    ultDes:
      "Camazotz flies into the air for the next 4s. While flying, he may swoop forward to deal damage. He may do this up to 3 times, landing on the 3rd time. Hitting more than one enemy god in a single swoop will deal increased damage per god.",
    passiveDes:
      "Camazotz has a passive Essence Drinker bonus for Physical Lifesteal and Healing. Also, anytime a god dies they leave behind a pool of their essence in the spot they were slain. Camazotz may stand inside these pools to drink the essence every .5s, replenishing his Health and Mana.",
    img: "https://i.ytimg.com/vi/2SiCBwQkk20/maxresdefault.jpg",
  },
  {
    name: "Cereberus",
    damageType: "Magical",
    class: "Guardian",
    ability1: "Paralyzing Spit",
    ability2: "Ghastly Breath",
    ability3: "Soul Expulsion",
    ult: "Stygian Torment",
    passive: "Spirit of Death",
    ability1Des:
      "Cerberus's snake tail spits venom that passes through and damages Enemies. If Cerberus's dog heads are Alert, they then also spit venom when the ability is fired. Each head is alerted upon hitting an Enemy with a Basic Attack, and all are alerted after Ghastly Breath. Each projectile that hits the same target deals 20% less damage, but hitting an Enemy with all 4 Stuns them.",
    ability2Des:
      "Each of Cerberus's 3 heads releases a cone of noxious breath in front of them, damaging all Enemies in range 7 times over 2.4s and reducing their Magical Protection up to three times. Enemies in the center of his breath are also Slowed up to three times. This attack immediately puts all three of Cerberus's heads on Alert for Paralyzing Spit.",
    ability3Des:
      "Cerberus leaps a short distance forward, dealing damage on impact and severing the souls of Enemies. These souls will not block Cerberus's attacks, and killing the souls heals Cerberus.",
    ultDes:
      "Cerberus's haunting wail summons below him the souls of the damned, which then knockup all Enemy Gods into the air while stretching the link between their bodies and souls, Damaging them. This knockup can be cleansed. A short time later, Cerberus uses this link to pull the Enemies to him.",
    passiveDes:
      "Any time an Enemy God within 40 units of Cerberus is healed, that healing is reduced by 20% and Cerberus receives 50% of the heal. Cerberus reduces all types of healing, and steals from all types except HP5. The amount stolen is based off the heals base effect, and does not include any increase or reduction applied.",
    img: "https://i.ytimg.com/vi/4IU1zWWJRr4/maxresdefault.jpg",
  },
  {
    name: "Cernunnos",
    damageType: "Physical",
    class: "Hunter",
    ability1: "Shifter of Seasons",
    ability2: "Bramble Blast",
    ability3: "Horn Charge",
    ult: "The Wild Hunt",
    passive: "Heavy Glaive",
    ability1Des:
      "Cernnunos imbues his glaive with the power of the 4 seasons. Activating this ability rotates him through 4 different bonuses to his basic attacks. Spring Growth: Bonus Physical Lifesteal Summer Heat: Bonus Damage Autumn Decay: Debuff for 7s Winter Chill: Slows for 1s",
    ability2Des:
      "Cernunnos fires a bramble forward in a line that roots a single enemy hit. Upon hitting an enemy, wall, or reaching max range it will explode dealing damage and spawning an area of brambles at the location. This area deals damage every .5s and persists for 5s.",
    ability3Des:
      "Cernunnos charges forward, damaging and crashing through all types of enemies.",
    ultDes:
      "Cernunnos selects an area where The Wild Hunt will begin. After a 1s delay, enemies in the area will be damaged and gods will be Polymorphed into wild boars. Polymorphed gods are silenced, disarmed and slowed. Polymorph is not affected by diminishing returns.",
    passiveDes:
      "Cernunnos wields a Glaive as a weapon. His basic attacks deal additional damage to all enemies in melee range while he is throwing it. The additional damage from Heavy Glaive does not trigger any effects from items or abilities. It also can not Critical Strike.",
    img: "https://i.ytimg.com/vi/EvhF6HLdJjQ/maxresdefault.jpg",
  },
  {
    name: "Chaac",
    damageType: "Physical",
    class: "Warrior",
    ability1: "Thunder Strike",
    ability2: "Torrent",
    ability3: "Rain Dance",
    ult: "Storm Call",
    passive: "Overflow",
    ability1Des:
      "Chaac throws his axe forward, damaging all enemies in a radius around its landing location. The axe remains idle in the ground for 5s or until another ability is used.",
    ability2Des:
      "Chaac spins his axe around him, damaging all enemies, and gaining Protections for each enemy hit (max. 5). Gods hits provide 2 stacks. If his axe is out from Thunder Strike, he will first dash to the axe location, doing 50% base damage to enemies he passes through and then executing his spin attack. This dash can go through walls.",
    ability3Des:
      "Chaac summons a rainstorm around his current location for 6s. While it rains, he regains Health, and enemies are caught in the mud and have their Movement Speed and Attack Speed reduced. If his axe is out from Thunder Strike, a rainstorm will also spawn at that location. Enemies caught in the area of both rainstorms will have the Movement Slow and Attack Speed Reduction applied twice.",
    ultDes:
      "Chaac charges up his lightning axe for a short duration then unleashes a blast, Silencing, Knocking Up and damaging all enemies around him. While charging up, Chaac has Damage Mitigation and is immune to Crowd Control effects.",
    passiveDes:
      "After 5 successful Basic Attacks, the next ability Chaac uses costs no Mana and has its cooldown reduced by 2s.",
    img: "https://i.ytimg.com/vi/yjGj1QGXOH0/maxresdefault.jpg",
  },
  {
    name: "Chang'e",
    damageType: "Magical",
    class: "Mage",
    ability1: "Crescent Moon Dance",
    ability2: "Monlit Waltz",
    ability3: "Moonflower Dance",
    ult: "Waxing Moon",
    passive: "Jade Rabbit",
    ability1Des:
      "Chang'e flings a crescent moon in an arc, dealing damage to all enemies in its path.",
    ability2Des:
      "Chang'e performs an evasive spin dance. She is immune to damage and Crowd Control during the action. For each tick of damage from an ability or Basic Attack that was avoided, Chang'e restores Mana to herself and her allies.",
    ability3Des:
      "Chang'e twirls, scattering flowers around her, and healing herself and all nearby allies and damaging nearby enemies. Moonflower Dance also reduces the healing of all nearby enemies.",
    ultDes:
      "Chang'e's Waxing Moon dance is captivating, with this dance dealing damage and Stunning enemy gods in front of her. Each subsequent god that gets Stunned is Stunned for longer than the previous one.",
    passiveDes:
      "Chang'e can purchase or sell items from anywhere and her Jade Rabbit companion will fetch them. When the Rabbit reaches the store then returns, the transaction completes. Only one item can be purchased or sold in this way at a time. Chang'e also gains +25% movement speed with no backpedal penalty when using her dances.",
    img: "https://i.ytimg.com/vi/Q75TpL9JFtk/maxresdefault.jpg",
  },
  {
    name: "Charybdis",
    damageType: "Physical",
    class: "Hunter",
    ability1: "Spike Shot",
    ability2: "Capsize",
    ability3: "Whirlpool Form",
    ult: "The Maw Hungers",
    passive: "Raging Tides",
    ability1Des:
      "Charybdis reveals The Maw as it fires large spikes for a short duration dealing Basic Attack damage. These projectiles pass through minions and are wider and faster than normal Basic Attacks. On hitting enemy gods and walls, the spikes splinter dealing additional damage.",
    ability2Des:
      "Charybdis absorbs water from around her before firing a quick blast from The Maw. Enemies are hit by a rapidly decaying Slow and Physical Protection debuff. This ability can be channeled for longer, consuming Tide on fire, to become wider, strengthen the debuff effects and deal more damage. Up to 40% Tide consumed.",
    ability3Des:
      "Charybdis dives into a whirlpool she creates, expanding and revealing the terrifying Maw. Charybdis moves faster and deals damage to enemies caught in the area. This ability can be amplified by toggling it again and spending 30% Tide. Doing so increases the damage dealt and movement speed as well as providing extra damage and a knockup on exiting. While submerged, Charybdis is untargetable and immune to damage for up to 3s.",
    ultDes:
      "Charybdis reveals her true nature, becoming immune to Crowd Control for the next 6s, and gaining movement speed. She may make one powerful attack as The Maw charges forward, damaging and carrying back enemies hit before chomping down, damaging again and stunning. If she kills an enemy god with the attack, she gains another 6s and may attack again.",
    passiveDes:
      "Charybdis' attack speed increases as her Tide increases. Successful Basic Attack hits increase her Tide. Charybdis deals less damage with item effect procs.",
    img: "https://i.ytimg.com/vi/_8XnTfj0RGE/maxresdefault.jpg",
  },
  {
    name: "Chernobog",
    damageType: "Physical",
    class: "Hunter",
    ability1: "Crystallized Curses",
    ability2: "Vicious Barrage",
    ability3: "Into Darkness",
    ult: "Living Nightmare",
    passive: "Heart of Cold",
    ability1Des:
      "Chernobog conjures a large crystal of curses and hurls it at the target location dealing damage on landing. After several seconds the crystalline curses explode dealing damage again and rooting any enemy in the area. The crystal can be detonated early by firing at it with Vicious Barrage.",
    ability2Des:
      "Chernobog fires an enlarged crystal shard that can pierce enemies and deals damage like a Basic Attack. This applies a single stack of Heart of Cold to all enemies it passes through and instantly detonates Crystallized Curses. After firing, Chernobog gains increased Attack Speed for several seconds.",
    ability3Des:
      "Chernobog dashes forward, dealing damage and slowing any enemy he collides with for 2s. If Chernobog comes in contact with a wall, he briefly enters it as a shadow, becoming untargetable and immune to damage for up to 3s. Chernobog can leave the wall early by dashing or just stepping out of the wall. If he remains for the full duration, Chernobog will automatically dash out as his time expires.",
    ultDes:
      "During a brief channeling period, Chernobog summons shadows at the location of all enemies that last for 8s and apply a short stacking Slow. Chernobog can select any of his shadow clones to fly towards. Once he reaches the location he takes the place of his shadow, refreshing his cooldowns, as well as temporarily obtaining damage mitigations and extra movement speed.",
    passiveDes:
      "Every successful Basic Attack impales the enemy with a brittle crystal. Upon reaching 3 stacks of Heart of Cold, the enemy explodes for extra damage in an area around them (This damage does not trigger Item effects).",
    img: "https://i.ytimg.com/vi/wu30uv2zqGE/maxresdefault.jpg",
  },
  {
    name: "Chiron",
    damageType: "Physical",
    class: "Hunter",
    ability1: "Training Exercise",
    ability2: "Masterful Shot",
    ability3: "Giddyup!",
    ult: "Centaurus",
    passive: "Herbal Medicine",
    ability1Des:
      "Chiron warns his teammates to evade the area, granting them .3s of Crowd Control Immunity so they can escape before it explodes and does damage to all enemies in the area. Applies Target Mark",
    ability2Des:
      "Chiron passively marks his enemies as targets when he damages them with Basic Attacks, Training Exercise, or Centaurus, reducing their Physical Protections by 5%. He may activate this ability to fire seeking arrows at all marked targets within range, damaging and slowing them.",
    ability3Des:
      "Chiron gallops forward damaging enemies, knocking up minions, and kicking enemy gods behind him. Chiron is immune to knockups while charging. Chiron may fire Basic Attacks while charging.",
    ultDes:
      "Chiron is transformed into a constellation, and can fire three long-distance shots, even through walls. If Chiron would be killed during this ability, he does not die until he runs out of time or shots. Killing an enemy with this ability when Chiron would have died returns him to life with health equal to the damage dealt instead. Applies target mark.",
    passiveDes:
      "Every 12s Chiron collects herbs for a poultice. Each time he uses an ability, a poultice is consumed to heal himself or an ally within 30 units, based on who has the lowest health. Healed allies also gain Physical and Magical Power.",
    img: "https://i.ytimg.com/vi/Nrxal0N0bY0/hqdefault.jpg",
  },
  {
    name: "Chronos",
    damageType: "Magical",
    class: "Mage",
    ability1: "Time Rift",
    ability2: "Accelerate",
    ability3: "Time Stop",
    ult: "Rewind",
    passive: "Time Lord",
    ability1Des:
      "Chronos creates a rift in time, damaging all enemies in the area.",
    ability2Des:
      "Chronos accelerates himself over time, allowing him to move faster initially and gain speed over time. While active, his Attack Speed is increased. This ability also stops the Wheel of Time. Section I: Heal 1.5% Max Health Per Second. Section II: 100% Mana Refund On Abilities. Section III: +25% Magical Power. Section IV: +35% Magical Power Contribution to Basic Attacks.",
    ability3Des:
      "Shooting forward spinning gears of time, any enemies hit by Chronos' attack have their Attack Speed reduced and Ramp to a Stun, taking damage on the initial hit and again when they are stunned.",
    ultDes:
      "Chronos travels through time to where he was 8 seconds ago, gaining Health and Mana back to the values of that time. All of his Cooldowns are instantly reset as well.",
    passiveDes:
      "Chronos becomes empowered as time flows around him. Every 2 minutes he gains a stack that increases his Magical Power. Stacks up to 25 times, stacks are permanent.",
    img: "https://i.ytimg.com/vi/akVaCTioU9U/maxresdefault.jpg",
  },
  {
    name: "Cthulu",
    damageType: "Magical",
    class: "Guardian",
    ability1: "Sanity Break",
    ability2: "The Mire",
    ability3: "Rushing Terror",
    ult: "Descend into Madness",
    passive: "Prey on Fear",
    ability1Des:
      "Cthulhu sends out a terrifying blast of energy, dealing damage to all enemies hit and reducing their Attack Speed. Enemies hit by this ability also do reduced damage to Cthulhu for 6s. This ability applies 1 stack of Torment, 2 if the enemy hit is facing Cthulhu or Fears them instead if they are afflicted with Insanity. Successfully consuming Insanity permanently increases the base mitigation of this ability.",
    ability2Des:
      "Cthulhu summons a portal creating a slowing field of eldritch mire at the target location. While Cthulhu channels, The Mire continues to grow as the portal fires out two masses of corruption that hit and damage all enemies in the field. The first shot also Slows enemies while the second Roots them, both hits applying 1 stack of Torment. Cancelling the ability early stops The Mire from growing or the portal from firing additional shots.",
    ability3Des:
      "Cthulhu creates two twisting projectiles at his sides as he unfurls his wings and charges forwards, damaging, stunning and knocking away enemies hit. The projectiles follow at a slightly slower pace but travel further, damaging enemies as well. Enemies hit by Cthulhu or the projectiles gain 1 stack of Torment.",
    ultDes:
      "Cthulhu reveals his true form as he plunges the battlefield into R'lyeh while any enemies caught nearby are damaged. In this form Cthulhu gains increased Health, becomes immune to Crowd Control and gains access to new abilities. Enemies near Cthulhu gain stacks of Torment, increasing in pace if they are facing him. Enemies also suffer the debuff effects of Sanity Break, causing them to deal less damage to Cthulhu. ",
    passiveDes:
      "Cthulhu breaks down the mental fortitude of enemy gods, applying stacks of Torment with abilities and the final hit of his basic attack chain. On reaching 4 stacks of Torment, enemies are afflicted by Insanity. Additionally, Cthulhu gains Magical Power per nearby enemy god with Insanity.",
    img: "https://i.ytimg.com/vi/SrkTGC78K5c/maxresdefault.jpg",
  },
  {
    name: "Cu Chulainn",
    damageType: "Physical",
    class: "Warrior",
    ability1: "Barbed Spear",
    ability2: "Vent Anger",
    ability3: "Salmons Leap",
    ult: "Spear of Mortal Pain",
    passive: "Berserk",
    ability1Des:
      "Cu Chulainn thrusts his spear forward, damaging all enemies in front of him and stunning less powerful minions. Successfully hitting an enemy minion with this ability restores 5 Rage, 8 for a god (to a max of 18). Barbs from his spear stick in opponents and reduce their healing received for 4s. In his Berserk Form, Cu Chulainn instead slams his massive arms down, damaging and rooting all enemies in front of him and this ability costs no Rage.",
    ability2Des:
      "Cu Chulainn vents his anger as superheated steam, increasing his Movement Speed and draining his Rage. Every .5s while in this state, all enemies within range are damaged by the heat. Vent Anger does not return Rage. In his Berserk form, Cu Chulainn Vents Anger automatically and does not drain Rage.",
    ability3Des:
      "Cu Chulainn vaults over his spear, leaping to a target location and slamming it down to damage enemies around and in front of him. Successfully hitting an enemy minion with this ability restores 5 Rage, 8 for a god (to a max of 18). In his Berserk Form, Cu Chulainn instead charges forward damaging, stunning and driving all enemies back with him and this ability costs no Rage.",
    ultDes:
      "Cu Chulainn vaults over his spear, leaping to a target location and slamming it down to damage enemies around and in front of him. Successfully hitting an enemy minion with this ability restores 5 Rage, 8 for a god (to a max of 18). In his Berserk Form, Cu Chulainn instead charges forward damaging, stunning and driving all enemies back with him and this ability costs no Rage.",
    passiveDes:
      "Cu Chulainn's Mana, MP5, and Mana Heals are applied to his Health pool. Abilities consume Rage, which stops regen at 25, but he gains Rage upon hitting with his Abilities as well as 1 Rage for Basic Attacks and .5 when he or allies take damage. After 3s above 85, he goes Berserk. While Berserk, Cu Chulainn gains Power and a Health Shield.",
    img: "https://i.ytimg.com/vi/yN6mVBRypVA/maxresdefault.jpg",
  },
  {
    name: "Cupid",
    damageType: "Physical",
    class: "Hunter",
    ability1: "Heart Bomb",
    ability2: "Share the Love",
    ability3: "Flutter",
    ult: "Fields of Love",
    passive: "Lovestruck",
    ability1Des:
      "Cupid fires an arrow of love at the target, causing damage when it hits and Slowing them. After a short time, the targets heart explodes, dealing the damage again to the target and all enemies within the radius. If Cupid has max Heart Stacks then all enemies in the explosion area are Stunned for 1s. Minions take 50% increased damage from Heart Bomb.",
    ability2Des:
      "Cupid places 3 floating hearts at his ground target location that heal himself or allied gods when picked up. Cupid regenerates Mana for each heart that is picked up by an ally.",
    ability3Des:
      "Passive: Cupid gains increased Attack Speed. Active: Cupid flutters forward quickly, leaving a trail behind him that increases all allies' movement speed.",
    ultDes:
      "Cupid fires arrows of love at his ground target location, slowing enemies in the area and crippling them, preventing movement abilities. The arrows grow and explode, dealing damage and Mesmerizing enemies. Any damage done breaks the Mesmerize effect. If Cupid has max Heart Stacks the Mesmerize duration is doubled.",
    passiveDes:
      "Every hit with a Basic Attack gives Cupid a Heart Stack that increases the damage or healing of his abilities. Heart Bomb and Fields of Love will always consume the Heart Stacks and at 8 Stacks they will have additional effects.",
    img: "https://i.ytimg.com/vi/A7pauzC_X-E/maxresdefault.jpg",
  },
  {
    name: "Da Ji",
    damageType: "Physical",
    class: "Assassin",
    ability1: "Horrible Burns",
    ability2: "One Thousand Cuts",
    ability3: "Trickster Spirit",
    ult: "Paolao",
    passive: "Torture Blades",
    ability1Des:
      "Da Ji heats up her claws, causing her next successfully hit Basic Attack to burn the target, dealing instant bonus damage, additional damage every 1s for 3s and Slowing them for 3s. Da Ji gains Haste when this ability activates, which lasts until she hits a target.",
    ability2Des:
      "Da Ji lashes out with her claws at nearby enemies, executing 4 strikes that damage all enemies in range and apply the Bleed from Torture Blades. While this ability is channeling Da Ji moves freely in all directions, gains 40% increased Movement Speed, immunity to Slows and Knockups, and her tails mitigate Damage dealt to her by Enemy Gods who are behind her.",
    ability3Des:
      "Da Ji selects a single allied or enemy target and teleports to their location after a short delay. Upon arriving at the target, she lashes out with her claws, dealing damage and applying the Bleed from Torture Blades to all enemies around her.",
    ultDes:
      "Da Ji Summons her signature torture device, the Paolao. As she hovers above the device she may fire up to 3 shots. Enemy gods hit take damage and become Chained and Slowed. At the end of her ability Chained enemies are pulled to the Paolao becoming Stunned and then taking damage 3 times over 2s. If a god hit by this ability becomes Crowd Control Immune at any time, they break the Chain on them and cannot be Chained again until this ability ends.",
    passiveDes:
      "Da Ji's sharp claws cause her enemies to Bleed when struck by her basic attacks. Bleeding causes the enemy to take additional damage every 1s for 2s (This damage does not trigger Item effects). Bleed can stack any number of times on the same target.",
    img: "https://i.ytimg.com/vi/Rphf9Ns5xJo/maxresdefault.jpg",
  },
  {
    name: "Danzaburou",
    damageType: "Physical",
    class: "Hunter",
    ability1: "Fool's Gold",
    ability2: "Allurng Spirits",
    ability3: "Tanuki Trickery",
    ult: "Uproarious Rocket",
    passive: "Dubious Savings",
    ability1Des:
      "Danzaburou rolls out 3 money bags that pass through and damage Enemy minions but stop on Enemy gods, slowing as they travel. Gods hit are damaged and Intoxicated, dropping a gold coin that Danzaburou or his ally gods can pick up to provide him 10 gold. When a money bag stops moving, it reveals to be an explosive which detonates after a short delay. Subsequent hits of the money bag or explosions deal 15% damage.",
    ability2Des:
      "Danzaburou takes a swig of his sake bottle, gaining health, before hurling it in front of him dealing damage to Enemies in the inner circle. The bottle of sake applies stacks to Enemy gods in the area slowing, and upon reaching 3 stacks, taunting (with no DR) them towards the sake bottle. Enemies that take more than 30% of their max. Health while taunted are broken out early.",
    ability3Des:
      "Danzaburou creates a field where he moves faster, is slow immune, takes less basic attack damage, and has no basic attack penalty. Enemies are slowed by 20%. If he leaves the field it fades turning him into a leaf with other decoys that mimic his movement. As a leaf his movement speed is increased, he is slow immune and can pass through enemies and allies. After a short delay from transforming, any hit from Enemy gods or if Danzaburou himself attacks, he will revert back.",
    ultDes:
      "Danzaburou summons a magical leaf which transforms into a large bamboo rocket! While preparing, Danzaburou can aim the rocket within 180 degrees to lock onto Enemy gods or he can refire this ability to become the rocket, also becoming damage immune. Once fired the Rocket will pass through and damage Enemy minions, stopping on the first Enemy god hit damaging and stunning them while dealing 50% damage in a larger area.",
    passiveDes:
      "Every time Danzaburou actively gains gold, he stores 10% into one of his money pouches instead. When a pouch is completely filled, Danzaburou gains bonus gold and a permanent Physical Power increase before switching to a larger money pouch.",
    img: "https://i.ytimg.com/vi/Qy9sHHv1M8U/sddefault.jpg",
  },
  {
    name: "Discordia",
    damageType: "Magic",
    class: "Mage",
    ability1: "Unruly Magic",
    ability2: "Strife",
    ability3: "Erratic Behavior",
    ult: "Golden Apple of Discord",
    passive: "Contest of the Gods",
    ability1Des:
      "Discordia sends an orb of unruly magic to a location that damages any enemies it hits along the way. At that location it will break down into 6 minor projectiles that fire out in all directions, damaging any enemies hit and bouncing off of walls.",
    ability2Des:
      "Discordia creates an area of Strife that damages all enemies hit. If 2 or more enemy gods are hit at the same time they will be afflicted by Madness for 1s, forcing them to attack each other for additional damage. The same is true for minions. If only a single target of one type is hit then it becomes Rooted for 1s instead",
    ability3Des:
      "Discordia leaps a short distance and then creates an area of confusion where she lands that persists for 5s. While inside the area she becomes stealthed, gains bonus movement speed, and Her 1st and 2nd ability cooldowns are decreased by an additional amount of time every .5s she remains in the area. Attacking from the area will briefly reveal her.",
    ultDes:
      "Discordia throws her Golden Apple of Discord that damages and passes through minions and bounces off of walls. If the Apple hits an enemy god it will damage them and force them to hold the Apple. Gods holding the apple will become intolerable, causing them to be Crippled, Intoxicated while they constantly boast. At the end of the duration, the Apple will detonate, dealing damage and spreading the effects to nearby gods.",
    passiveDes:
      "Discordia is constantly comparing herself and her teammates to see who is the best. Whichever god on her team has the top damage dealt to enemy players will receive a Power buff that scales off Discordia's level.",
    img: "https://i.ytimg.com/vi/0dOIlgWeHs4/maxresdefault.jpg",
  },
  {
    name: "Erlang Shen",
    damageType: "Physical",
    class: "Warrior",
    ability1: "Spot Weakness",
    ability2: "Pin",
    ability3: "72 Transformations",
    ult: "9 Turns Blessings",
    passive: "Howling Celestial Dog",
    ability1Des:
      "Erlang Shen opens his third eye and analyzes the enemy's strengths and weaknesses. When activated, Erlang Shen gains additional Physical Damage on each strike. If the buff effect has ended and the ability is on Cooldown, successful Basic Attacks reduce the Cooldown of this ability by 1s.",
    ability2Des:
      "Erlang Shen launches a spear that damages enemies on impact. Enemies in the dead center of the effect when it lands are Rooted in place.",
    ability3Des:
      "Erlang Shen transforms into a Mink or Turtle and charges forward. Mink: Damages all enemies, stopping on first god hit and increasing Attack Speed for 4s. Turtle: Knocks up all enemies in path and gains a health shield for 12s.",
    ultDes:
      "Erlang Shen Taunts nearby Enemy gods, gaining Damage Mitigation for the next 4s. Afterwards, if Erlang Shen is still alive he is Healed for a flat amount plus 15% of his Maximum Health.",
    passiveDes:
      "Each time Erlang Shen hits an enemy with a Basic Attack, his dog hits as well for 15% of his Basic Attack power and 1% of the target's max. health. The percentage damage only works against gods and minions.",
    img: "https://i.ytimg.com/vi/syQrIN8K4lM/maxresdefault.jpg",
  },
  {
    name: "Isis",
    damageType: "Magical",
    class: "Mage",
    ability1: "Wing Gust",
    ability2: "Spirit Ball",
    ability3: "Dispel Magic",
    ult: "Circle of Protection",
    passive: "Funeral Rites",
    ability1Des:
      "Eset flaps her wings, gaining increased movement speed with no backpedal penalty, and sending forth 4 wing gusts in a line, each dealing Magical Damage to all targets in their path. Eset is immune to Root and Knockback effects while casting.",
    ability2Des:
      "Eset sends forth a ball of spirit energy. As the ball travels, it gains in power up to 1.5x at max. range. At any time, Eset can activate the ability to detonate the ball, dealing Magical Damage and Stunning enemies within 10 units, scaling in duration up to 1.5s at max range.",
    ability3Des:
      "Eset Silences and slows enemy gods at her target location. Enemy gods hit also lose a portion of their Magical Protection. If Eset successfully hits an enemy god, allies near the Dispel Magic or Eset gain a shield. If Eset hits multiple enemy gods, the shield is increased by 40% for each enemy hit after the first up to a maximum of 80%.",
    ultDes:
      "Eset plants her staff at her target location for 5s. Allies within its radius take less damage. Any damage dealt within the radius charges up the staff. If Eset activates the staff again, it explodes, dealing damage to enemies inside and healing allies.",
    passiveDes:
      "Eset shares additional HP5 and MP5 with nearby allies. For every player death within 80 units, her aura gains an additional Stack (max. 10). Upon reaching 10 Stacks, Eset gains an additional 10% Cooldown Reduction. Additionally, Eset's final Basic Attack in her progression has a wider radius (+2).",
    img: "https://i.ytimg.com/vi/VoGiLUw5MPs/maxresdefault.jpg",
  },
  {
    name: "Fafnir",
    damageType: "Magic",
    class: "Mage",
    ability1: "Cursed Strength",
    ability2: "Coerce",
    ability3: "Underhanded Tactics",
    ult: "Draconic Corruption",
    passive: "Endless Greed",
    ability1Des:
      "Fafnir hurls his hammer forward, dealing damage to enemies in its path. If Fafnir hits a god the hammer stops short and Stuns them. The Stunned god also radiates out a cursed pulse, Slowing them and nearby enemies by 20% for 3s. In dragon form, this ability deals increased damage that ticks 3 times over 3s. Also, the cursed pulse shreds Protections in addition to Slowing.",
    ability2Des:
      "Fafnir coerces his allies into fighting harder, boosting Attack Speed for 5s and healing himself. While Coerce is active Fafnir deals bonus Magic Damage whenever the affected ally damages an enemy. In dragon form, this ability has a larger area of effect and can buff multiple allies.",
    ability3Des:
      "Fafnir leaps to a target location and executes a despicable strike, dealing damage and disarming enemies in front of him for 2s. In dragon form, Fafnir can leap much further. Also, this ability deals increased damage that ticks three times over 3s and Fafnir Stuns the enemy god closest to him for 2s in addition to Disarming.",
    ultDes:
      "Fafnir transforms into a terrifying dragon and is untargetable during the process. When he emerges in dragon form, he regains 200 Mana and nearby enemies become poisoned, taking damage three times over 3s. He remains in this form for a duration or until the ability is activated again. As a dragon, his abilities have additional effects and his basic attack changes to a Dragon Breath that deals damage 3 times per second. Dragon Breath can not proc item hit effects.",
    passiveDes:
      "Fafnir gains 2 bonus gold from all enemy kills and assists, including minions. Fafnir also gains bonus Protections based on the amount of gold he is currently holding. The bonuses gained from this ability are capped at 1000 gold in hand.",
    img: "https://i.ytimg.com/vi/eJGJWHx5bmM/maxresdefault.jpg",
  },
  {
    name: "Fenrir",
    damageType: "Physical",
    class: "Assassin",
    ability1: "Unchained",
    ability2: "Seething Howel",
    ability3: "Brutalize",
    ult: "Ragnarok",
    passive: "Unbound Runes",
    ability1Des:
      "Fenrir leaps forward, dealing damage to all enemies when he lands. At full Runes, the leap Stuns the enemies hit. If the leap hits a god, the Cooldown is reduced by 30%.",
    ability2Des:
      "Fenrir rears back and howls, inspiring himself with a Physical Power and Lifesteal Buff. While inspired Fenrir generates 2 runes.",
    ability3Des:
      "Fenrir gains increased protections and pounces to his ground target location. If there was an enemy in the radius, he strikes them 4 times, dealing damage with each strike and hits enemies around the target for 60% of the damage. While casting this ability Fenrir is immune to knockups. At full Runes, each strike gains 15% additional Physical Power scaling.",
    ultDes:
      "Upon Ragnarok, Fenrir grows massive in size, becoming immune to Crowd Control while moving faster. Fenrir bites enemy gods, dealing Physical damage and carrying them away. Biting a Crowd Control immune target deals the damage but ends his Ultimate. At full Runes, his Protections double.",
    passiveDes:
      "Fenrir gains efficiency as he attacks. Every hit from a Basic Attack activates 1 Rune, up to a max. of 5. Unchained, Brutalize, and Ragnarok gain additional benefits when used at maximum Runes and the Runes are consumed. Enemy gods that Fenrir kills will fully activate all of his Runes. Assisting with a kill will grant Fenrir 3 Runes.",
    img: "https://i.ytimg.com/vi/wqsf3ThdGRE/maxresdefault.jpg",
  },
  {
    name: "Freya",
    damageType: "Magical",
    class: "Mage",
    ability1: "Irradiate",
    ability2: "Pulse",
    ability3: "Banish",
    ult: "Valkyrie's Discression",
    passive: "Brisingamen's Blessing",
    ability1Des:
      "Freya activates a Buff that makes her Basic Attacks do bonus Magical damage.",
    ability2Des:
      "Freya activates a Buff that makes her Basic Attacks ranged, dealing bonus Magical damage and Slowing the target and all nearby enemies. The area effect and slow are lost when Irradiate is active.",
    ability3Des:
      "At her ground target location, Freya Banishes her enemies into the air for a short time. The enemies can't be hit or take action while in the air.",
    ultDes:
      "Freya uses her Cloak of Feathers to fly above the battlefield where she fires down blasts of Magical damage up to 4 times while flying. Freya can't be hit when at full ascension and can cancel it anytime.",
    passiveDes: "Freya's necklace grants her additional Magical Lifesteal.",
    img: "https://i.ytimg.com/vi/zgOiIdNV9Zc/maxresdefault.jpg",
  },
  {
    name: "Ganesha",
    damageType: "Magical",
    class: "Guardian",
    ability1: "Turn of Fate",
    ability2: "Ohm",
    ability3: "Remove Obstacles",
    ult: "Dharmic Pillars",
    passive: "Good Fortune",
    ability1Des:
      "Ganesha curses his Enemies with his considerable willpower, damaging them. For each Enemy he hits (up to a maximum of 5), all Allied Gods within 55 units of Ganesha gain bonus Damage.",
    ability2Des:
      "Ganesha begins chanting and rises into the lotus position, where he is slowed slightly but may travel freely in all directions. While chanting, he silences Enemy gods in a cone in front of him, increasing Physical and Magical Protections for all nearby Allied Gods.",
    ability3Des:
      "Ganesha charges forward, hooking an enemy with his goad, holding them in place and damaging the enemy before knocking them up. While dashing, Ganesha passes through player-made deployables.",
    ultDes:
      "Ganesha summons the Four Great Pillars of Righteousness to imprison his Enemies. Between each pair of pillars a magical field is created, and Enemies who pass through the field take Damage, are Slowed, and have their Protections reduced for 3s. The first tick of this damage does an additional 60%, and Enemy Minions and Jungle Monsters take 40% of this Damage.",
    passiveDes:
      "Any time Ganesha deals a killing blow, the nearest Friendly God receives credit for the kill and Ganesha receives the rewards for an assist instead. In addition, his assist range is increased by 20 and the time before he loses his assist credit is increased by 5s.",
    img: "https://i.ytimg.com/vi/fUhxI8lbGHw/maxresdefault.jpg",
  },
  {
    name: "Geb",
    damageType: "Magical",
    class: "Guardian",
    ability1: "Roll Out",
    ability2: "Shock Wave",
    ability3: "Stone Shield",
    ult: "Cataclysm",
    passive: "Hard as a Rock",
    ability1Des:
      "Geb turns into a mass of rolling earth, damaging and Slowing enemies he encounters, stopping at the first god he hits. He increases speed as he travels and his damage increases from 75% to 100% over 3s. Once at his top speed, Geb becomes immune to Crowd Control, and will also Knockback enemy gods.",
    ability2Des:
      "Geb creates a shock wave, which ripples out from him in a cone, causing damage and Knockup to all enemies. The damage decreases the further the enemy is from Geb, down to 70% at the maximum range.",
    ability3Des:
      "Geb targets himself or an ally to put a Shield around. The Shield blocks all damage and lasts until its time expires or it takes enough damage to be destroyed. The Shield also cleanses any Crowd Control when applied.",
    ultDes:
      "Geb pulls apart the earth, dealing Magical Damage and stunning enemy gods hit. Targets take additional damage based on their current Health.",
    passiveDes: "Critical Strike bonus damage taken is decreased by 75%.",
    img: "https://i.ytimg.com/vi/xfj6bEwn9CU/maxresdefault.jpg",
  },
];

module.exports=godsSeed