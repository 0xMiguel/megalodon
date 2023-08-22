import { createClient } from '@supabase/supabase-js';
import { Database } from '@boilerplate/types';
import { config } from 'dotenv';

import {resolve} from "path";
import process from "process";

const envPath = resolve(__dirname, process.env.NODE_ENV === 'development' ? `../../.env.local` : `../../.env.production`);
config({path: envPath})

// eslint-disable-next-line turbo/no-undeclared-env-vars
const supabaseApiUrl = process.env.SUPABASE_API as string;
// eslint-disable-next-line turbo/no-undeclared-env-vars
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY as string;
// Supabase client for server-side applications
export const supabaseClient = createClient<Database>(supabaseApiUrl, supabaseAnonKey);
