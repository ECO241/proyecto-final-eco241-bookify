const { z } = require('zod');

const schBooks = z.object({
    id: z.number(),
    Name: z.string(),
    Author: z.string(),
    Edition: z.string(),
});

const schUsers = z.object({
    id: z.number(),
    idstudent: z.string(),
    contraseña: z.string(),
    Loan: z.number(),
});

const schLoans = z.object({
    id: z.number(),
    created_at: z.string(),
    Book_id: z.number(),
    
});

module.exports = schFlavor, schUsers, schLoans;