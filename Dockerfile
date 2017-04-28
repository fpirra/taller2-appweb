FROM ubuntu:14.04

RUN apt-get update

RUN apt-get install -y software-properties-common python-software-properties
RUN add-apt-repository main
RUN add-apt-repository universe
RUN add-apt-repository restricted
RUN add-apt-repository multiverse


RUN apt-get install -y nodejs
RUN apt-get install -y npm
RUN apt-get install -y apache2

ENTRYPOINT ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]