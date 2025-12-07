# Crypto Site

A crypto site built with Plasmic and Next.js, deployed on Vercel.

## Setup

1. Copy `env.sample` to `.env.local`:
   ```bash
   cp env.sample .env.local
   ```

2. Add your Plasmic credentials to `.env.local`:
   - `PLASMIC_PROJECT_ID`: Your Plasmic project ID
   - `PLASMIC_PROJECT_API_TOKEN`: Your Plasmic API token

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy to Vercel

1. Push to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard:
   - `PLASMIC_PROJECT_ID`
   - `PLASMIC_PROJECT_API_TOKEN`
4. Deploy!

