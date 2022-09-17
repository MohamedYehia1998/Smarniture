aws s3 cp ./build s3://randombucket1998/
aws s3 cp --cache-control="max-age=0, no-cache, no-store, must-revalidate" ./build/index.html s3://randombucket1998/