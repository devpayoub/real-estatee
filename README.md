# 🏠 Real Estate Platform

A modern, full-stack real estate platform built with React, TypeScript, and Supabase. This application provides a comprehensive solution for real estate agents to showcase properties, manage blog content, and interact with clients.

## 🖼️ Project HomePage

![HomePage Screenshot](real-estatee.png)

## ✨ Features

### 🏘️ Property Management
- **Property Listings**: Browse and search properties with detailed information
- **Property Details**: Comprehensive property pages with images, descriptions, and features
- **Property Categories**: Organized by type (buy/rent) and location
- **Image Gallery**: High-quality property images with carousel functionality

### 📝 Blog System
- **Blog Articles**: Rich content management system for real estate insights
- **Admin Blog Management**: Full CRUD operations for blog posts
- **Categories**: Organized content by real estate topics
- **Image Support**: Rich media support for blog posts

### 🧮 Calculators & Tools
- **Mortgage Calculator**: Calculate monthly payments, interest rates, and loan terms
- **Transfer Tax Calculator**: Compute property transfer taxes and fees
- **Interactive Forms**: User-friendly calculation tools

### 🔔 Client Services
- **Property Alerts**: Email notifications for new properties matching criteria
- **Free Evaluations**: Property evaluation request system
- **Contact Management**: Client inquiry and communication system

### 👨‍💼 Admin Dashboard
- **Secure Authentication**: Supabase-based authentication system
- **Content Management**: Full control over blog posts and property listings
- **Client Management**: Handle evaluations, alerts, and contact requests
- **Analytics**: Track user interactions and property views

### 🎨 Modern UI/UX
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Components**: Built with shadcn/ui and Radix UI
- **Smooth Animations**: AOS (Animate On Scroll) integration
- **Accessibility**: WCAG compliant components

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern component library
- **Radix UI** - Accessible component primitives

### Backend & Database
- **Supabase** - Backend-as-a-Service (BaaS)
  - PostgreSQL database
  - Real-time subscriptions
  - Authentication system
  - Row Level Security (RLS)

### State Management
- **React Context** - Global state management
- **React Query** - Server state management
- **React Hook Form** - Form state management

### Additional Libraries
- **Lucide React** - Beautiful icons
- **AOS** - Scroll animations
- **date-fns** - Date manipulation
- **recharts** - Data visualization
- **sonner** - Toast notifications

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/devpayoub/real-estatee.git
   cd real-estate
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Supabase Setup**
   - Create a new Supabase project
   - Enable Email authentication in Authentication > Providers
   - Create the following tables in SQL Editor:

   ```sql
   -- Blog posts table
   CREATE TABLE blog_posts (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     title TEXT NOT NULL,
     excerpt TEXT NOT NULL,
     content TEXT NOT NULL,
     image TEXT NOT NULL,
     author TEXT NOT NULL,
     category TEXT NOT NULL,
     date TEXT NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Enable RLS
   ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

   -- Create policies
   CREATE POLICY "Public read access" ON blog_posts FOR SELECT USING (true);
   CREATE POLICY "Authenticated users can insert" ON blog_posts FOR INSERT WITH CHECK (auth.role() = 'authenticated');
   CREATE POLICY "Authenticated users can update" ON blog_posts FOR UPDATE USING (auth.role() = 'authenticated');
   CREATE POLICY "Authenticated users can delete" ON blog_posts FOR DELETE USING (auth.role() = 'authenticated');
   ```

5. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── admin/          # Admin-specific components
│   ├── forms/          # Form components
│   └── sections/       # Page sections
├── pages/              # Page components
│   ├── admin/          # Admin pages
│   └── public/         # Public pages
├── contexts/           # React contexts
│   ├── AuthContext.tsx # Authentication state
│   ├── BlogContext.tsx # Blog state management
│   └── ArticleContext.tsx # Article state
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and services
│   ├── supabase.ts     # Supabase client
│   ├── blogService.ts  # Blog API service
│   └── utils.ts        # Utility functions
├── types/              # TypeScript type definitions
└── data/               # Static data and mock data
```

## 🔐 Authentication

The application uses Supabase authentication with the following features:

- **Email/Password Authentication**: Secure login system
- **Session Management**: Persistent sessions across page reloads
- **Protected Routes**: Admin-only access to dashboard
- **Role-based Access**: Different permissions for admin and public users

### Admin Access
- Create an admin user in Supabase Authentication > Users
- Use the email/password to log in at `/login`
- Access admin dashboard at `/admin/dashboard`

## 🎯 Key Features Explained

### Property Management
- **Property Cards**: Display property information with images and key details
- **Search & Filter**: Find properties by location, type, and features
- **Detailed Views**: Comprehensive property pages with all information

### Blog System
- **Rich Content**: Support for text, images, and formatting
- **Categories**: Organize content by real estate topics
- **Admin Interface**: Full content management system

### Calculators
- **Mortgage Calculator**: Calculate loan payments, interest, and terms
- **Transfer Tax Calculator**: Compute property transfer costs
- **Interactive UI**: User-friendly calculation tools

### Client Services
- **Property Alerts**: Email notifications for matching properties
- **Free Evaluations**: Property value assessment requests
- **Contact System**: Client communication management

## 🚀 Deployment

### Build for Production
```bash
npm run build
# or
yarn build
```

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Configure environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👨‍💼 About

 Real Estate Agent
- Specialized in residential and commercial properties
- 15+ years of experience in real estate
- Serving Longueuil, QC, Canada area

## 🆘 Support

For support, email  or create an issue in the repository.

---