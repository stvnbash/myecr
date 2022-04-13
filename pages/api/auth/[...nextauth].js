import NextAuth from "next-auth"
import AzureADProvider from "next-auth/providers/azure-ad";

// console.log("hello", process.env)
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
      tenantId: process.env.AZURE_AD_TENANT_ID,
    }),
  ],

  // custom callback configurationt to allow for URLs on different sites
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return new URL(url, baseUrl).toString()
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return url
    }
  }

})
