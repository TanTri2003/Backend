import * as services from "../services"

export const register = async (req, res) => {
    try {
        const { Fistname, Lastname, email, password } = req.body
        
        if (!Fistname || !Lastname || !email || !password) return res.status(400).json({
            err: 1,
            mes: 'Missing payloads'
        })

        const response = await services.register(req.body)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            mes: 'Iternal Server Error'
        })
    }
}
export const login = async (req, res) => {
    try {
        const { Fistname, Lastname, email, password } = req.body
        
        if (!Fistname || !Lastname || !email || !password) return res.status(400).json({
            err: 1,
            mes: 'Missing payloads'
        })

        const response = await services.login(req.body)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            mes: 'Iternal Server Error'
        })
    }
}