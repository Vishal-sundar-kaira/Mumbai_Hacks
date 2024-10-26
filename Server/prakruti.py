import pandas as pd
from prettytable import PrettyTable
import sys
vata = {
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
pitta = {
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
kapha = {
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
data = {
 "Feature": list(vata.keys()),
 "Vata1": ["Slim", "Low", "Wrinkled/Sunken", 
"Thin, angular", "Small, sunken, dry, nervous", 
"Uneven, deviated septum", "Dry, cracked, black/brown tinge", "Stick out, big, roomy, thin gums", "Thin, dry, cold, rough, dark", "Dry, brown, black, knotted, brittle, scarce", "Irregular, scanty", "Irregular, forms gas","Changeable", "Anxiety, fear, uncertainty", "Restless", "Quick but faulty response", "Rapid, unclear, talkative", "Weak, hoarse"],
 "Pitta1": ["Medium", "Medium", "Smooth flat", 
"Tapering/triangular", "Sharp, bright, gray, green, yellow/red, sensitive to light", "Long pointed, red nose-tip", "Red, inflamed, yellowish", "Medium, soft, tender gums", "Smooth, oily, warm, rosy", "Straight, oily, blonde, gray, red", "Strong, unbearable", 
"Quick, causes burning", "Surplus", "Anger, hate, jealousy", "Impatient", "Accurate response", "Clear, sharp, penetrating", "Strong tone"],
 "Kapha1": ["Large", "Overweight", "Rounded/Plump", "Rounded, double chin", "Big, beautiful, blue, calm, loving", "Short rounded, button nose", 
"Smooth, oily, cool, white, pale", "Healthy, white, strong gums", "Thick, oily, cool, white, pale", 
"Thick, curly, oily, wavy, luxuriant", "Slow but steady", "Prolonged, forms mucous", "Sparse", "Calm, greedy, attachment", "Calm", "Slow, exact", "Quiet, slow, monotonous", "Deep, good tone"],
}
df = pd.DataFrame(data)
vata_score = 0
pitta_score = 0
kapha_score = 0
# print("Questionnaire:\n")
choices = sys.argv[1:]
for index, row in df.iterrows():
    # print(f"{index + 1}. {row['Feature']}:")
    # print(" Option A:", row['Vata1'])
    # print(" Options B:", row['Pitta1'])
    # print(" Options: C", row['Kapha1'])
    choice = choices[index].strip().capitalize()
    # while True:
    #     choice = input("\n\nChoose an option (A/B/C): \n").strip().capitalize()
    #     if choice in ["A", "B", "C"]:
    #         break
    #     else:
    #         print("Invalid choice. Please enter 'A', 'B', or 'C'.")
    
    vata_score += vata[row['Feature']] if choice == "A" else 0
    pitta_score += pitta[row['Feature']] if choice == "B" else 0
    kapha_score += kapha[row['Feature']] if choice == "C" else 0
max_score = max(vata_score, pitta_score, kapha_score)
if max_score == vata_score:
    dominant_dosha = "Vata"
elif max_score == pitta_score:
    dominant_dosha = "Pitta"
else:
    dominant_dosha = "Kapha"
print(dominant_dosha)
# print(f"Based on your responses, your dominant dosha is {dominant_dosha}.")
# myTable = PrettyTable(["Vata Score", "Pita Score", 
# "Kapha Score"])
# myTable.add_row([vata_score,pitta_score,kapha_score])
# print(myTable)