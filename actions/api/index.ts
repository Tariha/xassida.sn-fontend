"use server"

import { cookies } from "next/headers"
import { createServerActionClient } from "@supabase/auth-helpers-nextjs"

import { Author, Database, Reciter, Verse, Xassida } from "@/types/supabase"

const supabase = createServerActionClient<Database>({
  cookies,
})

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
    .select("*, chapter(count), author(*)")
    .eq("id", id)
    .single()
  if (error) throw error

  return data as any
}

const getVerseByChapter = async (
  id: number,
  offset = 1,
  page_size = 20
): Promise<Verse[]> => {
  const from = offset * page_size
  const to = from + page_size
  const { data, error } = await supabase
    .from("verse")
    .select()
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

export {
  getXassidas,
  getXassidaById,
  getVerseByChapter,
  getAuthors,
  getAuthorById,
  getReciters,
  getReciterById,
}
