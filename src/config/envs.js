const localEnv = "http://localhost:4000"
const devEnv = "http://localhost:4000"
const prodEnv = "http://localhost:4000"

export const host = () => {
    const env = process.env.REACT_APP_NODE_ENV || "dev"
    switch (env) {
        case ("prod"):
            return prodEnv
        case ("dev"):
            return devEnv
        case ("local"):
            return localEnv
        default:
            return localEnv
    }
}