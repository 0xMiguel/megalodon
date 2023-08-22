import { supabaseClient } from '@boilerplate/clients/supabase';
import { db } from '@boilerplate/clients/db'

async function main() {
  try {
    // const db =
    // const {data, error} = await client.auth.signUp({
    //   email: 'wow@monke.com',
    //   password: 'example-password',
    // })
    // if (error) {
    //   console.log('error creating user', error)
    //   return
    // }

    // console.log('created user', data)
    // const results = await db.select().from(users);
    // console.log(results);
    //
    // await db.insert(users).values({ fullName: 'test', phone: 'sd'})
  } catch (err) {
    console.log(err)
  }
}
main()


export {}