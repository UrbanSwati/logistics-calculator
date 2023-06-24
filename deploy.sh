#! /bin/sh
sam build && sam deploy --stack-name $PROJECT --s3-bucket $SAM_BUCKET --s3-prefix $PROJECT --no-confirm-changeset --no-fail-on-empty-changeset --capabilities CAPABILITY_IAM --on-failure=DELETE \
--parameter-overrides "ParameterKey=CustomDomainName,ParameterValue=$DOMAIN_NAME ParameterKey=CertificateArn,ParameterValue=$CERTIFICATE_ARN ParameterKey=HostedZoneId,ParameterValue=$HOSTED_ZONE_ID"