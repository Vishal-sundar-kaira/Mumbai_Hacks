import re

vata_weights = {
    "Body Size": 0.875,
    "Body Weight": 0.875,
    "Cheeks": 0.75,
    "Face Shape/Chin": 0.875,
    "Eyes": 0.875,
    "Nose": 0.875,
    "Lips": 0.75,
    "Teeth": 0.875,
    "Skin": 0.75,
    "Hair": 0.875,
    "Appetite": 0.625,
    "Digestion": 0.75,
    "Thirst": 0.625,
    "Emotions": 0.875,
    "Mind": 0.625,
    "Intellect": 0.625,
    "Speech": 0.75,
    "Voice": 0.625,
}

pitta_weights = {
    "Body Size": 0.583,
    "Body Weight": 0.583,
    "Cheeks": 0.583,
    "Face Shape/Chin": 0.583,
    "Eyes": 0.666,
    "Nose": 0.75,
    "Lips": 0.666,
    "Teeth": 0.583,
    "Skin": 0.666,
    "Hair": 0.666,
    "Appetite": 0.75,
    "Digestion": 0.75,
    "Thirst": 0.666,
    "Emotions": 0.75,
    "Mind": 0.583,
    "Intellect": 0.75,
    "Speech": 0.75,
    "Voice": 0.666,
}

kapha_weights = {
    "Body Size": 0.75,
    "Body Weight": 0.875,
    "Cheeks": 0.75,
    "Face Shape/Chin": 0.75,
    "Eyes": 0.875,
    "Nose": 0.875,
    "Lips": 0.875,
    "Teeth": 0.583,
    "Skin": 0.75,
    "Hair": 0.875,
    "Appetite": 0.875,
    "Digestion": 0.875,
    "Thirst": 0.583,
    "Emotions": 0.875,
    "Mind": 0.875,
    "Intellect": 0.583,
    "Speech": 0.583,
    "Voice": 0.875,
}


questions = [
    "What is your body size?",
    "What is your body weight?",
    "Describe your cheeks.",
    "Tell us about your face shape or chin.",
    "Describe your eyes.",
    "Tell us about your nose.",
    "Describe your lips.",
    "Tell us about your teeth.",
    "Describe your skin.",
    "Tell us about your hair.",
    "How is your appetite?",
    "Describe your digestion.",
    "Tell us about your thirst.",
    "Describe your emotions.",
    "Tell us about your mind.",
    "Describe your intellect.",
    "How is your speech?",
    "Tell us about your voice.",
]


vata_score = 0
pitta_score = 0
kapha_score = 0
vata_keywords = {
    "Body Size": ["slim", "thin", "lean"],
    "Body Weight": ["low", "light"],
    "Cheeks": ["wrinkled", "sunken"],
    "Face Shape/Chin": ["thin", "angular"],
    "Eyes": ["small", "sunken", "dry", "nervous"],
    "Nose": ["uneven", "deviated septum"],
    "Lips": ["dry", "cracked", "black/brown tinge"],
    "Teeth": ["stick out", "big", "roomy", "thin gums"],
    "Skin": ["thin", "dry", "cold", "rough", "dark"],
    "Hair": ["dry", "brown/black", "knotted", "brittle", "scarce"],
    "Appetite": ["irregular", "scanty"],
    "Digestion": ["irregular", "forms gas"],
    "Thirst": ["changeable"],
    "Emotions": ["anxiety", "fear", "uncertainty"],
    "Mind": ["restless"],
    "Intellect": ["quick but faulty response"],
    "Speech": ["rapid", "unclear", "talkative"],
    "Voice": ["weak", "hoarse"],
}

pitta_keywords = {
    "Body Size": ["medium"],
    "Body Weight": ["medium"],
    "Cheeks": ["smooth", "flat"],
    "Face Shape/Chin": ["tapering", "triangular"],
    "Eyes": ["sharp", "bright", "sensitive to light"],
    "Nose": ["long pointed", "red nose-tip"],
    "Lips": ["red", "inflamed", "yellowish"],
    "Teeth": ["medium", "soft", "tender gums"],
    "Skin": ["smooth", "oily", "warm", "rosy"],
    "Hair": ["straight", "oily", "blonde", "gray", "red"],
    "Appetite": ["strong", "unbearable"],
    "Digestion": ["quick", "causes burning"],
    "Thirst": ["surplus"],
    "Emotions": ["anger", "hate", "jealousy"],
    "Mind": ["impatient"],
    "Intellect": ["accurate response"],
    "Speech": ["clear", "sharp", "penetrating"],
    "Voice": ["strong tone"],
}

kapha_keywords = {
    "Body Size": ["large"],
    "Body Weight": ["overweight"],
    "Cheeks": ["rounded", "plump"],
    "Face Shape/Chin": ["rounded", "double chin"],
    "Eyes": ["big", "beautiful", "blue", "calm", "loving"],
    "Nose": ["short rounded", "button nose"],
    "Lips": ["smooth", "oily", "cool", "white", "pale"],
    "Teeth": ["healthy", "white", "strong gums"],
    "Skin": ["thick", "oily", "cool", "white", "pale"],
    "Hair": ["thick", "curly", "oily", "wavy", "luxuriant"],
    "Appetite": ["slow but steady"],
    "Digestion": ["prolonged", "forms mucous"],
    "Thirst": ["sparse"],
    "Emotions": ["calm", "greedy", "attachment"],
    "Mind": ["calm"],
    "Intellect": ["slow, exact"],
    "Speech": ["quiet", "slow", "monotonous"],
    "Voice": ["deep", "good tone"],
}

for question in questions:
    user_input = input(f"{question} ").lower()
    user_tokens = re.findall(r'\b\w+\b', user_input)
    print()

 
    for feature, keywords in vata_keywords.items():
        weight = vata_weights[feature]
        for keyword in keywords:
            if keyword in user_tokens:
                vata_score += weight

    for feature, keywords in pitta_keywords.items():
        weight = pitta_weights[feature]
        for keyword in keywords:
            if keyword in user_tokens:
                pitta_score += weight

    for feature, keywords in kapha_keywords.items():
        weight = kapha_weights[feature]
        for keyword in keywords:
            if keyword in user_tokens:
                kapha_score += weight


max_score = max(vata_score, pitta_score, kapha_score)
if max_score == vata_score:
    dominant_dosha = "Vata"
elif max_score == pitta_score:
    dominant_dosha = "Pitta"
else:
    dominant_dosha = "Kapha"


print(f"Based on your responses, your dominant dosha is {dominant_dosha}")

from prettytable import PrettyTable


myTable = PrettyTable(["Vata Score", "Pita Score", "Kapha Score"])


myTable.add_row([vata_score,pitta_score,kapha_score])


print(myTable)

