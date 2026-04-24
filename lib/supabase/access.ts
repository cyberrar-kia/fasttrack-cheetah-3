import { createClient } from './server'

export async function getUserAccess(): Promise<{
  user: any | null
  hasAccess: boolean
  isLoggedIn: boolean
}> {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return { user: null, hasAccess: false, isLoggedIn: false }
    }

    const { data: profile } = await supabase
      .from('user_profiles')
      .select('has_access')
      .eq('id', user.id)
      .single()

    return {
      user,
      hasAccess: profile?.has_access ?? false,
      isLoggedIn: true,
    }
  } catch {
    return { user: null, hasAccess: false, isLoggedIn: false }
  }
}
