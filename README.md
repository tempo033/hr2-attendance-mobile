# HR2 Attendance Mobile

Official employee attendance app for HR2.

Architecture: HR2 Web → Supabase → attendance-api Edge Function → Mobile App.

The mobile app uses Supabase Auth for identity and never contains a service-role/secret key. Attendance writes are server-validated and resolve the signed-in user to an existing HR2 employee through attendance_employee_users.

## Setup
1. Copy .env.example to .env.
2. Set the Supabase publishable key for the existing HR2 project.
3. npm install
4. npm start

## MVP
Login → current employee → check-in → server timestamp → HR2 → check-out → HR2.
