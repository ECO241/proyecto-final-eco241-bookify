const z = require('zod')

const bookschema = z.object({
    nombre: z.string(),
    autor: z.string(),
    edicion: z.string(),
});

module.exports = bookschema