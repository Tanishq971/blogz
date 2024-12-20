import z from "zod"


export const singupInput = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(30),
    name: z.string().optional()
})

//type inference 


export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(30),
})



export const createBlogInput = z.object({
    title: z.string(),
    content: z.string(),
})



export const updateBlogInput = z.object({
    id:z.string(),
    title: z.string(),
    content: z.string(),
})


export type SingupInput = z.infer<typeof singupInput>
export type UpdateBlogInput = z.infer<typeof updateBlogInput>
export type CreateBlogInput = z.infer<typeof createBlogInput>
export type SigninInput = z.infer<typeof signinInput>