FROM asia-east1-docker.pkg.dev/aftership-admin/ci-artifacts/nodejs-onbuild:nodejs-6.11.1

EXPOSE 8080

CMD ["pm2-docker", "--no-daemon", "--json", "pm2.json"]
