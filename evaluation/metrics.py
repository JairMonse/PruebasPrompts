import matplotlib.pyplot as plt
import numpy as np

# Models and metrics
models = ['DeepSeek-V3', 'Claude S4', 'GPT-4o', 'Copilot', 'Gemini 2.5']
metrics = ['FR (%)', 'TE (%)', 'CRS', 'PCS']

# Data for Prompt Templating
pt_data = [
    [93.4, 62.1, 0.83, 11.2],
    [91.0, 59.3, 0.79, 15.4],
    [90.2, 57.0, 0.76, 18.1],
    [87.5, 54.9, 0.72, 21.7],
    [88.9, 55.6, 0.74, 19.8]
]

# Data for Chain-of-Thought
cot_data = [
    [89.1, 60.7, 0.81, 13.6],
    [92.3, 61.4, 0.84, 14.2],
    [94.0, 63.0, 0.87, 10.9],
    [85.3, 56.2, 0.71, 23.5],
    [86.8, 57.1, 0.76, 20.1]
]

pt_data = np.array(pt_data)
cot_data = np.array(cot_data)

# Plotting
x = np.arange(len(models))
width = 0.35

for i, metric in enumerate(metrics):
    plt.figure(figsize=(10, 5))
    plt.bar(x - width/2, pt_data[:, i], width, label='Prompt Template')
    plt.bar(x + width/2, cot_data[:, i], width, label='Chain-of-Thought')
    plt.ylabel(metric)
    plt.title(f'{metric} Comparison by Model')
    plt.xticks(x, models)
    plt.legend()
    plt.grid(True, linestyle='--', alpha=0.5)
    plt.tight_layout()
    plt.show()
