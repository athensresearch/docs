# Self-Hosting Backend

## No Data Loss

Our number one design principle is to never have data loss.

All accounts of data loss will be documented publicly on our [GitHub Discussions](https://github.com/athensresearch/athens/discussions/categories/post-mortems).

Our last (and only) account of data loss was in February 2021 on our local-only version of Athens, before we made a public release, posted by a developer contributor.

When the self-hosted backend was in `alpha`, we had known issues of data loss, crashing, and freezing because the distributed events system being incomplete. We discovered and solved these issues internally as a team. We did not invite others to use this build during this period.

Now we are in `beta`, meaning we are ready to open up Athens for beta testers. We don't have known issues with data loss, crashing, and freezing anymore, and the first implementation of the distributed events system is complete. That said, we need to open this up to beta at this point because we need more real-world testing in a variety of contexts beyond our own team of six to go from `beta` to `stable`.

We invite feedback on anything and everything, don't be shy! We've created two new Discord channels, 2.0.0-beta and data loss at **2.0.0-beta-feedback** and **#data-loss**, respectively. [Join us on Discord!](https://discord.gg/avzDmq3nah)

## Client

To connect to an Athens server, you must know its remote address (an IP address, URL, or localhost) and its password. Skip to [server](#server) to setup a server first if you haven't yet.

You can connect to the backend through the DB Picker. Open the DB Picker with the button in the top left:

![db-picker-button](https://user-images.githubusercontent.com/8952138/142514926-f61c4070-f3b5-4ded-b8a4-2219c410a64d.png)

Go the **Join** tab and add the database name (give whatever name you want, it is only stored on the client), the remote address (which you can get from the server administrator), and the password (leave empty if no password). Then press the **Join** button.

![join-tab](https://user-images.githubusercontent.com/8952138/142514744-c87d95b9-ee6d-4f39-839f-75d2f8f1c5f9.png)

If the address and password match, congrats! You should be in a collaborative, self-hosted Athens! Read more

## Server

You can run Athens in your local environment, [Docker](#docker), or [DigitalOcean](#digitalocean). Setup docs do not yet exist for AWS or GCP, but feel free to contribute and add these!

### Custom Config

The default configuration can be found in `config.edn`.
You can customize it through the `config_edn` environment variable.

Here's an example on how to configure the server password using `config_edn`.
```
config_edn: "{:password "YourServerPassword"}"
```
The `config_edn` will be merged to other configs via deep merging.


### Running Athens Self-Hosted Server

Run the following commands in two different terminals:

``` shell
docker-compose up fluree
yarn server
```

The first command starts the Fluree database using docker to persist data.
If you set `:in-memory? false` in `dev/clj/config.edn` no data is persisted and this command is not needed.

The second command will start HTTP server on port 3010, unless you've modified `dev/clj/config.edn`.

Also nREPL server is started on port 8877, unless you've modified `dev/clj/config.edn`.


### Developing Athens Self-Hosted Server

This requires 3 or 4 terminals.

Start Fluree ledger:

``` shell
yarn server:fluree
```

Start Athens server:

``` shell
yarn server
```

Start Athens client (same steps as [Running Athens Locally](running))

``` shell
yarn dev
```

``` shell
yarn client:electron
```

**Clean the Fluree DB**

Stop Athens server, [ctrl+c] if using `yarn server`.

Stop Fluree ledger.

``` shell
yarn server:fluree:down
```

By default, Fluree ledger stores data in `./athens-data/fluree`. Clean out this folder.

``` shell
rm -rf ./athens-data/fluree/**
```

Restart Athens server and Fluree ledger.

``` shell
yarn server:fluree
```


``` shell
yarn server
```

## Docker

You can create an Athens server without installing anything else via docker compose.

At any point, if any of the services fails to launch or something seems broken, you have two options to debug.

1. You can run `docker-compose ps`  to see all running services. You should see that services `fluree`, `athens`, and `nginx` are "up" and/or "healthy". ![docker-ps-output](https://user-images.githubusercontent.com/8952138/142656719-21c54b94-8f50-4091-9044-a72bac1988a2.png)
2. Additionally, you can use `docker-compose logs SERVICE_NAME` to inspect what the problem is further.

Pick a [release](https://github.com/athensresearch/athens/releases) you'd like to use and download the `docker-compose.yml`. For example, for `v2.0.0-beta.13`:

```sh
curl -L -o docker-compose.yml https://github.com/athensresearch/athens/releases/download/v2.0.0-beta.13/docker-compose.yml
```
On Linux, `fluree` fails to launch if it does not have enough permissions for the `./athens-data` folder. The current workaround for this is to manually create the data folder and give all users of the machine read and write access. This is not a long-term workaround, and we will have more constrained permissions before Athens RTC is available for general release.

If you are on Mac, you can skip this workaround.
```
mkdir -p ./athens-data/fluree
chmod -R 777 ./athens-data/fluree
```

Then, start Docker Compose!

```
docker-compose up --detach
```

If you want to configure a password, you can override the app configuration via an environment variable:

```sh
CONFIG_EDN="{:password \"YourServerPassword\"}" docker-compose up
```

or via an `.env` file located in the same directory as the downloaded `docker-compose.yml`:

```sh
# .env
CONFIG_EDN="{:password \"YourServerPassword\"}"
```

Currently, the only server config we have is for the password. If you update the password, then clients that previously logged in will not have access unless. They must update the password on their end to get back in.

### Updating Docker
To update your deployment, curl the new `docker-compose.yml` file and restart docker-compose entirely:

```
# curl a new version of Athens described by docker-compose
curl -L -o docker-compose.yml https://github.com/athensresearch/athens/releases/download/v2.0.0-beta.13/docker-compose.yml

# restart docker-compose
docker-compose down
docker-compose pull
docker-compose up --detach
```


## Amazon Web Services (AWS)

Setting up Athens on AWS is fairly straightforward.

Go to the EC2 Dashboard.

![](/img/self-hosting/aws-ec2.jpg)

Choose the first Amazon Machine Image (AMI). At the time of writing, this is:

```
Amazon Linux 2 AMI (HVM) - Kernel 5.10, SSD Volume Type - ami-001089eb624938d9f
```

![](/img/self-hosting/aws-ami.jpg)

Choose an instance type. Athens requires at least 4GBs of memory, a `t2.medium`.

![](/img/self-hosting/aws-instance-type.png)

Update security group to allow `HTTP` traffic.

![](/img/self-hosting/aws-security-groups.jpg)

Press **Launch**. AWS will ask you to either create a key pair or choose an existing key to let you SSH to the EC2 instance. Choose an option and launch.


After a minute or so, your instance should be **Running**.

Go to the instance, press **Actions**, and select **Connect**.

You can connect using **EC2 Instance Connect** from the AWS UI or **SSH client** via your terminal.

Once you connect to your EC2 instance, you need to install `docker` and update permissions for Linux user `ec2-user`.

``` shell
sudo yum update -y

sudo yum install -y docker

sudo service docker start

sudo usermod -a -G docker ec2-user
```

Install `docker-compose` and give it executable permissions. You can find releases at https://github.com/docker/compose/releases. At the time of this writing, the latest release is `2.2.3`, and the AMI image has an `x86_64` architecture.

```shell
sudo curl -L "https://github.com/docker/compose/releases/download/v2.2.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

# Test the installation

docker-compose --version

```

More docker-compose docs can be found on their [docs](https://docs.docker.com/compose/install/).

Download the Athens docker-compose file. At the time of this writing, the latest version is `v2.0.0-beta.13`. You can find all releases [here](https://github.com/athensresearch/athens/releases).

```shell
curl -L https://github.com/athensresearch/athens/releases/download/v2.0.0-beta.13/docker-compose.yml -o docker-compose.yml
```


Create the folder where your data will be stored.

```shell
mkdir -p ./athens-data/fluree

chmod -R 777 ./athens-data/fluree
```

Run `docker-compose`.

```
docker-compose up
```

Athens should be running. Otherwise, follow the instructions at our [Docker docs](#docker) for additional help and context.

From the AWS console, copy your IP address. Make sure there isn't a leading `http://` or ending `/`.

An example URL would be:

```
3.143.226.192
```

Paste the URL to your Athens [Client](#client).

![](/img/self-hosting/aws-join-ip.jpg)

You should be connected to your Athens EC2 instance!

## DigitalOcean

Athens the team has tested the backend beta server on DigitalOcean the most, and not as much yet on other cloud providers like AWS or GCP.

A minimum of 4gb of memory is needed.

![image](https://user-images.githubusercontent.com/8952138/141150237-dce5f183-f25c-4a9b-9526-dcc310c09a44.png)

Use marketplace docker image: `docker 19.03.12 on Ubuntu 20.04` which has docker and docker-compose pre-installed.

![digital-ocean-docker-image](https://user-images.githubusercontent.com/8952138/141150155-7be8bce5-1804-431c-9cd0-4cf11e9c8d87.jpg)

If you resize your droplet image and have trouble opening the console, just wait a few minutes and refresh the Digital Ocean dashboard.

Once your droplet has been created, open the console to ssh to the server, follow the instructions in [Docker](#docker) to start the server, and copy and paste the IP address to your Athens client to connect to the server (and add a password if you configured one).

![digital-ocean-console-and-ip-address](https://user-images.githubusercontent.com/8952138/141150925-9f8df004-faa0-4fbe-9875-c276d60c5118.jpg)

## Backup your server

The backup method is currently an MVP. Please feel free to reach out on Discord or through info@athensresearch.org for help, feedback, and questions.

We call "Backups" "Save-Load" because our backups have 2 parts: saving/backing up and loading/restoring.

To backup your server, you need to have:
- An [Athens repo](https://github.com/athensresearch/athens) cloned locally. We refer to this as **LC**, short for `local computer`, below.
- A cloud server, for instance, hosted on [DigitalOcean](#digitalocean), and `ssh` access to it. We refer to this as **RS** short for `remote server`, below.

### Save (Backup) Your Server

To backup your Athens server you need to the following steps:

**LC**

Clone Athens on your local computer.

```
git clone git@github.com:athensresearch/athens.git
```

Go to the Athens folder.

```
cd athens
```

Compile the `save-load` command line utility.

```
yarn cli:compile
yarn cli:uberjar
```

**RS**

Get the **remote server** address e.g `123.456.78.9`
Send the uberjar and script to remote server. Replace `"$REMOTE_IP"` with the actual remote server address.
```
scp target/athens-cli.jar root@"$REMOTE_IP":~/athens-cli.jar
scp script/save-cronjob.sh root@"$REMOTE_IP"~/:save-cronjob.sh
```
**LC**

ssh into the remote server
```
ssh root@"$REMOTE_IP"
```

Check to see if `athens-cli.jar` and `save-cronjob.sh` files are present on the remote server

```
ls
```

```
# expected output
```

Set up an hourly cronjob for the Save (Backup). This involves using crontab, a terminal user interface, to save your Fluree ledger, the source of truth (essentially the database) in self-hosted Athens.

Backups are stored to the `/var/lib/athens/backups/` folder.

Open the crontab terminal user interface, which also contains documentation on its time parameters.
```
crontab -e
```
Add the following line to the file: `0 */1 * * * ~/save-cronjob.sh`

To change the frequency of the backups, change the cronjob parameters accordingly, following the cronjob documentation shown after running `crontab -e`.

After at least an hour, check that backups are happening:

```
ls -l /var/lib/athens/backups/
```

You should see a list of files such as:
```
-rw-r--r-- 1 root root 10785081 Jan  4 12:01 2022-01-04-12-00.edn
-rw-r--r-- 1 root root 10785858 Jan  4 13:01 2022-01-04-13-00.edn
```

### Load (Restore) Your Server

**LC**

ssh into the remote server.

```
ssh root@"$REMOTE_IP"
```

**RS**

Stop the Athens server.

```
docker-compose stop athens
```

Find the file that you want to restore from.

```
ls -l /var/lib/athens/backups
```

You should see a list of files such as:
```
-rw-r--r-- 1 root root 10785081 Jan  4 12:01 2022-01-04-12-00.edn
-rw-r--r-- 1 root root 10785858 Jan  4 13:01 2022-01-04-13-00.edn
-rw-r--r-- 1 root root 10792868 Jan  4 14:01 2022-01-04-14-00.edn
```

Load the file to Athens server, replacing `"$FILENAME` with the correct filename.

```
java -jar ~/athens-cli.jar load -f "$FILENAME"
```

Follow the instructions outputted by the above command.

Restart the Athens server
```docker-compose start athens```
If you are not able to load (Restore) the file please go through the steps again and if the problem still exists then let us know in our Discord server.

### Copy Your Backup to Your Local Machine

Here we assume that you have gone through the Save (Backup) process

**RS**

ssh into the remote server

```
ssh root@"$REMOTE_IP"
```

Find the name of file you want to get.

```
ls -l /var/lib/athens/backups
```

You should see a list of files such as:
```
-rw-r--r-- 1 root root 10785081 Jan  4 12:01 2022-01-04-12-00.edn
-rw-r--r-- 1 root root 10785858 Jan  4 13:01 2022-01-04-13-00.edn
-rw-r--r-- 1 root root 10792868 Jan  4 14:01 2022-01-04-14-00.edn
```
Get the server log to local machine.
* Replace `"$REMOTE_IP"` with the actual IP
* Replace `"$FILENAME"` with the actual filename.

```
scp root@"$REMOTE_IP":/var/lib/athens/backups/"$FILENAME" ./
```

