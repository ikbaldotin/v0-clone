import { inngest } from "./client";

import { gemini, createAgent } from "@inngest/agent-kit";

const model = gemini({ model: "gemini-1.5-flash" });

export const helloWorld = inngest.createFunction(
    { id: "hello-world" },
    { event: "agent/hello" },
    async ({ event, step }) => {
        const helloAgent = createAgent({
            name: "hello-agent",
            description: "A simple agent that say hello",
            system: "You are a helpfull assistant.Always greet with enthusiam",
            model: gemini({ model: "gemini-2.5-flash" })
        })
        const { output } = await helloAgent.run("Say to hello user!")
        return {
            message: output[0].content
        }
    },
);