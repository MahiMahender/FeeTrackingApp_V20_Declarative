export const ROLE_ACCESS = [
  { path: 'login', rolesAllowed: ['SuperAdmin', 'InstituteAdmin'] },
  { path: 'dashbord', rolesAllowed: ['SuperAdmin', 'InstituteAdmin'] },
  { path: 'master', rolesAllowed: ['SuperAdmin'] },
  { path: 'package', rolesAllowed: ['SuperAdmin'] },
  { path: 'institute', rolesAllowed: ['SuperAdmin', 'InstituteAdmin'] },
  { path: 'branch', rolesAllowed: ['InstituteAdmin'] },
  { path: 'course', rolesAllowed: ['InstituteAdmin'] },
  { path: 'enrollment', rolesAllowed: ['InstituteAdmin'] },
  { path: 'student', rolesAllowed: ['InstituteAdmin'] },
  { path: 'payment', rolesAllowed: ['InstituteAdmin'] },
  { path: 'activations', rolesAllowed: ['SuperAdmin'] },
];
