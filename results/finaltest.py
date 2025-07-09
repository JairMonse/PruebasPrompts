import matplotlib.pyplot as plt
import numpy as np

# Data
models = ['DeepSeek-V3', 'Claude S4', 'GPT-4o', 'Copilot', 'Gemini 2.5']
metrics = ['PR', 'TE', 'CRS', 'PCS']

# Prompt Templating (PT) results
pt_data = [
    [93.4, 62.1, 0.83, 11.2],
    [91.0, 59.3, 0.79, 15.4],
    [90.2, 57.0, 0.76, 18.1],
    [87.5, 54.9, 0.72, 21.7],
    [88.9, 55.6, 0.74, 19.8]
]

# Chain-of-Thought (CoT) results
cot_data = [
    [89.1, 60.7, 0.81, 13.6],
    [92.3, 61.4, 0.84, 14.2],
    [94.0, 63.0, 0.87, 10.9],
    [85.3, 56.2, 0.71, 23.5],
    [86.8, 57.1, 0.76, 20.1]
]

pt_data = np.array(pt_data)
cot_data = np.array(cot_data)

# Bar chart settings
x = np.arange(len(models))
width = 0.35
offsets = [-1.5*width/4, -0.5*width/4, 0.5*width/4, 1.5*width/4]

fig, ax = plt.subplots(figsize=(12, 7))

# Colors for clarity
colors = ['#FDB813', '#FC6600', '#FF69B4', '#FF33CC', '#00CED1', '#1E90FF', '#228B22', '#ADFF2F']

# Plot all metrics side by side
for i in range(len(metrics)):
    ax.bar(x + offsets[0] + i*width/8, pt_data[:, i], width/8, label=f'{metrics[i]} (Prompt Template)')
    ax.bar(x + offsets[1] + i*width/8, cot_data[:, i], width/8, label=f'{metrics[i]} (Chain of Thought)')

ax.set_ylabel('Puntaje')
ax.set_title('Comparación de métricas de rendimiento entre modelos')
ax.set_xticks(x)
ax.set_xticklabels(models)
ax.legend(loc='upper center', bbox_to_anchor=(0.5, -0.15), ncol=4)
ax.grid(True, linestyle='--', alpha=0.5)
plt.tight_layout()
plt.show()
