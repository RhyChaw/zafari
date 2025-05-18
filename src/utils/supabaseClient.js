// src/utils/supabaseClient.js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jkwifqnzrfsybbvvqmms.supabase.co';
const supabaseAnonKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imprd2lmcW56cmZzeWJidnZxbW1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1OTY1OTAsImV4cCI6MjA2MjE3MjU5MH0.C1Tjy1nNJbmJ0gmor4H5v0JIANyq9vxgt_9y34NNFM4;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
