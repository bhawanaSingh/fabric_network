## Hyperledger Convector Suits
In this session we will discuss about the what *Hyperledger Convector* all about and why it is required for the hyperledger fabric devlopment. instead of writing go on traditional Go lang, Hyperledger Convector support the *Typescrit* for writing the chaincode and modelling language to make the project sckelton. The Convector Suits is created and mantainted by WorldSibu to support Enterprise Blockchain Networks. It provides easiest ways to to create your own smart contract.
Before going to stat this session let first work on some dependencies required to build your first application on hyperledger convector. 
## Dependencies/ Packages:
- Download the *VS Code Editor* for writing your smart contract.
- Download the NVM.
```
$ curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
$ source ~/.profile 
$ nvm ls-remote
$ nvm install v10.16.3
$ node --version
```
or you can follow up the [link](https://tecadmin.net/install-nodejs-with-nvm/) to download NVM. 
- Downlaod Docker and Docker-Compose using this [link](https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-16-04). 

## Hurley
Hurley is used as a devlopment enviorment for running Enterprise Blockchain by supporting the Hyperledger Fabric. Hurly is an open source project under the Apahe 2.0 licence, to crete Convector projects.
```
$ npm i -g @worldsibu/hurley ## 1.1.2
$ npm upgrade -g @worldsibu/hurley ## upgrade
$ hurl --version
```
The simplest way to quickely setup the Hyperledger Fabric devlopment enviorment instead of running the the typical commands supported by Hyperledger Fabric and do changes in the ymal files, Hyperledger convector provides some easy commnads to start working with your initial smart contracts.
``` 
$ hurl new ## navigate to your project directory and run this commnad it will create a setup of 2 organization each containg one admin aand one peer attachetd with command channel. 
```

## Convector-CLI
Convector CLI is the official Command-Line Interface for Convector Framework. It is an open source project under an Apache 2.0 license to help you create Convector projects easily.
The fastest and easiest way to build a new Convector Smart Contracts project. It is fully integrated with Hurley as well.
```
$ npm install -g @worldsibu/convector-cli
$ npm update -g @worldsibu/convector-cli ##upgrade
```
#### Open the terminal and follow up the commands
After running all those above commands create your first projcet by writing the below commands.
```
$ conv new myfirstapp
```


