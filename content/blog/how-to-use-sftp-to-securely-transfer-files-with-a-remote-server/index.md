---
title: How To Use SFTP to Securely Transfer Files with a Remote Server
date: 2021-05-06T01:53:21.480Z
description: Securely transfer files over secure shell (SSH)
tags:
  - sftp
  - ssh
---
SFTP (SSH File Transfer Protocol) is a secure file protocol that is used to access, manage, and transfer files over an encrypted SSH transport.

When compared with the traditional FTP protocol, SFTP offers all the functionality of FTP, but it is more secure and easier to configure.

### Establishing an SFTP connection
```shell
sftp -i path/to/pem_file remote_username@server_ip_or_hostname
```

### Downloading Files with the SFTP Command
```shell
get filename
```

### Uploading Files with the SFTP Command
```shell
put filename
```

### Local Working Directory
```shell
lpwd
```

### Exit SFTP session
```shell
exit
```