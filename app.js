import { GOOGLE_GEMINI_API_KEY, SYSTEM_PROMPT } from './ai-config.js';

export async function sendChatMessage(userMessage) {
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GOOGLE_GEMINI_API_KEY}`;

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [
                    {
                        role: "user",
                        parts: [{ text: `${SYSTEM_PROMPT}\n\nMensagem do Usuário: ${userMessage}` }]
                    }
                ]
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Erro na API Gemini:", errorData);
            throw new Error("Falha na resposta da API");
        }

        const data = await response.json();
        const botResponse = data.candidates[0].content.parts[0].text;
        
        return botResponse;
        
    } catch (error) {
        // Logando o erro real no console para debug rápido, sem exibir alerta genérico aqui
        console.error("Erro detalhado no sendChatMessage:", error);
        throw error;
    }
}
