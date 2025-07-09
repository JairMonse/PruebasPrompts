# Install dependencies
#!pip install Faker

# Import libraries
import pandas as pd
import numpy as np
from faker import Faker
import random

# Initial setup
fake = Faker()
random.seed(42)
np.random.seed(42)

# Categorical attributes
LANGUAGES = ['Python', 'JavaScript', 'Java', 'C++', 'C#', 'TypeScript']
AI_TOOLS = ['Microsoft Copilot', 'ChatGPT', 'Claude', 'Gemini', 'DeepSeek']
TASKS = ['Boilerplate', 'Debugging', 'Documentation', 'Optimization', 'Algorithm Design']
ROLES = ['Estudiante', 'Junior', 'Senior', 'Docente', 'Tech Lead']
DOMAINS = ['Web Development', 'Mobile Apps', 'Backend Systems', 'Machine Learning', 'DevOps']


PROMPT_TEMPLATE = (
    "Implementar el algoritmo {algorithm_name} en {language}. "
    "La función debe recibir {input_desc} y devolver {output_desc}."
)

CHAIN_OF_THOUGHT = (
    "To implement the {algorithm_name} algorithm in {language}, follow these steps:\n"
    "1. {step1}\n2. {step2}\n3. {step3}\nNow write the complete implementation."
)

# Algorithm description data
ALGORITHM = "bubble sort"
INPUT_DESC = "an array of integers"
OUTPUT_DESC = "the array sorted in ascending order"
STEPS = {
    'step1': "Define a function that accepts the array",
    'step2': "Iterate through the array multiple times",
    'step3': "Swap elements if the left is greater than the right"
}

# Prompt dictionary per language
PROMPT_TEMPLATES = {
    lang: PROMPT_TEMPLATE.format(
        algorithm_name=ALGORITHM, language=lang,
        input_desc=INPUT_DESC, output_desc=OUTPUT_DESC
    )
    for lang in LANGUAGES
}

CHAIN_OF_THOUGHT_PROMPTS = {
    lang: CHAIN_OF_THOUGHT.format(
        algorithm_name=ALGORITHM, language=lang,
        step1=STEPS['step1'], step2=STEPS['step2'], step3=STEPS['step3']
    )
    for lang in LANGUAGES
}

# Data generator
def generate_enhanced_dataset(n_developers=2000):
    data = []
    for _ in range(n_developers):
        experience = random.randint(1, 20)
        language = random.choice(LANGUAGES)
        role = random.choice(ROLES)
        domain = random.choice(DOMAINS)
        prompt_type = random.choice(['template', 'cot'])
        prompt = PROMPT_TEMPLATES[language] if prompt_type == 'template' else CHAIN_OF_THOUGHT_PROMPTS[language]
        uses_ai = random.choices([True, False], weights=[0.8, 0.2])[0]

        if uses_ai:
            ai_tool = random.choice(AI_TOOLS)
            usage_frequency = random.choices(['Daily', 'Weekly', 'Monthly'], weights=[0.6, 0.3, 0.1])[0]
            task_type = random.choice(TASKS)
            acceptance_rate = round(np.random.beta(5, 2), 2)
            time_saved = round(np.random.normal(0.3, 0.1), 2)
            satisfaction = random.randint(1, 5)
        else:
            ai_tool = None
            usage_frequency = None
            task_type = None
            acceptance_rate = 0.0
            time_saved = 0.0
            satisfaction = 0

        data.append({
            'developer_id': fake.uuid4(),
            'user_role': role,
            'years_experience': experience,
            'programming_language': language,
            'prompt_type': prompt_type,
            'code_prompt': prompt,
            'uses_ai': uses_ai,
            'domain': domain,
            'ai_tool': ai_tool,
            'usage_frequency': usage_frequency,
            'task_type': task_type,
            'acceptance_rate': acceptance_rate,
            'time_saved': time_saved,
            'satisfaction_rating': satisfaction
        })

    return pd.DataFrame(data)

# Generate dataset and save
df = generate_enhanced_dataset()
df.to_csv('dataset_algoritmos_prompt_cot.csv', index=False)
print("✅ Enhanced dataset generated successfully!")
df.head()
