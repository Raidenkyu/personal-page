# joaoccm.me
My own (João Maduro) personal website. This project was developed using *Gatsby* and at the moment it's hosted in the Netlify servers.

Go check it out in [joaoccm.me](https://www.joaoccm.me).

## Usage
### Setup project
```bash
git clone git@github.com:Raidenkyu/personal-page.git
cd personal-page
npm install
```
To clone the project and install all the dependencies.
### How to run the development environment
```bash
npm start
```
This will create a development server with hot reloading which will listen on `http://localhost:3000`.
### How to build
```bash
npm run build
```
This will produce a folder named `public`, which contains the minified javascript, ready to be deployed.
### How to deploy
```bash
scripts/deploy_staging.sh
```
To deploy in a staging environment.

```bash
scripts/deploy_prod.sh
```
To deploy in a production environment.
