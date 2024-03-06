export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      audio: {
        Row: {
          created_at: string
          duration: string | null
          file: string
          id: number
          reciter_id: number | null
          xassida_id: number | null
        }
        Insert: {
          created_at?: string
          duration?: string | null
          file: string
          id?: number
          reciter_id?: number | null
          xassida_id?: number | null
        }
        Update: {
          created_at?: string
          duration?: string | null
          file?: string
          id?: number
          reciter_id?: number | null
          xassida_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "audio_reciter_id_fkey"
            columns: ["reciter_id"]
            isOneToOne: false
            referencedRelation: "reciter"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audio_xassida_id_fkey"
            columns: ["xassida_id"]
            isOneToOne: false
            referencedRelation: "xassida"
            referencedColumns: ["id"]
          }
        ]
      }
      author: {
        Row: {
          created_at: string
          id: number
          info: Json | null
          name: string
          picture: string | null
          slug: string
          tariha: string
        }
        Insert: {
          created_at?: string
          id?: number
          info?: Json | null
          name: string
          picture?: string | null
          slug: string
          tariha: string
        }
        Update: {
          created_at?: string
          id?: number
          info?: Json | null
          name?: string
          picture?: string | null
          slug?: string
          tariha?: string
        }
        Relationships: []
      }
      chapter: {
        Row: {
          created_at: string
          id: number
          name: string | null
          number: number
          slug: string
          xassida_id: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
          number: number
          slug: string
          xassida_id?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
          number?: number
          slug?: string
          xassida_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "chapter_xassida_id_fkey"
            columns: ["xassida_id"]
            isOneToOne: false
            referencedRelation: "xassida"
            referencedColumns: ["id"]
          }
        ]
      }
      reciter: {
        Row: {
          created_at: string
          id: number
          name: string
          picture: string | null
          slug: string
          tariha: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          picture?: string | null
          slug: string
          tariha: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          picture?: string | null
          slug?: string
          tariha?: string
        }
        Relationships: []
      }
      verse: {
        Row: {
          chapter_id: number
          created_at: string
          id: number
          key: string
          number: number
          slug: string
          text: string
          transcription: string
        }
        Insert: {
          chapter_id: number
          created_at?: string
          id?: number
          key: string
          number: number
          slug: string
          text: string
          transcription: string
        }
        Update: {
          chapter_id?: number
          created_at?: string
          id?: number
          key?: string
          number?: number
          slug?: string
          text?: string
          transcription?: string
        }
        Relationships: [
          {
            foreignKeyName: "verse_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "chapter"
            referencedColumns: ["id"]
          }
        ]
      }
      verse_timing: {
        Row: {
          audio_id: number
          created_at: string
          duration: string | null
          id: number
          timestamp_from: string
          timestamp_to: string
          verse_number: number
        }
        Insert: {
          audio_id: number
          created_at?: string
          duration?: string | null
          id?: number
          timestamp_from: string
          timestamp_to: string
          verse_number: number
        }
        Update: {
          audio_id?: number
          created_at?: string
          duration?: string | null
          id?: number
          timestamp_from?: string
          timestamp_to?: string
          verse_number?: number
        }
        Relationships: [
          {
            foreignKeyName: "verse_timing_audio_id_fkey"
            columns: ["audio_id"]
            isOneToOne: false
            referencedRelation: "audio"
            referencedColumns: ["id"]
          }
        ]
      }
      verse_translation: {
        Row: {
          author: string | null
          created_at: string
          id: number
          lang: string
          slug: string
          text: string | null
          verse_id: number
        }
        Insert: {
          author?: string | null
          created_at?: string
          id?: number
          lang: string
          slug: string
          text?: string | null
          verse_id: number
        }
        Update: {
          author?: string | null
          created_at?: string
          id?: number
          lang?: string
          slug?: string
          text?: string | null
          verse_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "verse_translation_verse_id_fkey"
            columns: ["verse_id"]
            isOneToOne: false
            referencedRelation: "verse"
            referencedColumns: ["id"]
          }
        ]
      }
      xassida: {
        Row: {
          author_id: number
          created_at: string
          id: number
          name: string
          slug: string
        }
        Insert: {
          author_id: number
          created_at?: string
          id?: number
          name: string
          slug: string
        }
        Update: {
          author_id?: number
          created_at?: string
          id?: number
          name?: string
          slug?: string
        }
        Relationships: [
          {
            foreignKeyName: "xassida_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "author"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never

type IVerse = Tables<"verse">
type IXassida = Tables<"xassida">
type IAudio = Tables<"audio">
export type Author = Tables<"author">
export type Reciter = Tables<"reciter">

export interface Audio extends IAudio {
  reciter: Reciter
  xassida: IXassida
}

export interface Verse extends IVerse {
  translations: { lang: string; text: string }[]
}

export interface Xassida extends IXassida {
  author: Author
  chapter: { id: number; number: number }[]
  reciter?: Reciter[]
}
