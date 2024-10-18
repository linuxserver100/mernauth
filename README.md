Above code .yml file will work only in gitlab befor pushing it to git lab make sure to first copy above codes to your server and then install nodemodule files and then push it to gitlab for next steps 

In server make sure to add feployer and gitlab-runner to cd /etc/sudoers.d/90-cloud-init-users like given below 👇 

###User rules for ubuntu
ubuntu ALL=(ALL) NOPASSWD:ALL
deployer ALL=(ALL) NOPASSWD:ALL
gitlab-runner ALL=(ALL) NOPASSWD:ALL

And make sure to install new gitlab-runner to your server for above configuration 

if al procedures and files are correct then ut will be compiled and build successfully

