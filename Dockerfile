FROM us.gcr.io/aftership-admin/jenkins/nodejs-onbuild:nodejs-6.11.1

EXPOSE 8080

CMD ["pm2-docker", "--no-daemon", "--json", "pm2.json"]
