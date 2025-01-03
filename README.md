# React Adhoc - Simple KYC
## Technologies
- React v18
- React Router v6
- Tailwind
- Flowbite and [Flowbite Admin Template](https://github.com/themesberg/flowbite-admin-dashboard/tree/main)
- [SWR](https://swr.vercel.app/)
- [React-hook-form](https://react-hook-form.com/)
- [Heroicons](https://heroicons.com/)
  
## Getting Started
Install all dependencies

```bash
npm i
```

Run the development server:

```bash
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Functionality

### 1. Login
- You will automatically be redirected to [http://localhost:3000/auth/login](http://localhost:3000/auth/login).
- Use `Change role to ____` button to change role between *user* or *admin*.
- Select `Remember me`.

### 2. Change your personal information
- Choose *Info* in the sidebar or navigate to [http://localhost:3000/home/user](http://localhost:3000/home/user).
- Change between **Personal Information** and **KYC** tab.
- Add or remove sections by `Add ___` or `×` buttons according to your need.
- **Fill in all fields**.
- Click `Submit` button to submit form.

### 3. View all submissions ***(For `admin` only)***
- Choose *Submissions* in the sidebar or navigate to [http://localhost:3000/home/submissions](http://localhost:3000/home/submissions).
- Click corresponded `Approve` button to aprrove that submission.
- Click corresponded `Reject` button to reject that submission.

### 4. View submission preview ***(For `admin` only)***
- Choose *Submissions* in the sidebar and click on one specific row.
- Change between **Info** and **KYC** tab to view.
- Use `To ___ tab` for quick tab change.
- Click `Approve` button to aprrove submission.
- Click `Reject` button to reject submission.\
*Redirect to all submissions page aftter action*

### 5. Sign out
- Click `Sign out` button in the header.
- You will be redirect to the login page.
