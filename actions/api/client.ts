"use server"

import { cookies } from "next/headers"
import { createServerActionClient } from "@supabase/auth-helpers-nextjs"

import {
  Audio,
  Author,
  Database,
  Reciter,
  TablesInsert,
  TablesUpdate,
  Verse,
  Xassida,
} from "@/types/supabase"

//const supabase = createClientComponentClient<Database>({})
const supabase = createServerActionClient<Database>({
  cookies: () => cookies(),
})

const signInWithEmail = async (values: { email: string; password: string }) => {
  const { error } = await supabase.auth.signInWithPassword(values)
  if (error) throw Error

  return true
}

const signOut = async () => await supabase.auth.signOut()

const searchXassida = async (search: string): Promise<Xassida[]> => {
  const { data, error } = await supabase
    .from("xassida")
    .select("*, author(name, tariha)")
    .like("name", `%${search}%`)
    .limit(10)
  if (error) throw error

  return data as any
}

const searchReciter = async (search: string): Promise<Reciter[]> => {
  const { data, error } = await supabase
    .from("reciter")
    .select("*")
    .like("name", `%${search}%`)
    .limit(10)
  if (error) throw error

  return data as any
}

const getXassidas = async (
  filters = {},
  offset = 0,
  page_size = 15
): Promise<Xassida[]> => {
  const from = offset * page_size
  const to = from + page_size - 1
  let query = supabase
    .from("xassida")
    .select("*, author!inner(*)")
    .order("name")
  // apply filters
  Object.entries(filters).forEach(([k, v]) => {
    if (v) query = query.filter(k, "eq", v)
  })
  const { data, error } = await query.range(from, to)
  if (error) throw error

  return data as any
}

const getXassidaById = async (id: number): Promise<Xassida> => {
  const { data, error } = await supabase
    .from("xassida")
    .select("*, chapter(id, number), author(*), reciter(id, name)")
    .eq("id", id)
    .single()
  if (error) throw error

  return data as any
}

const getVersesByChapterId = async (
  id: number,
  offset = 1,
  page_size = 20
): Promise<Verse[]> => {
  const from = offset * page_size
  const to = from + page_size - 1
  const { data, error } = await supabase
    .from("verse")
    .select("*, translations:verse_translation(*)")
    .eq("chapter_id", id)
    .order("number")
    .range(from, to)
  if (error) throw error

  return data as any
}

const getAuthors = async (
  filters = {},
  offset = 0,
  page_size = 15
): Promise<Author[]> => {
  const from = offset * page_size
  const to = from + page_size - 1
  let query = supabase.from("author").select().order("name")
  // apply filters
  Object.entries(filters).forEach(([k, v]) => {
    if (v) query = query.filter(k, "eq", v)
  })
  const { data, error } = await query.range(from, to)
  if (error) throw error

  return data
}

const getAuthorById = async (id: number): Promise<Author> => {
  const { data, error } = await supabase
    .from("author")
    .select()
    .eq("id", id)
    .single()
  if (error) throw error

  return data
}

const getReciters = async (
  filters = {},
  offset = 0,
  page_size = 15
): Promise<Reciter[]> => {
  const from = offset * page_size
  const to = from + page_size - 1
  let query = supabase.from("reciter").select().order("name")
  // apply filters
  Object.entries(filters).forEach(([k, v]) => {
    if (v) query = query.filter(k, "eq", v)
  })
  const { data, error } = await query.range(from, to)
  if (error) throw error

  return data
}

const getReciterById = async (id: number): Promise<Reciter> => {
  const { data, error } = await supabase
    .from("author")
    .select()
    .eq("id", id)
    .single()
  if (error) throw error

  return data
}

const createReciter = async (
  values: TablesInsert<"reciter">
): Promise<Reciter> => {
  const { data, error } = await supabase.from("reciter").insert(values).select()

  if (error) throw error

  return data as any
}

const updateReciter = async (id: number, values: TablesUpdate<"reciter">) => {
  const { data, error } = await supabase
    .from("reciter")
    .update(values)
    .eq("id", id)
    .select()

  if (error) throw error

  return data as any
}

const deleteReciter = async (id: number) => {
  const { error } = await supabase.from("reciter").delete().eq("id", id)

  if (error) throw error
}

const getAudios = async (
  filters = {},
  offset = 0,
  page_size = 15
): Promise<Audio[]> => {
  const from = offset * page_size
  const to = from + page_size - 1
  let query = supabase
    .from("audio")
    .select("*, reciter!inner(*), xassida(id, name, reciter(id, name))")
    .order("id")
  // apply filters
  Object.entries(filters).forEach(([k, v]) => {
    if (v) query = query.filter(k, "eq", v)
  })
  const { data, error } = await query.range(from, to)
  if (error) throw error

  return data as any
}

const getAudioById = async (id: number): Promise<Audio> => {
  const { data, error } = await supabase
    .from("audio")
    .select("*, reciter(*), xassida(id, name, reciter(id, name))")
    .eq("id", id)
    .single()
  if (error) throw error

  return data as any
}

const createAudio = async (values: TablesInsert<"audio">): Promise<Audio> => {
  const { data, error } = await supabase.from("audio").insert(values).select()

  if (error) throw error

  return data as any
}

const updateAudio = async (id: number, values: TablesUpdate<"audio">) => {
  const { data, error } = await supabase
    .from("audio")
    .update(values)
    .eq("id", id)
    .select()

  if (error) throw error

  return data as any
}

const deleteAudio = async (id: number) => {
  const { error } = await supabase.from("audio").delete().eq("id", id)

  if (error) throw error
}

const uploadFile = async (file: File, path: string, name: string) => {
  const { error } = await supabase.storage.from(path).upload(name, file, {
    upsert: true,
  })
  if (error) return { success: false, error }
  else return { success: true, image: name }
}

export {
  searchXassida,
  searchReciter,
  getXassidas,
  getXassidaById,
  getVersesByChapterId,
  getAuthors,
  getAuthorById,
  getReciters,
  getReciterById,
  createReciter,
  updateReciter,
  deleteReciter,
  getAudios,
  getAudioById,
  createAudio,
  updateAudio,
  deleteAudio,
  signInWithEmail,
  signOut,
  uploadFile,
}
