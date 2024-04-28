const z = require('zod')

const userschema = z.object({
    nombre: z.string(),
    codigo: z.string(),
});

module.exports = userschema