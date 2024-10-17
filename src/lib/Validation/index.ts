import { z } from "zod"

export const SignupValidation = z.object({
  name: z.string().min(1, { message: 'Name must have atleast 1 character' }),
  username: z.string().min(2, { message: 'Username must have atleast 2 characters' }),
  email: z.string().email(),
  password: z.string().min(8, { message: 'Password must have atleast 8 characters' })
})

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: 'Password must have atleast 8 characters' })
})