import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

const supabase = createClientComponentClient()

const uploadFile = async (file: File, path: string, name: string) => {
  const { error } = await supabase.storage.from(path).upload(name, file, {
    upsert: true,
  })
  if (error) return { success: false, error }
  else return { success: true, image: name }
}

export default uploadFile
