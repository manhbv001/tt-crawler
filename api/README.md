# Task list

- [x] Init Project
- [ ] Add design class diagram
- [ ] Auth module
  - [ ] Login
  - [ ] Register
  - [ ] Forgot password
  - [ ] Reset password
  - [ ] Logout
- [ ] User module CRUD
- [ ] Post Category CRUD
- [ ] Post Tag CRUD
- [ ] Post CRUD

# Command line tool generator

- [ ] Base command
- [ ] Command `make`
  - [ ] `make:entities {name}`
  - [ ] `make:repository {repositoryName}`
  - [ ] `make:module {moduleName}`
    - [ ] `--crud` create module with crud include service repository controller
  - [ ] `make:config {name}` create config file
  - [ ] `make:controller {moduleName} {controllerName}` create controller file
  - [ ] `make:service {moduleName} {serviceName}` create service file