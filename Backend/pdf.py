import PyPDF2
from transformers import T5ForConditionalGeneration, T5Tokenizer

# Load the T5 model and tokenizer
model = T5ForConditionalGeneration.from_pretrained("t5-base")
tokenizer = T5Tokenizer.from_pretrained("t5-base")

# Extract text from PDF
def extract_text_from_pdf(pdf_path):
    with open(pdf_path, "rb") as file:
        reader = PyPDF2.PdfReader(file)
        text = ""
        for page in reader.pages:
            text += page.extract_text()
    return text

# Generate questions from text
def generate_questions(text):
    inputs = tokenizer("generate questions: " + text, return_tensors="pt", max_length=512, truncation=True)
    outputs = model.generate(inputs.input_ids, max_length=150)
    questions = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return questions

# Usage
pdf_text = extract_text_from_pdf("example.pdf")
questions = generate_questions(pdf_text)
print("Generated Questions:", questions)
